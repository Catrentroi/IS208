import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex items-center justify-center py-12">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-6 shadow-lg flex items-center space-x-6">
                {/* Previous Button */}
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 ${
                        currentPage === 1
                            ? "bg-gray-100 cursor-not-allowed opacity-50"
                            : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-110 text-white"
                    }`}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={currentPage === 1 ? "text-gray-400" : "text-white"}
                    >
                        <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-2">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                            pageNum = i + 1;
                        } else if (currentPage <= 3) {
                            pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                        } else {
                            pageNum = currentPage - 2 + i;
                        }

                        return (
                            <button
                                key={pageNum}
                                onClick={() => onPageChange(pageNum)}
                                className={`w-10 h-10 flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 ${
                                    currentPage === pageNum
                                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 scale-110"
                                        : "bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 hover:scale-105"
                                }`}
                            >
                                {pageNum}
                            </button>
                        );
                    })}
                </div>

                {/* Page Info */}
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                    <span className="text-sm">Trang</span>
                    <span className="text-lg font-bold text-emerald-600">{currentPage}</span>
                    <span className="text-sm">trên</span>
                    <span className="text-lg font-bold text-emerald-600">{totalPages}</span>
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 ${
                        currentPage === totalPages
                            ? "bg-gray-100 cursor-not-allowed opacity-50"
                            : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-110 text-white"
                    }`}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={currentPage === totalPages ? "text-gray-400" : "text-white"}
                    >
                        <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Pagination;
