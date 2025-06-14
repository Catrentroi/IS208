import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import JobApplicationModal from "./JobApplicationModal";

const JobCard = ({ job }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const navigate = useNavigate();
    
    const formatSalary = (salary) => {
        if (!salary) return "Thương lượng";
        
        // If salary is just a string (legacy data)
        if (typeof salary === 'string') return salary;
        
        // Format based on available properties
        let formattedSalary = '';
        
        if (salary.min && salary.max) {
            formattedSalary = `${salary.min.toLocaleString()} - ${salary.max.toLocaleString()}`;
        } else if (salary.min) {
            formattedSalary = `Từ ${salary.min.toLocaleString()}`;
        } else if (salary.max) {
            formattedSalary = `Đến ${salary.max.toLocaleString()}`;
        } else {
            return "Thương lượng";
        }
        
        // Add currency if available
        if (salary.currency) {
            formattedSalary += ` ${salary.currency}`;
        }
        
        return formattedSalary;
    };

    const handleApplyClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Check if user is logged in by checking for token
        const token = localStorage.getItem('token');
        
        if (!token) {
            // If not logged in, redirect to login page
            alert("Vui lòng đăng nhập để ứng tuyển cho công việc này");
            // Add the current location to localStorage to redirect back after login
            localStorage.setItem('redirectAfterLogin', `/job/${job?._id || job?.id || 1}`);
            navigate('/login');
            return;
        }
        
        // If logged in, open application modal
        setIsModalOpen(true);
    };

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorited(!isFavorited);
        alert(isFavorited ? "Đã xóa khỏi yêu thích!" : "Đã thêm vào yêu thích!");
    };

    return (
        <>
            <Link to={`/job/${job?._id || job?.id || 1}`} className="block group">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-6 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer group-hover:scale-[1.02] group-hover:border-emerald-200 min-h-[320px] flex flex-col">
                    {/* Header with Logo and Favorite */}
                    <div className="flex items-start justify-between mb-4">
                        {/* Company Logo */}
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 border border-emerald-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                                    <path
                                        d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>

                        {/* Favorite Button */}
                        <button
                            onClick={handleFavoriteClick}
                            className={`w-10 h-10 flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110 flex-shrink-0 ${
                                isFavorited
                                    ? "bg-red-100 text-red-500 hover:bg-red-200"
                                    : "bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500"
                            }`}
                        >
                            <svg
                                className="w-5 h-5"
                                fill={isFavorited ? "currentColor" : "none"}
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

                    {/* Job Details */}
                    <div className="flex-1 flex flex-col">
                        <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300 line-clamp-2 leading-tight">
                            {job?.title || "Nhân Viên Marketing"}
                        </h3>
                        <p className="text-gray-600 font-semibold text-sm mb-4 flex items-center gap-2 line-clamp-1">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-gray-400 flex-shrink-0"
                            >
                                <path
                                    d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21L12 17L19 21Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                            <span className="truncate">{job?.company || "CÔNG TY TNHH PLASMA"}</span>
                        </p>                        {/* Tags */}
                        <div className="flex flex-col gap-2 mb-6">
                            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-2 rounded-2xl text-sm font-semibold shadow-md text-center">
                                💰 {formatSalary(job?.salary) || "10 - 15 triệu"}
                            </span>
                            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-2 rounded-2xl text-sm font-semibold shadow-md text-center">
                                📍 {job?.location || "Hồ Chí Minh"}
                            </span>
                        </div>

                        {/* Apply Button */}
                        <div className="mt-auto">
                            <button
                                onClick={handleApplyClick}
                                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-3 rounded-2xl font-semibold text-sm hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
            </Link>

            {/* Only render the application modal when it's being shown */}
            {isModalOpen && (
                <JobApplicationModal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                    job={job} 
                    onSubmit={() => {
                        alert('Application submitted successfully!');
                        setIsModalOpen(false);
                    }}
                />
            )}
        </>
    );
};

export default JobCard;
