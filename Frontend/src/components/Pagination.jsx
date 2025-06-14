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
        <div className="flex items-center justify-center space-x-6 py-8">
            {/* Previous Button */}
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors ${
                    currentPage === 1 ? "bg-gray-200 cursor-not-allowed opacity-50" : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
                <div className="w-6 h-6 bg-gray-600 rounded transform rotate-180"></div>
            </button>

            {/* Page Info */}
            <span className="text-black font-bold text-xl">
                {currentPage} / {totalPages} trang
            </span>

            {/* Next Button */}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors ${
                    currentPage === totalPages
                        ? "bg-gray-200 cursor-not-allowed opacity-50"
                        : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
            </button>
        </div>
    );
};

export default Pagination;
