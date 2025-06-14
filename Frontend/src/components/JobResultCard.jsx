import React, { useState } from "react";
import { Link } from "react-router-dom";
import JobApplicationModal from "./JobApplicationModal";

const JobResultCard = ({ job, onApply, onFavorite }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApplyClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsModalOpen(true);
    };
    return (
        <Link to={`/job/${job?.id || 1}`} className="block group">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 mb-6 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer group-hover:scale-[1.01] group-hover:border-emerald-200">
                <div className="flex items-start gap-6">
                    {/* Company Logo */}
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 border border-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                                <path
                                    d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>

                    {/* Job Details */}
                    <div className="flex-1">
                        <h3 className="font-bold text-2xl text-gray-800 mb-3 leading-tight group-hover:text-emerald-700 transition-colors duration-300">
                            {job?.title || "Nhân Viên Marketing (Mảng Thú Y/Thủy Sản)"}
                        </h3>
                        <p className="text-gray-600 font-semibold text-lg mb-4 flex items-center gap-2">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                                <path
                                    d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21L12 17L19 21Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                            {job?.company || "CÔNG TY TNHH PLASMA"}
                        </p>

                        {/* Salary */}
                        <div className="mb-4">
                            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-2xl font-semibold text-lg shadow-lg shadow-emerald-500/25 flex items-center gap-2 inline-flex">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6312 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6312 13.6815 18 14.5717 18 15.5C18 16.4283 17.6312 17.3185 16.9749 17.9749C16.3185 18.6312 15.4283 19 14.5 19H6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                {job?.salary || "10 - 15 triệu"}
                            </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow-md flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
                                {job?.experience || "3 năm"}
                            </span>
                            <span className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow-md flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                                </svg>
                                {job?.location || "Hồ Chí Minh"}
                            </span>
                        </div>
                    </div>

                    {/* Action Section */}
                    <div className="flex flex-col items-end space-y-4">
                        {/* Favorite Button */}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                onFavorite?.(job);
                            }}
                            className="w-12 h-12 bg-gray-100 hover:bg-red-50 border border-gray-200 hover:border-red-300 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group/fav"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-gray-400 group-hover/fav:text-red-500 transition-colors duration-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>

                        {/* Apply Button */}
                        <button
                            onClick={handleApplyClick}
                            className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 19L19 12L12 5M19 12H5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Ứng tuyển ngay
                        </button>
                    </div>
                </div>

                {/* Hover Effect Decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Application Modal */}
            <JobApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} job={job} />
        </Link>
    );
};

export default JobResultCard;
