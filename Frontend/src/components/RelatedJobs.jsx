import React, { useState } from "react";
import JobCard from "./JobCard";
import JobApplicationModal from "./JobApplicationModal";

const RelatedJobs = ({ jobs, onJobClick }) => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApplyClick = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };
    const relatedJobs = jobs || [
        {
            id: 1,
            title: "Nhân Viên Marketing (Mảng Thú Y / Thủy Sản)",
            company: "CÔNG TY TNHH PLASMA",
            salary: "10 - 15 triệu",
            location: "Hồ Chí Minh",
        },
        {
            id: 2,
            title: "Nhân Viên Marketing (Mảng Thú Y / Thủy Sản)",
            company: "CÔNG TY TNHH PLASMA",
            salary: "10 - 15 triệu",
            location: "Hồ Chí Minh",
        },
        {
            id: 3,
            title: "Nhân Viên Marketing (Mảng Thú Y / Thủy Sản)",
            company: "CÔNG TY TNHH PLASMA",
            salary: "10 - 15 triệu",
            location: "Hồ Chí Minh",
        },
        {
            id: 4,
            title: "Nhân Viên Marketing (Mảng Thú Y / Thủy Sản)",
            company: "CÔNG TY TNHH PLASMA",
            salary: "10 - 15 triệu",
            location: "Hồ Chí Minh",
        },
        {
            id: 5,
            title: "Nhân Viên Marketing (Mảng Thú Y / Thủy Sản)",
            company: "CÔNG TY TNHH PLASMA",
            salary: "10 - 15 triệu",
            location: "Hồ Chí Minh",
        },
        {
            id: 6,
            title: "Nhân Viên Marketing (Mảng Thú Y / Thủy Sản)",
            company: "CÔNG TY TNHH PLASMA",
            salary: "10 - 15 triệu",
            location: "Hồ Chí Minh",
        },
    ];

    const handlePrevious = () => {
        console.log("Previous jobs");
    };

    const handleNext = () => {
        console.log("Next jobs");
    };

    return (
        <div className="py-12">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-green-800 font-bold text-3xl">Gợi ý việc làm phù hợp với bạn</h2>

                {/* Navigation Arrows */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={handlePrevious}
                        className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                        <div className="w-6 h-6 bg-gray-600 rounded transform rotate-180"></div>
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                        <div className="w-6 h-6 bg-gray-600 rounded"></div>
                    </button>
                </div>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedJobs.slice(0, 6).map((job) => (
                    <div
                        key={job.id}
                        className="bg-yellow-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    >
                        <div className="flex items-start gap-4">
                            {/* Company Logo */}
                            <div className="w-16 h-16 bg-white border border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-300 rounded"></div>
                            </div>

                            {/* Job Details */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-lg text-black mb-2 line-clamp-2">{job.title}</h3>
                                <p className="text-gray-600 font-medium text-sm mb-3">{job.company}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold">
                                        {job.salary}
                                    </span>
                                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold">
                                        {job.location}
                                    </span>
                                </div>

                                {/* Apply Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleApplyClick(job);
                                    }}
                                    className="bg-green-800 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-green-900 transition-colors"
                                >
                                    Ứng tuyển ngay
                                </button>
                            </div>

                            {/* Favorite Button */}
                            <button className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors flex-shrink-0">
                                <div className="w-5 h-5 bg-gray-400 rounded"></div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Application Modal */}
            <JobApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} job={selectedJob} />
        </div>
    );
};

export default RelatedJobs;
