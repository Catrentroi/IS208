import React, { useState } from "react";
import JobApplicationModal from "./JobApplicationModal";
import { applicationService } from "../api";

const JobDetailsCard = ({ job, onApply }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApplyClick = () => {
        // Check if user is logged in by checking for token
        const token = localStorage.getItem('token');
        
        if (!token) {
            // If not logged in, redirect to login page
            alert("Please log in to apply for this job");
            // Add the current location to localStorage to redirect back after login
            localStorage.setItem('redirectAfterLogin', window.location.pathname);
            window.location.href = '/login';
            return;
        }
        
        // If logged in, open application modal
        setIsModalOpen(true);
    };

    const handleSubmitApplication = async (applicationData) => {
        try {
            await applicationService.createApplication(job._id, applicationData);
            setIsModalOpen(false);
            // Show success notification
            alert("Application submitted successfully!");
            if (onApply) {
                onApply(applicationData);
            }
        } catch (err) {
            console.error("Error submitting application:", err);
            // Show error notification
            alert("Failed to submit application. Please try again.");
        }
    };
    
    if (!job) return <div className="text-center p-8">Job not found</div>;
    
    // Format salary for display
    const formatSalary = (salary) => {
        if (!salary) return "Negotiable";
        
        // If salary is just a string (legacy data)
        if (typeof salary === 'string') return salary;
        
        // Format based on available properties
        let formattedSalary = '';
        
        if (salary.min && salary.max) {
            formattedSalary = `${salary.min.toLocaleString()} - ${salary.max.toLocaleString()}`;
        } else if (salary.min) {
            formattedSalary = `From ${salary.min.toLocaleString()}`;
        } else if (salary.max) {
            formattedSalary = `Up to ${salary.max.toLocaleString()}`;
        } else {
            return "Negotiable";
        }
        
        // Add currency if available
        if (salary.currency) {
            formattedSalary += ` ${salary.currency}`;
        }
        
        return formattedSalary;
    };
    
    console.log("Rendering job:", job);

    const jobDetails = [
        {
            label: "Mức lương",
            value: formatSalary(job.salary),
            icon: "💰",
        },
        {
            label: "Địa điểm",
            value: job.location || "Không có thông tin",
            icon: "📍",
        },
        {
            label: "Kinh nghiệm",
            value: job.experience || "Không yêu cầu",
            icon: "⚡",
        },
        {
            label: "Loại công việc",
            value: job.jobType || "Toàn thời gian",
            icon: "💼",
        },
        {
            label: "Trình độ học vấn",
            value: job.educationLevel || "Không yêu cầu",
            icon: "🎓",
        },
        {
            label: "Trạng thái",
            value: job.status || "Open",
            icon: "📅",
        },
        {
            label: "Ngày đăng",
            value: job.createdAt ? new Date(job.createdAt).toLocaleDateString() : "Không có thông tin",
            icon: "📆",
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
                            Hạn nộp hồ sơ: {job.applicationDeadline 
                                ? new Date(job.applicationDeadline).toLocaleDateString() 
                                : '30/06/2025'}
                        </div>
                        <button
                            onClick={handleApplyClick}
                            className="bg-green-800 text-white px-12 py-3 rounded-3xl font-bold text-xl hover:bg-green-900 transition-colors"
                        >
                            Ứng tuyển ngay
                        </button>
                        <button
                            className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                            <div className="w-8 h-8 bg-gray-400 rounded"></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Job Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {jobDetails.map((detail) => (
                    <div key={`job-detail-${detail.label}`} className="flex items-center gap-4">
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

            {/* Job Description */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Mô tả công việc</h2>
                <div className="prose max-w-none">
                    <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
                </div>
            </div>

            {/* Job Requirements */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Yêu cầu công việc</h2>
                <div className="prose max-w-none">
                    <p className="text-gray-700 whitespace-pre-line">{job.requirements}</p>
                </div>
            </div>

            {/* Skills */}
            {job.skills && job.skills.length > 0 && (
                <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Kỹ năng</h2>
                    <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                            <span 
                                key={`skill-${skill}-${index}`} 
                                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Company Information */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Thông tin công ty</h2>
                <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-10 h-10 bg-gray-300 rounded"></div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">{job.company}</h3>
                        {job.recruiter && job.recruiter.companyDescription && (
                            <p className="text-gray-600 mb-4 whitespace-pre-line">{job.recruiter.companyDescription}</p>
                        )}
                        {job.recruiter && job.recruiter.companyWebsite && (
                            <a 
                                href={job.recruiter.companyWebsite} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                {job.recruiter.companyWebsite}
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Application Modal */}
            <JobApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} job={job} onSubmit={handleSubmitApplication} />
        </div>
    );
};

export default JobDetailsCard;
