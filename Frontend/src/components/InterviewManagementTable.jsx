import React, { useState, useEffect } from "react";
import { interviewService } from "../api";

const InterviewManagementTable = () => {
    const [interviews, setInterviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // Fetch interviews from API
    useEffect(() => {
        fetchInterviews();
    }, []);
    
    const fetchInterviews = async () => {
        try {
            setLoading(true);
            const response = await interviewService.getAllInterviews();
            setInterviews(response.interviews || []);
            setError(null);
        } catch (err) {
            console.error("Error fetching interviews:", err);
            setError("Không thể tải lịch phỏng vấn. Vui lòng thử lại.");
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
    
    // Format date and time from API
    const formatDateTime = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("vi-VN", {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "numeric",
            year: "numeric",
        }).replace(",", " -");
    };

    const totalPages = Math.ceil(interviews.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentInterviews = interviews.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (items) => {
        setItemsPerPage(items);
        setCurrentPage(1);
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
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Lỗi</h2>
                <p className="text-gray-600 mb-4">{error}</p>
                <button 
                    onClick={fetchInterviews}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Thử lại
                </button>
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Table */}
            <div className="bg-white rounded-t-[15px] overflow-hidden">
                {/* Table Header */}
                <div className="bg-[#FBF7EB] px-[93px] py-8 flex items-center">
                    <div className="flex items-center gap-[191px] w-full">
                        <span className="text-xs font-bold leading-[1.21] text-[#85A947]">Tên ứng viên</span>
                        <span className="text-xs font-bold leading-[1.21] text-[#85A947]">Ngày nộp</span>
                        <span className="text-xs font-bold leading-[1.21] text-[#85A947]">Thời gian phỏng vấn</span>
                        <span className="text-xs font-bold leading-[1.21] text-[#85A947]">Trạng thái</span>
                    </div>
                </div>

                {/* Empty state */}
                {interviews.length === 0 && (
                    <div className="p-8 text-center">
                        <div className="text-gray-400 text-5xl mb-4">🗓️</div>
                        <h3 className="text-xl font-bold text-gray-700 mb-2">Không có lịch phỏng vấn</h3>
                        <p className="text-gray-500">Chưa có lịch phỏng vấn nào được đặt</p>
                    </div>
                )}

                {/* Table Body */}
                {interviews.length > 0 && (
                    <div className="divide-y divide-black/10">
                        {currentInterviews.map((interview) => (
                            <div key={interview._id} className="px-[81px] py-6 border-b border-black/10">
                                <div className="flex items-center gap-[206px] w-full">
                                    <span className="text-xs font-normal leading-[1.21] text-black w-[100px]">
                                        {interview.candidate?.user?.fullName || "Không có thông tin"}
                                    </span>

                                    <span className="text-xs font-normal leading-[1.21] text-black w-[100px]">
                                        {interview.application ? formatDate(interview.application.createdAt) : "Không có thông tin"}
                                    </span>

                                    <span className="text-xs font-normal leading-[1.21] text-black w-[210px]">
                                        {formatDateTime(interview.scheduledTime)}
                                    </span>

                                    <span className="text-xs font-normal leading-[1.21] text-black">
                                        <div
                                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                                interview.status === "Đã hoàn thành"
                                                    ? "bg-green-100 text-green-800"
                                                    : interview.status === "Đang phỏng vấn"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : "bg-yellow-100 text-yellow-800"
                                            }`}
                                        >
                                            {interview.status || "Chưa phỏng vấn"}
                                        </div>
                                    </span>

                                    <button className="bg-[#FBF7EB] text-[#85A947] px-6 py-[9px] text-center">
                                        Chi tiết
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Pagination */}
            {interviews.length > 0 && (
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
                            trên tổng số {interviews.length} lịch phỏng vấn
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
            )}
        </div>
    );
};

export default InterviewManagementTable;
