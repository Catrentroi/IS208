import React, { useState } from "react";

const HRHeader = ({ title = "QUẢN LÝ TIN TUYỂN DỤNG" }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <div className="flex items-center justify-between gap-6 px-8 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            {/* Title */}
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text">
                    {title}
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-4 px-5 py-3 w-80 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md hover:shadow-lg hover:border-emerald-300 transition-all duration-300 group">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-gray-400 group-hover:text-emerald-500 transition-colors duration-300"
                >
                    <path
                        d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        d="M14 14L11.1 11.1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="flex-1 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400 font-medium"
                />
                <div className="hidden group-hover:block w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white">
                        <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
            </div>

            {/* Header Menu */}
            <div className="flex items-center gap-4">
                {/* Notification Button */}
                <div className="relative">
                    <button className="flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg hover:bg-white transition-all duration-300 group border border-gray-100">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 22 22"
                            fill="none"
                            className="text-gray-600 group-hover:text-emerald-600 transition-colors duration-300"
                        >
                            <path
                                d="M16.32 7.85714C16.32 6.09938 15.6214 4.41354 14.3783 3.17047C13.1353 1.92741 11.4494 1.22857 9.69167 1.22857C7.93393 1.22857 6.24809 1.92741 5.00502 3.17047C3.76196 4.41354 3.06312 6.09938 3.06312 7.85714C3.06312 14.5714 0.191895 16.4286 0.191895 16.4286H19.1915C19.1915 16.4286 16.32 14.5714 16.32 7.85714Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.0625 20.1429C10.8797 20.4533 10.6198 20.7107 10.3081 20.8896C9.99639 21.0685 9.64471 21.1628 9.28711 21.1628C8.92951 21.1628 8.57783 21.0685 8.26612 20.8896C7.95441 20.7107 7.69449 20.4533 7.51172 20.1429"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {/* Notification Badge */}
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                            <span className="text-xs font-bold text-white">3</span>
                        </div>
                    </button>
                </div>

                {/* User Profile */}
                <div className="relative flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 p-0.5">
                            <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100">
                                <img
                                    src="/api/placeholder/48/48"
                                    alt="User Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                    </div>

                    {/* User Info */}
                    <div className="flex flex-col gap-0.5">
                        <span className="text-lg font-bold text-gray-800 leading-tight">Công ty ABC</span>
                        <span className="text-sm text-gray-500 font-medium">HR phòng tài năng</span>
                    </div>

                    {/* Dropdown Button */}
                    <button
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        className={`flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                            showUserMenu
                                ? "bg-emerald-100 text-emerald-600"
                                : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                        }`}
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 16 16"
                            fill="none"
                            className={`transition-transform duration-300 ${showUserMenu ? "rotate-180" : ""}`}
                        >
                            <path
                                d="M3.5 6L8 10.5L12.5 6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {showUserMenu && (
                        <div className="absolute top-full right-0 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                            <div className="px-4 py-3 border-b border-gray-100">
                                <p className="text-sm font-semibold text-gray-800">Công ty ABC</p>
                                <p className="text-xs text-gray-500">HR phòng tài năng</p>
                            </div>
                            <button className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-700 transition-all duration-200 flex items-center gap-3">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M0 16V14.6667C0 13.2522 0.561903 11.8956 1.5621 10.8954C2.56229 9.89524 3.91885 9.33333 5.33333 9.33333H10.6667C12.0811 9.33333 13.4377 9.89524 14.4379 10.8954C15.4381 11.8956 16 13.2522 16 14.6667V16"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                                Thông tin tài khoản
                            </button>
                            <button className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-700 transition-all duration-200 flex items-center gap-3">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M8 5V8L10.5 10.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Cài đặt
                            </button>
                            <hr className="my-2 border-gray-100" />
                            <button className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-red-700 transition-all duration-200 flex items-center gap-3">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10.6667 11.3333L14 8L10.6667 4.66667"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M14 8H6"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Đăng xuất
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HRHeader;
