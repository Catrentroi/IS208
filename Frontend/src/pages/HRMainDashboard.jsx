import React from "react";
import HRSidebar from "../components/HRSidebar";
import HRHeader from "../components/HRHeader";
import DashboardStats from "../components/DashboardStats";

const HRMainDashboard = () => {
    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}
            <HRSidebar activeItem="Dashboard" />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Content Area */}
                <div className="flex-1 p-7 gap-7 bg-white overflow-auto">
                    {/* Header */}
                    <HRHeader title="DASHBOARD" />

                    {/* Body Content */}
                    <div className="mt-7">
                        {/* Statistics Cards */}
                        <DashboardStats />

                        {/* Recent Activities */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Recent Job Postings */}
                            <div className="bg-white rounded-[15px] p-6 shadow-sm border border-gray-100">
                                <h3 className="text-lg font-semibold text-[#27553F] mb-4">Tin tuyển dụng gần đây</h3>
                                <div className="space-y-3">
                                    {[
                                        { title: "Business Analyst", date: "25/5/2025", status: "Đã đăng" },
                                        { title: "Frontend Developer", date: "24/5/2025", status: "Đã đăng" },
                                        { title: "Product Manager", date: "23/5/2025", status: "Đang xử lý" },
                                        { title: "UX Designer", date: "22/5/2025", status: "Đã đăng" },
                                    ].map((job, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                        >
                                            <div>
                                                <p className="font-medium text-gray-900">{job.title}</p>
                                                <p className="text-sm text-gray-500">{job.date}</p>
                                            </div>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                    job.status === "Đã đăng"
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-yellow-100 text-yellow-800"
                                                }`}
                                            >
                                                {job.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Upcoming Interviews */}
                            <div className="bg-white rounded-[15px] p-6 shadow-sm border border-gray-100">
                                <h3 className="text-lg font-semibold text-[#27553F] mb-4">Phỏng vấn sắp tới</h3>
                                <div className="space-y-3">
                                    {[
                                        {
                                            candidate: "Nguyễn Văn A",
                                            position: "Business Analyst",
                                            time: "09:00",
                                            date: "Hôm nay",
                                        },
                                        {
                                            candidate: "Trần Thị B",
                                            position: "Frontend Developer",
                                            time: "14:00",
                                            date: "Hôm nay",
                                        },
                                        {
                                            candidate: "Lê Văn C",
                                            position: "Product Manager",
                                            time: "10:00",
                                            date: "Ngày mai",
                                        },
                                        {
                                            candidate: "Phạm Thị D",
                                            position: "UX Designer",
                                            time: "15:30",
                                            date: "Ngày mai",
                                        },
                                    ].map((interview, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                        >
                                            <div>
                                                <p className="font-medium text-gray-900">{interview.candidate}</p>
                                                <p className="text-sm text-gray-500">{interview.position}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-medium text-[#27553F]">{interview.time}</p>
                                                <p className="text-xs text-gray-500">{interview.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-white px-7 py-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <span className="text-[13px] font-bold leading-[1.3] text-[#3E7B27] font-nunito">
                                Copyright © 2025 TalentHub
                            </span>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2.5">
                                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRMainDashboard;
