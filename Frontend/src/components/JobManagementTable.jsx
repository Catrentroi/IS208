import React, { useState } from "react";

const JobManagementTable = ({ onCreateJob }) => {
    const [jobs] = useState([
        {
            id: 1,
            title: "Tuyển dụng Business Analyst",
            date: "25/5/2025",
            status: "Đã đăng",
            applications: 24,
            views: 156,
        },
        {
            id: 2,
            title: "Tuyển dụng Frontend Developer",
            date: "23/5/2025",
            status: "Đã đăng",
            applications: 18,
            views: 98,
        },
        {
            id: 3,
            title: "Tuyển dụng Project Manager",
            date: "22/5/2025",
            status: "Đã đăng",
            applications: 31,
            views: 203,
        },
        {
            id: 4,
            title: "Tuyển dụng UI/UX Designer",
            date: "20/5/2025",
            status: "Đã đăng",
            applications: 12,
            views: 87,
        },
        {
            id: 5,
            title: "Tuyển dụng DevOps Engineer",
            date: "19/5/2025",
            status: "Đã đăng",
            applications: 8,
            views: 45,
        },
        {
            id: 6,
            title: "Tuyển dụng Marketing Manager",
            date: "18/5/2025",
            status: "Đã đăng",
            applications: 15,
            views: 112,
        },
        {
            id: 7,
            title: "Tuyển dụng Data Analyst",
            date: "17/5/2025",
            status: "Đã đăng",
            applications: 22,
            views: 134,
        },
        {
            id: 8,
            title: "Tuyển dụng HR Specialist",
            date: "16/5/2025",
            status: "Đã đăng",
            applications: 19,
            views: 76,
        },
        {
            id: 9,
            title: "Tuyển dụng Sales Representative",
            date: "15/5/2025",
            status: "Đã đăng",
            applications: 27,
            views: 189,
        },
        {
            id: 10,
            title: "Tuyển dụng Content Writer",
            date: "14/5/2025",
            status: "Đã đăng",
            applications: 14,
            views: 91,
        },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

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

    return (
        <div className="w-full space-y-6">
            {/* Header Section */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Danh sách tin tuyển dụng</h2>
                    <p className="text-gray-600 mt-1">Quản lý và theo dõi các tin tuyển dụng của bạn</p>
                </div>
                <button
                    onClick={onCreateJob}
                    className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-3"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="group-hover:rotate-180 transition-transform duration-300"
                    >
                        <path
                            d="M12 5V19M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    TẠO TIN TUYỂN DỤNG
                </button>
            </div>

            {/* Table Container */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Table Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-4">
                            <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Tiêu đề tin</span>
                        </div>
                        <div className="col-span-2 text-center">
                            <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Ngày đăng</span>
                        </div>
                        <div className="col-span-2 text-center">
                            <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Ứng viên</span>
                        </div>
                        <div className="col-span-2 text-center">
                            <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Lượt xem</span>
                        </div>
                        <div className="col-span-2 text-center">
                            <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Trạng thái</span>
                        </div>
                    </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-100">
                    {currentJobs.map((job, index) => (
                        <div
                            key={job.id}
                            className={`group px-8 py-6 hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-teal-50/50 transition-all duration-300 ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                            }`}
                        >
                            <div className="grid grid-cols-12 gap-4 items-center">
                                <div className="col-span-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-emerald-600"
                                            >
                                                <path
                                                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M14 2V8H20"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors duration-200">
                                                {job.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                ID: #{job.id.toString().padStart(3, "0")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="text-gray-400"
                                        >
                                            <path
                                                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M16 2V6M8 2V6M3 10H21"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-700">{job.date}</span>
                                    </div>
                                </div>
                                <div className="col-span-2 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-blue-600"
                                            >
                                                <path
                                                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                                <path
                                                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-lg font-bold text-gray-800">{job.applications}</span>
                                    </div>
                                </div>
                                <div className="col-span-2 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-purple-600"
                                            >
                                                <path
                                                    d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                                <path
                                                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-lg font-bold text-gray-800">{job.views}</span>
                                    </div>
                                </div>
                                <div className="col-span-2 text-center">
                                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                                        {job.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                {/* Results Info */}
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-600">Hiển thị</span>
                    <div className="relative">
                        <select
                            value={itemsPerPage}
                            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                            className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 pr-10 rounded-xl appearance-none cursor-pointer hover:border-emerald-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                        >
                            <path
                                d="M3.06 5.25L7 9.1875L10.94 5.25"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-600">trong số {jobs.length} kết quả</span>
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <button
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 ${
                            currentPage === 1
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 shadow-md hover:shadow-lg border border-gray-200"
                        }`}
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M11.25 13.5L6.75 9L11.25 4.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* Page Numbers */}
                    {[...Array(Math.min(totalPages, 5))].map((_, index) => {
                        let pageNumber;
                        if (totalPages <= 5) {
                            pageNumber = index + 1;
                        } else if (currentPage <= 3) {
                            pageNumber = index + 1;
                        } else if (currentPage >= totalPages - 2) {
                            pageNumber = totalPages - 4 + index;
                        } else {
                            pageNumber = currentPage - 2 + index;
                        }

                        return (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                className={`flex items-center justify-center w-10 h-10 rounded-xl font-medium transition-all duration-200 ${
                                    currentPage === pageNumber
                                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25"
                                        : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 shadow-md hover:shadow-lg border border-gray-200"
                                }`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    {/* Next Button */}
                    <button
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 ${
                            currentPage === totalPages
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 shadow-md hover:shadow-lg border border-gray-200"
                        }`}
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M6.75 4.5L11.25 9L6.75 13.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobManagementTable;
