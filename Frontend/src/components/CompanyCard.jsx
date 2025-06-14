import React, { useState } from "react";

const CompanyCard = ({ company }) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing);
        alert(isFollowing ? "Đã hủy theo dõi công ty!" : "Đã theo dõi công ty!");
    };

    return (
        <div className="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02] hover:border-blue-200 min-h-[280px] flex flex-col">
            {/* Header with Logo and Follow Button */}
            <div className="flex items-start justify-between mb-4">
                {/* Company Logo */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path
                                d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21L12 17L19 21Z"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                </div>

                {/* Follow Button */}
                <button
                    onClick={handleFollowClick}
                    className={`px-3 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 flex-shrink-0 ${
                        isFollowing
                            ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25"
                            : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
                    }`}
                >
                    {isFollowing ? (
                        <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M20 6L9 17L4 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="hidden sm:inline">Đang theo dõi</span>
                        </>
                    ) : (
                        <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 5V19M5 12H19"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="hidden sm:inline">Theo dõi</span>
                        </>
                    )}
                </button>
            </div>

            {/* Company Details */}
            <div className="flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2 leading-tight">
                    {company?.name || "CÔNG TY CỔ PHẦN FPT"}
                </h3>
                <p className="text-gray-600 font-semibold text-sm mb-4 flex items-center gap-2 line-clamp-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400 flex-shrink-0">
                        <path
                            d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span className="truncate">{company?.industry || "Công nghệ thông tin"}</span>
                </p>

                {/* Job Count Badge */}
                <div className="mb-4">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-2 rounded-2xl text-sm font-semibold shadow-md flex items-center justify-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <span>{company?.jobCount || "15"} việc làm</span>
                    </div>
                </div>

                {/* Company Rating */}
                <div className="mt-auto">
                    <div className="flex items-center justify-center gap-2 bg-gray-50 rounded-2xl p-3">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="text-yellow-400"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm text-gray-600 font-medium">4.8</span>
                        <span className="text-xs text-gray-500">(120 đánh giá)</span>
                    </div>
                </div>
            </div>

            {/* Hover Effect Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
    );
};

export default CompanyCard;
