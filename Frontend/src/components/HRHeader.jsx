import React, { useState } from "react";

const HRHeader = ({ title = "QUẢN LÝ TIN TUYỂN DỤNG" }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <div className="flex items-center justify-between gap-3 px-1 py-0 h-[50px] bg-white">
            {/* Title */}
            <div className="flex flex-col gap-1.5 py-0.5 w-[524px]">
                <h1 className="text-[28px] font-semibold leading-[1.08] text-[#27553F] font-kanit">{title}</h1>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-3 px-4 py-2.5 w-[311px] h-auto border-2 border-[#3E7B27] rounded-[14px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#3E7B27]">
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
                    className="flex-1 text-sm leading-[1.43] text-[#85A947] bg-transparent outline-none placeholder-[#85A947]"
                />
            </div>

            {/* Header Menu */}
            <div className="flex items-center gap-3">
                {/* Notification Button */}
                <div className="relative">
                    <button className="flex items-center justify-center w-10 h-10 bg-white rounded-xl p-2.5">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-[#3E7B27]">
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
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#EBD000] rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#EBD000] rounded-full"></div>
                        </div>
                    </button>
                </div>

                {/* User Profile */}
                <div className="relative flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#FFCB65]">
                        <img src="/api/placeholder/40/40" alt="User Avatar" className="w-full h-full object-cover" />
                    </div>

                    {/* User Info */}
                    <div className="flex flex-col gap-1">
                        <span className="text-lg font-semibold leading-[1.24] text-[#3E7B27] font-nunito">
                            Công ty ABC
                        </span>
                        <span className="text-[13px] font-normal leading-[1.24] text-[#85A947] font-nunito">
                            HR phòng tài năng
                        </span>
                    </div>

                    {/* Dropdown Button */}
                    <button
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        className="flex items-center justify-center p-1.5 bg-white rounded-xl"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#3E7B27]">
                            <path
                                d="M3.5 6L8 10.5L12.5 6"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {showUserMenu && (
                        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                                Thông tin tài khoản
                            </button>
                            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                                Cài đặt
                            </button>
                            <hr className="my-1" />
                            <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100">
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
