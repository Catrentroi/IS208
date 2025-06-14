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
        <Link to={`/job/${job?.id || 1}`} className="block">
            <div className="bg-yellow-50 border border-gray-200 rounded-lg p-8 mb-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-6">
                    {/* Company Logo */}
                    <div className="w-32 h-32 bg-white border border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-24 h-24 bg-gray-300 rounded"></div>
                    </div>

                    {/* Job Details */}
                    <div className="flex-1">
                        <h3 className="font-bold text-2xl text-black mb-3 leading-tight">
                            {job?.title || "Nhân Viên Marketing (Mảng Thú Y/Thủy Sản)"}
                        </h3>
                        <p className="text-gray-600 font-bold text-lg mb-4">{job?.company || "CÔNG TY TNHH PLASMA"}</p>

                        {/* Salary */}
                        <div className="mb-4">
                            <span className="bg-green-800 text-white px-4 py-2 rounded-lg font-bold text-lg">
                                {job?.salary || "10 - 15 triệu"}
                            </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold">
                                {job?.experience || "3 năm"}
                            </span>
                            <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold">
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
                            className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                            <div className="w-6 h-6 bg-gray-400 rounded"></div>
                        </button>

                        {/* Apply Button */}
                        <button
                            onClick={handleApplyClick}
                            className="bg-green-800 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors"
                        >
                            Ứng tuyển
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-6 pt-6 border-t border-gray-300">
                    <div className="w-full h-px bg-gray-300"></div>
                </div>
            </div>

            {/* Application Modal */}
            <JobApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} job={job} />
        </Link>
    );
};

export default JobResultCard;
