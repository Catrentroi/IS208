import React, { useState } from "react";

const InterviewManagementTable = () => {
    const [interviews] = useState([
        {
            id: 1,
            candidateName: "Nguyễn Văn A",
            applicationDate: "25/5/2025",
            interviewTime: "30/5/2025",
            status: "Chưa phỏng vấn",
        },
        {
            id: 2,
            candidateName: "Nguyễn Văn A",
            applicationDate: "25/5/2025",
            interviewTime: "30/5/2025",
            status: "Chưa phỏng vấn",
        },
        {
            id: 3,
            candidateName: "Nguyễn Văn A",
            applicationDate: "25/5/2025",
            interviewTime: "30/5/2025",
            status: "Chưa phỏng vấn",
        },
        {
            id: 4,
            candidateName: "Nguyễn Văn A",
            applicationDate: "25/5/2025",
            interviewTime: "30/5/2025",
            status: "Chưa phỏng vấn",
        },
        {
            id: 5,
            candidateName: "Nguyễn Văn A",
            applicationDate: "25/5/2025",
            interviewTime: "30/5/2025",
            status: "Chưa phỏng vấn",
        },
        {
            id: 6,
            candidateName: "Nguyễn Văn A",
            applicationDate: "25/5/2025",
            interviewTime: "30/5/2025",
            status: "Chưa phỏng vấn",
        },
        {
            id: 7,
            candidateName: "Nguyễn Văn A",
            applicationDate: "25/5/2025",
            interviewTime: "30/5/2025",
            status: "Chưa phỏng vấn",
        },
        {
            id: 8,
            candidateName: "Nguyễn Văn A",
            applicationDate: "25/5/2025",
            interviewTime: "30/5/2025",
            status: "Chưa phỏng vấn",
        },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

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

                {/* Table Body */}
                <div className="divide-y divide-black/10">
                    {currentInterviews.map((interview) => (
                        <div key={interview.id} className="px-[81px] py-6 border-b border-black/10">
                            <div className="flex items-center gap-[206px] w-full">
                                <span className="text-xs font-normal leading-[1.21] text-black w-[100px]">
                                    {interview.candidateName}
                                </span>
                                <span className="text-xs font-normal leading-[1.21] text-black w-[80px]">
                                    {interview.applicationDate}
                                </span>
                                <span className="text-xs font-normal leading-[1.21] text-black w-[80px]">
                                    {interview.interviewTime}
                                </span>
                                <div className="flex justify-end">
                                    <span className="bg-[#85A947] text-[#1E1E1E] text-xs font-bold leading-[1.21] px-3 py-1.5 rounded-[15px]">
                                        {interview.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-between mt-6 px-8">
                {/* Results Info */}
                <div className="flex items-center gap-2.5">
                    <span className="text-xs font-normal leading-[1.24] text-[#8A8C90]">Hiển thị</span>
                    <div className="relative">
                        <select
                            value={itemsPerPage}
                            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                            className="bg-[#EEEEEF] text-[#52545B] text-xs font-medium leading-[1.05] px-2 py-1.5 pr-6 rounded-lg appearance-none cursor-pointer"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 text-[#52545B] pointer-events-none"
                        >
                            <path
                                d="M3.06 5.25L7 9.1875L10.94 5.25"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <span className="text-xs font-normal leading-[1.24] text-[#8A8C90]">trong số 184</span>
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <button
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className={`flex items-center justify-center w-7.5 h-7.5 rounded-lg ${
                            currentPage === 1
                                ? "bg-[#F6F6F7] text-[#BEBFC2] cursor-not-allowed"
                                : "bg-[#F6F6F7] text-[#BEBFC2] hover:bg-gray-300"
                        }`}
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M5.625 3.9375L10.125 9L5.625 14.0625"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                transform="rotate(180 9 9)"
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

                        if (pageNumber < 1 || pageNumber > totalPages) return null;

                        return (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                className={`flex items-center justify-center w-7.5 h-7.5 rounded-lg text-xs font-medium leading-[1.05] ${
                                    currentPage === pageNumber
                                        ? "bg-[#27553F] text-white"
                                        : "bg-[#EEEEEF] text-[#52545B] hover:bg-gray-300"
                                }`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    {/* Ellipsis */}
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                        <span className="flex items-center justify-center w-7.5 h-7.5 text-xs font-medium text-[#52545B]">
                            ...
                        </span>
                    )}

                    {/* Last Page */}
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            className="flex items-center justify-center w-7.5 h-7.5 rounded-lg bg-[#EEEEEF] text-[#52545B] text-xs font-medium leading-[1.05] hover:bg-gray-300"
                        >
                            {totalPages}
                        </button>
                    )}

                    {/* Next Button */}
                    <button
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className={`flex items-center justify-center w-7.5 h-7.5 rounded-lg ${
                            currentPage === totalPages
                                ? "bg-[#F6F6F7] text-[#BEBFC2] cursor-not-allowed"
                                : "bg-[#EEEEEF] text-[#272932] hover:bg-gray-300"
                        }`}
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M6.75 3.9375L11.25 9L6.75 14.0625"
                                stroke="currentColor"
                                strokeWidth="1"
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

export default InterviewManagementTable;
