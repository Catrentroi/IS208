import React, { useState } from "react";
import { Link } from "react-router-dom";
import JobApplicationModal from "./JobApplicationModal";

const JobCard = ({ job }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApplyClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsModalOpen(true);
    };
    return (
        <Link to={`/job/${job?.id || 1}`} className="block">
            <div className="bg-yellow-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                    {/* Company Logo */}
                    <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                        <div className="w-12 h-12 bg-gray-300 rounded"></div>
                    </div>

                    {/* Job Details */}
                    <div className="flex-1">
                        <h3 className="font-bold text-lg text-black mb-2">
                            {job?.title || "Nhân Viên Marketing (Mảng Thú Y / Thủy Sản)"}
                        </h3>
                        <p className="text-gray-600 font-bold text-sm mb-4">{job?.company || "CÔNG TY TNHH PLASMA"}</p>

                        {/* Tags */}
                        <div className="flex gap-2 mb-4">
                            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                                {job?.salary || "10 - 15 triệu"}
                            </span>
                            <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                                {job?.location || "Hồ Chí Minh"}
                            </span>
                        </div>

                        {/* Apply Button */}
                        <button
                            onClick={handleApplyClick}
                            className="bg-green-800 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-green-900 transition-colors"
                        >
                            Ứng tuyển ngay
                        </button>
                    </div>

                    {/* Favorite Button */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            alert("Đã thêm vào yêu thích!");
                        }}
                        className="w-8 h-8 flex items-center justify-center"
                    >
                        <svg
                            className="w-6 h-6 text-gray-400 hover:text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Application Modal */}
            <JobApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} job={job} />
        </Link>
    );
};

export default JobCard;
