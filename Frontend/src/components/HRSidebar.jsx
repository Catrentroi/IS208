import React from "react";
import { useLocation, Link } from "react-router-dom";

const HRSidebar = ({ activeItem }) => {
    const location = useLocation();

    const menuItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M3.125 3.125H8.125V8.125H3.125V3.125Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.875 3.125H16.875V8.125H11.875V3.125Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.875 11.875H16.875V16.875H11.875V11.875Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3.125 11.875H8.125V16.875H3.125V11.875Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
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
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M15.625 6.25C15.625 6.25 15.625 6.25 15.625 6.25C15.625 6.25 15.625 6.25 15.625 6.25"
                        stroke="currentColor"
                        strokeWidth="1.2"
                    />
                    <path
                        d="M4.375 6.25H15.625V15.625C15.625 16.1223 15.4275 16.5992 15.0758 16.9508C14.7242 17.3025 14.2473 17.5 13.75 17.5H6.25C5.75272 17.5 5.27581 17.3025 4.92417 16.9508C4.57254 16.5992 4.375 16.1223 4.375 15.625V6.25Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                    />
                    <path d="M7.5 10H12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M7.5 12.5H12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
            ),
            path: "/hr/job-management",
        },
        {
            id: "candidate-management",
            label: "Quản lý hồ sơ ứng viên",
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                    />
                    <path
                        d="M0 16V14.6667C0 13.2522 0.561903 11.8956 1.5621 10.8954C2.56229 9.89524 3.91885 9.33333 5.33333 9.33333H10.6667C12.0811 9.33333 13.4377 9.89524 14.4379 10.8954C15.4381 11.8956 16 13.2522 16 14.6667V16"
                        stroke="currentColor"
                        strokeWidth="1.2"
                    />
                </svg>
            ),
            path: "/hr/candidate-management",
        },
        {
            id: "interview-management",
            label: "Quản lý lịch phỏng vấn",
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                    />
                    <path d="M10.6667 1.33333V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M5.33333 1.33333V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M2 6.66667H14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
            ),
            path: "/hr/interview-management",
        },
        {
            id: "test-management",
            label: "Quản lý bài kiểm tra",
            icon: (
                <svg width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path
                        d="M8.125 0H1.625C1.19402 0 0.781048 0.171205 0.475951 0.476302C0.170854 0.781399 -0.000350952 1.19437 -0.000350952 1.625V14.375C-0.000350952 14.8056 0.170854 15.2186 0.475951 15.5237C0.781048 15.8288 1.19402 16 1.625 16H11.375C11.8056 16 12.2186 15.8288 12.5237 15.5237C12.8288 15.2186 13 14.8056 13 14.375V5L8.125 0Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                    />
                    <path d="M8.125 0V5H13" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M10.375 9.25H2.625" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M10.375 12.25H2.625" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M4.875 6.25H2.625" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
            ),
            path: "/hr/test-management",
        },
        {
            id: "account-info",
            label: "Thông tin tài khoản",
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                    />
                    <path
                        d="M0 16V14.6667C0 13.2522 0.561903 11.8956 1.5621 10.8954C2.56229 9.89524 3.91885 9.33333 5.33333 9.33333H10.6667C12.0811 9.33333 13.4377 9.89524 14.4379 10.8954C15.4381 11.8956 16 13.2522 16 14.6667V16"
                        stroke="currentColor"
                        strokeWidth="1.2"
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
        <div className="w-[271px] h-screen bg-[#FBF7EB] flex flex-col p-7 gap-7">
            {/* Header */}
            <div className="h-[67px]">{/* Logo or company info can go here */}</div>

            {/* Menu Navigation */}
            <div className="flex-1 flex flex-col gap-4">
                {menuItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.path}
                        className={`flex items-center gap-2.5 px-2.5 py-2.5 rounded-[14px] transition-colors ${
                            isActive(item) ? "bg-white text-[#3E7B27]" : "text-[#3E7B27] hover:bg-white/50"
                        }`}
                    >
                        <div className="w-5 h-5 flex items-center justify-center">{item.icon}</div>
                        <span className={`text-base ${isActive(item) ? "font-bold" : "font-medium"}`}>
                            {item.label}
                        </span>
                    </Link>
                ))}
            </div>

            {/* Logout Button */}
            <button className="flex items-center gap-3 px-4 py-2.5 rounded-[14px] border border-[#DD0000] text-[#DD0000] hover:bg-red-50 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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
                <span className="text-base font-medium">Đăng xuất</span>
            </button>
        </div>
    );
};

export default HRSidebar;
