import React from "react";
import { useLocation, Link } from "react-router-dom";

const HRSidebar = ({ activeItem }) => {
    const location = useLocation();

    const menuItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: (
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M3.125 3.125H8.125V8.125H3.125V3.125Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.875 3.125H16.875V8.125H11.875V3.125Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.875 11.875H16.875V16.875H11.875V11.875Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3.125 11.875H8.125V16.875H3.125V11.875Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            path: "/hr/dashboard",
        },
        {
            id: "job-management",
            label: "Quản lý tin tuyển dụng",
            icon: (
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M4.375 6.25H15.625V15.625C15.625 16.1223 15.4275 16.5992 15.0758 16.9508C14.7242 17.3025 14.2473 17.5 13.75 17.5H6.25C5.75272 17.5 5.27581 17.3025 4.92417 16.9508C4.57254 16.5992 4.375 16.1223 4.375 15.625V6.25Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <path d="M7.5 10H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M7.5 12.5H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            path: "/hr/job-management",
        },
        {
            id: "candidate-management",
            label: "Quản lý hồ sơ ứng viên",
            icon: (
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
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
            ),
            path: "/hr/candidate-management",
        },
        {
            id: "interview-management",
            label: "Quản lý lịch phỏng vấn",
            icon: (
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <path d="M10.6667 1.33333V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M5.33333 1.33333V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M2 6.66667H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            path: "/hr/interview-management",
        },
        {
            id: "test-management",
            label: "Quản lý bài kiểm tra",
            icon: (
                <svg width="18" height="20" viewBox="0 0 13 16" fill="none">
                    <path
                        d="M8.125 0H1.625C1.19402 0 0.781048 0.171205 0.475951 0.476302C0.170854 0.781399 -0.000350952 1.19437 -0.000350952 1.625V14.375C-0.000350952 14.8056 0.170854 15.2186 0.475951 15.5237C0.781048 15.8288 1.19402 16 1.625 16H11.375C11.8056 16 12.2186 15.8288 12.5237 15.5237C12.8288 15.2186 13 14.8056 13 14.375V5L8.125 0Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <path d="M8.125 0V5H13" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10.375 9.25H2.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M10.375 12.25H2.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M4.875 6.25H2.625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            path: "/hr/test-management",
        },
        {
            id: "account-info",
            label: "Thông tin tài khoản",
            icon: (
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
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
            ),
            path: "/hr/account",
        },
    ];

    const isActive = (item) => {
        // If activeItem prop is provided, use it for comparison
        if (activeItem) {
            return item.label === activeItem;
        }
        // Otherwise, use path-based comparison
        return location.pathname === item.path || location.pathname.startsWith(item.path + "/");
    };

    return (
        <div className="w-[280px] h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex flex-col border-r border-gray-100 shadow-lg">
            {/* Header/Logo Section */}
            <div className="h-20 flex items-center justify-center border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path
                                d="M12 2L2 7L12 12L22 7L12 2Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2 17L12 22L22 17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2 12L12 17L22 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">TalentHub</h2>
                        <p className="text-xs text-gray-500">HR Dashboard</p>
                    </div>
                </div>
            </div>

            {/* Menu Navigation */}
            <div className="flex-1 px-4 py-6 space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.path}
                        className={`group relative flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                            isActive(item)
                                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25 transform scale-[1.02]"
                                : "text-gray-600 hover:bg-white hover:text-gray-800 hover:shadow-md hover:shadow-gray-200/50 hover:transform hover:scale-[1.01]"
                        }`}
                    >
                        <div
                            className={`flex items-center justify-center transition-transform duration-200 ${
                                isActive(item) ? "text-white" : "text-gray-500 group-hover:text-emerald-600"
                            }`}
                        >
                            {item.icon}
                        </div>
                        <span
                            className={`text-sm font-medium transition-colors duration-200 ${
                                isActive(item) ? "text-white font-semibold" : "text-gray-700 group-hover:text-gray-800"
                            }`}
                        >
                            {item.label}
                        </span>
                        {isActive(item) && (
                            <div className="absolute right-2 w-2 h-2 bg-white rounded-full opacity-80"></div>
                        )}
                    </Link>
                ))}
            </div>

            {/* Logout Button */}
            <div className="p-4 border-t border-gray-100">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 hover:shadow-md hover:shadow-red-200/50 transition-all duration-200 group">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="group-hover:transform group-hover:scale-110 transition-transform duration-200"
                    >
                        <path
                            d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.3333 14.1667L17.5 10L13.3333 5.83334"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17.5 10H7.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="text-sm font-medium">Đăng xuất</span>
                </button>
            </div>
        </div>
    );
};

export default HRSidebar;
