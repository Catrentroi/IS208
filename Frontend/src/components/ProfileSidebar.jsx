import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ProfileSidebar = ({ user = { name: "Võ Thị Phương Uyên", avatar: "/api/placeholder/109/109" } }) => {
    const location = useLocation();

    const menuItems = [
        {
            icon: "👤",
            label: "Thông tin cá nhân",
            path: "/profile",
        },
        {
            icon: "📅",
            label: "Lịch phỏng vấn",
            path: "/profile/interview-calendar",
        },
        {
            icon: "🔒",
            label: "Đổi mật khẩu",
            path: "/profile/change-password",
        },
        {
            icon: "📝",
            label: "Lịch làm bài test",
            path: "/profile/test-schedule",
        },
        {
            icon: "📋",
            label: "Trạng thái hồ sơ",
            path: "/profile/application-status",
        },
        {
            icon: "🔔",
            label: "Thông báo",
            path: "/profile/notifications",
        },
        {
            icon: "🚪",
            label: "Đăng xuất",
            path: "/logout",
            isLogout: true,
        },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div className="w-[375px] bg-white border border-gray-300 rounded-3xl p-6">
            {/* Profile Header */}
            <div className="text-center mb-8">
                <div className="w-[109px] h-[109px] mx-auto mb-4 rounded-full border border-black overflow-hidden">
                    <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                </div>

                <h2 className="text-green-800 text-2xl font-black mb-2">{user.name}</h2>

                <p className="text-black text-2xl font-black mb-6">Ứng viên</p>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-4">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                            isActive(item.path)
                                ? "bg-green-800 text-white font-bold"
                                : "text-black hover:bg-gray-100 font-semibold"
                        } ${item.isLogout ? "text-red-600 hover:bg-red-50" : ""}`}
                    >
                        <span className="text-xl w-8 h-8 flex items-center justify-center">{item.icon}</span>
                        <span className="text-lg">{item.label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default ProfileSidebar;
