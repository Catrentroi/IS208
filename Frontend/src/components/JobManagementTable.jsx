import React, { useState, useEffect } from "react";
import { jobService } from "../api";
import { Link } from "react-router-dom";

const JobManagementTable = ({ onCreateJob }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    
    // Fetch jobs from API
    useEffect(() => {
        fetchJobs();
    }, []);
    
    const fetchJobs = async () => {
        try {
            setLoading(true);
            const response = await jobService.getAllJobs({ isRecruiter: true });
            setJobs(response.jobs || []);
            setError(null);
        } catch (err) {
            console.error("Error fetching jobs:", err);
            setError("Failed to load jobs. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    
    // Format date from API (assumes ISO format)
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };
    
    // Loading state
    if (loading) {
        return (
            <div className="bg-white rounded-lg p-6 shadow">
                <div className="flex justify-between items-center mb-6">
                    <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                    <div className="h-10 bg-gray-200 rounded w-40 animate-pulse"></div>
                </div>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="h-16 bg-gray-100 rounded animate-pulse"></div>
                    ))}
                </div>
            </div>
        );
    }
    
    // Error state
    if (error) {
        return (
            <div className="bg-white rounded-lg p-6 shadow text-center">
                <div className="text-red-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Không thể tải tin tuyển dụng</h2>
                <p className="text-gray-600 mb-4">{error}</p>
                <button 
                    onClick={fetchJobs}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Thử lại
                </button>
            </div>
        );
    }
    
    const totalPages = Math.ceil(jobs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentJobs = jobs.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (items) => {
        setItemsPerPage(items);
        setCurrentPage(1);
    };
    
    const handleDeleteJob = async (jobId) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa tin tuyển dụng này?")) {
            try {
                await jobService.deleteJob(jobId);
                fetchJobs(); // Refresh the job list
                alert("Xóa tin tuyển dụng thành công!");
            } catch (err) {
                console.error("Error deleting job:", err);
                alert("Không thể xóa tin tuyển dụng. Vui lòng thử lại.");
            }
        }
    };

    return (
        <div>
            {/* Add button */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">Danh sách tin tuyển dụng</span>
                <button
                    onClick={onCreateJob}
                    className="bg-[#85A947] text-white px-4 py-2 rounded-lg flex items-center"
                >
                    <span className="mr-2">+</span> Tạo tin tuyển dụng mới
                </button>
            </div>

            {/* Table */}
            {jobs.length === 0 ? (
                <div className="bg-white rounded-lg p-8 text-center shadow">
                    <div className="text-gray-400 text-5xl mb-4">📋</div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">Chưa có tin tuyển dụng</h3>
                    <p className="text-gray-500 mb-6">Bắt đầu tạo tin tuyển dụng mới để tìm kiếm ứng viên phù hợp</p>
                    <button
                        onClick={onCreateJob}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                        Tạo tin tuyển dụng
                    </button>
                </div>
            ) : (
                <>
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#9CA3AF]/10">
                                <th className="text-left px-4 py-4 font-bold text-xs leading-[1.21] text-[#85A947]">
                                    Tên tin tuyển dụng
                                </th>
                                <th className="text-left px-4 py-4 font-bold text-xs leading-[1.21] text-[#85A947]">
                                    Ngày đăng
                                </th>
                                <th className="text-left px-4 py-4 font-bold text-xs leading-[1.21] text-[#85A947]">
                                    Trạng thái
                                </th>
                                <th className="text-left px-4 py-4 font-bold text-xs leading-[1.21] text-[#85A947]">
                                    Lượt ứng tuyển
                                </th>
                                <th className="text-left px-4 py-4 font-bold text-xs leading-[1.21] text-[#85A947]">
                                    Lượt xem
                                </th>
                                <th className="text-left px-4 py-4 font-bold text-xs leading-[1.21] text-[#85A947]">
                                    Thao tác
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#9CA3AF]/10">
                            {currentJobs.map((job) => (
                                <tr key={job._id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 text-xs font-normal leading-[1.21] text-[#1E1E1E]">
                                        {job.title}
                                    </td>
                                    <td className="px-4 py-4 text-xs font-normal leading-[1.21] text-[#1E1E1E]">
                                        {formatDate(job.createdAt)}
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="bg-[#85A947] px-4 py-2 rounded-full w-fit text-xs font-normal leading-[1.21] text-[#1E1E1E]">
                                            {job.status || "Đã đăng"}
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-xs font-normal leading-[1.21] text-[#1E1E1E]">
                                        {job.applicationCount || 0}
                                    </td>
                                    <td className="px-4 py-4 text-xs font-normal leading-[1.21] text-[#1E1E1E]">
                                        {job.viewCount || 0}
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex space-x-2">
                                            <Link to={`/job/${job._id}`} className="text-[#3E7B27] hover:underline">
                                                Xem
                                            </Link>
                                            <button className="text-[#3E7B27] hover:underline">
                                                Sửa
                                            </button>
                                            <button 
                                                className="text-red-600 hover:underline"
                                                onClick={() => handleDeleteJob(job._id)}
                                            >
                                                Xoá
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="bg-white px-4 py-4 flex items-center justify-between border-t border-[#9CA3AF]/10">
                        <div>
                            <span className="text-sm text-gray-700">
                                Hiển thị{" "}
                                <select
                                    value={itemsPerPage}
                                    onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                                    className="mx-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                </select>
                                trên tổng số {jobs.length} tin tuyển dụng
                            </span>
                        </div>
                        
                        <div className="flex items-center">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-3 py-1 rounded-l ${
                                    currentPage === 1 ? "bg-gray-100 text-gray-500" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                Trước
                            </button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`px-3 py-1 ${
                                        i + 1 === currentPage
                                            ? "bg-[#85A947] text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-3 py-1 rounded-r ${
                                    currentPage === totalPages
                                        ? "bg-gray-100 text-gray-500"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                Tiếp
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default JobManagementTable;
