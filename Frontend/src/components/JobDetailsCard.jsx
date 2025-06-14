import React, { useState } from "react";
import JobApplicationModal from "./JobApplicationModal";

const JobDetailsCard = ({ job, onApply, onFavorite }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApplyClick = () => {
        setIsModalOpen(true);
    };
    const jobDetails = [
        {
            label: "Mức lương",
            value: job?.salary || "15 - 16 triệu",
            icon: "💰",
        },
        {
            label: "Địa điểm",
            value: job?.location || "Hồ Chí Minh",
            icon: "📍",
        },
        {
            label: "Kinh nghiệm",
            value: job?.experience || "3 năm",
            icon: "⚡",
        },
        {
            label: "Cấp bậc",
            value: job?.level || "Nhân viên",
            icon: "👤",
        },
        {
            label: "Trình độ học vấn",
            value: job?.education || "Đại học",
            icon: "🎓",
        },
        {
            label: "Số lượng tuyển",
            value: job?.quantity || "2 người",
            icon: "👥",
        },
        {
            label: "Hình thức làm việc",
            value: job?.workType || "Toàn thời gian",
            icon: "💼",
        },
    ];

    return (
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
            {/* Job Header */}
            <div className="flex items-start gap-6 mb-8">
                {/* Company Logo */}
                <div className="w-24 h-24 bg-white border border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-300 rounded"></div>
                </div>

                {/* Job Info */}
                <div className="flex-1">
                    <h1 className="text-green-800 font-bold text-3xl mb-4">
                        {job?.title || "Nhân Viên Marketing (Mảng Thú Y/Thủy Sản)"}
                    </h1>
                    <p className="text-black font-bold text-xl mb-6">{job?.company || "CÔNG TY TNHH PLASMA"}</p>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        <div className="bg-gray-400 text-white px-8 py-3 rounded-lg font-bold text-lg">
                            Hạn nộp hồ sơ: 30/06/2025
                        </div>
                        <button
                            onClick={handleApplyClick}
                            className="bg-green-800 text-white px-12 py-3 rounded-3xl font-bold text-xl hover:bg-green-900 transition-colors"
                        >
                            Ứng tuyển ngay
                        </button>
                        <button
                            onClick={() => onFavorite?.(job)}
                            className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                            <div className="w-8 h-8 bg-gray-400 rounded"></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Job Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {jobDetails.map((detail, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-2xl">{detail.icon}</span>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium text-lg mb-1">{detail.label}</p>
                            <p className="text-black font-bold text-lg">{detail.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Application Modal */}
            <JobApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} job={job} />
        </div>
    );
};

export default JobDetailsCard;
