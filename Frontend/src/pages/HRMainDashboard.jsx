import React from "react";
import HRSidebar from "../components/HRSidebar";
import HRHeader from "../components/HRHeader";
import DashboardStats from "../components/DashboardStats";

const HRMainDashboard = () => {
    return (
        <div className="flex h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Sidebar */}
            <HRSidebar activeItem="Dashboard" />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <HRHeader title="DASHBOARD" />

                {/* Content Area */}
                <div className="flex-1 p-8 overflow-auto">
                    {/* Statistics Cards */}
                    <DashboardStats />

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                        {/* Recent Job Postings - Takes 2 columns */}
                        <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="text-white"
                                        >
                                            <path
                                                d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Tin tuyển dụng gần đây</h3>
                                        <p className="text-sm text-gray-500">Các tin tuyển dụng mới nhất</p>
                                    </div>
                                </div>
                                <button className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 text-sm font-medium">
                                    Xem tất cả
                                </button>
                            </div>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: "Senior Business Analyst",
                                        date: "25/5/2025",
                                        status: "Đã đăng",
                                        applicants: 12,
                                        views: 89,
                                    },
                                    {
                                        title: "Frontend Developer",
                                        date: "24/5/2025",
                                        status: "Đã đăng",
                                        applicants: 8,
                                        views: 67,
                                    },
                                    {
                                        title: "Product Manager",
                                        date: "23/5/2025",
                                        status: "Đang xử lý",
                                        applicants: 5,
                                        views: 34,
                                    },
                                    {
                                        title: "Senior UX Designer",
                                        date: "22/5/2025",
                                        status: "Đã đăng",
                                        applicants: 15,
                                        views: 102,
                                    },
                                ].map((job, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-gray-100 hover:border-blue-200"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    className="text-emerald-600"
                                                >
                                                    <path
                                                        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                                                    {job.title}
                                                </p>
                                                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                                    <span className="flex items-center gap-1">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                            <path
                                                                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                            />
                                                            <path
                                                                d="M16 2V6M8 2V6M3 10H21"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                            />
                                                        </svg>
                                                        {job.date}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                            <path
                                                                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                            />
                                                            <path
                                                                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                            />
                                                        </svg>
                                                        {job.applicants} ứng viên
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                            <path
                                                                d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                            />
                                                            <path
                                                                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                            />
                                                        </svg>
                                                        {job.views} lượt xem
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${
                                                    job.status === "Đã đăng"
                                                        ? "bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700"
                                                        : "bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700"
                                                }`}
                                            >
                                                <div
                                                    className={`w-2 h-2 rounded-full mr-2 ${
                                                        job.status === "Đã đăng"
                                                            ? "bg-emerald-500 animate-pulse"
                                                            : "bg-amber-500 animate-pulse"
                                                    }`}
                                                ></div>
                                                {job.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Upcoming Interviews */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                                        <path
                                            d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                        <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Phỏng vấn sắp tới</h3>
                                    <p className="text-sm text-gray-500">Lịch phỏng vấn hôm nay</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {[
                                    {
                                        candidate: "Nguyễn Văn A",
                                        position: "Business Analyst",
                                        time: "09:00",
                                        date: "Hôm nay",
                                        avatar: "NA",
                                    },
                                    {
                                        candidate: "Trần Thị B",
                                        position: "Frontend Developer",
                                        time: "14:00",
                                        date: "Hôm nay",
                                        avatar: "TB",
                                    },
                                    {
                                        candidate: "Lê Văn C",
                                        position: "Product Manager",
                                        time: "10:00",
                                        date: "Ngày mai",
                                        avatar: "LC",
                                    },
                                    {
                                        candidate: "Phạm Thị D",
                                        position: "UX Designer",
                                        time: "15:30",
                                        date: "Ngày mai",
                                        avatar: "PD",
                                    },
                                ].map((interview, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:from-orange-50 hover:to-amber-50 transition-all duration-300 border border-gray-100 hover:border-orange-200"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                                                {interview.avatar}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 group-hover:text-orange-700 transition-colors duration-200">
                                                    {interview.candidate}
                                                </p>
                                                <p className="text-sm text-gray-500">{interview.position}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center gap-2 text-sm font-semibold text-orange-600">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />
                                                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" />
                                                </svg>
                                                {interview.time}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">{interview.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Thao tác nhanh</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                {
                                    title: "Tạo tin tuyển dụng",
                                    icon: "📝",
                                    color: "from-blue-500 to-indigo-600",
                                    bgColor: "from-blue-50 to-indigo-50",
                                },
                                {
                                    title: "Xem ứng viên",
                                    icon: "👥",
                                    color: "from-emerald-500 to-teal-600",
                                    bgColor: "from-emerald-50 to-teal-50",
                                },
                                {
                                    title: "Lịch phỏng vấn",
                                    icon: "📅",
                                    color: "from-orange-500 to-amber-600",
                                    bgColor: "from-orange-50 to-amber-50",
                                },
                                {
                                    title: "Báo cáo",
                                    icon: "📊",
                                    color: "from-purple-500 to-pink-600",
                                    bgColor: "from-purple-50 to-pink-50",
                                },
                            ].map((action, index) => (
                                <button
                                    key={index}
                                    className={`p-6 bg-gradient-to-br ${action.bgColor} rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-gray-100`}
                                >
                                    <div
                                        className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-3 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {action.icon}
                                    </div>
                                    <p className="font-semibold text-gray-800 text-sm">{action.title}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-white/80 backdrop-blur-sm px-8 py-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-semibold text-gray-600">
                                Copyright © 2025 TalentHub - Nền tảng tuyển dụng hàng đầu
                            </span>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-3">
                            {[
                                { icon: "📘", name: "Facebook" },
                                { icon: "📷", name: "Instagram" },
                                { icon: "💼", name: "LinkedIn" },
                                { icon: "🐦", name: "Twitter" },
                            ].map((social, index) => (
                                <button
                                    key={index}
                                    className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center hover:from-emerald-100 hover:to-teal-100 transition-all duration-200 text-lg hover:scale-110"
                                    title={social.name}
                                >
                                    {social.icon}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRMainDashboard;
