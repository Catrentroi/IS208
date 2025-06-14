import React, { useState, useEffect } from "react";
import { interviewService } from "../api";

const InterviewSchedule = ({ interviews = [] }) => {
    const [filter, setFilter] = useState("all");
    const [userInterviews, setUserInterviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Use the provided interviews prop if available, otherwise fetch from API
        if (interviews.length > 0) {
            setUserInterviews(interviews);
            setLoading(false);
        } else {
            fetchInterviews();
        }
    }, [interviews]);

    const fetchInterviews = async () => {
        try {
            setLoading(true);
            const response = await interviewService.getMyInterviews();
            setUserInterviews(response.interviews || []);
            setError(null);
        } catch (err) {
            console.error("Error fetching interviews:", err);
            setError("Failed to load interview schedule. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    
    // Format date and time from API (assumes ISO format)
    const formatDateTime = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("vi-VN", {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "numeric",
            year: "numeric",
        }).replace(",", " -");
    };

    // Show loading state
    if (loading) {
        return (
            <div className="bg-white border border-gray-300 rounded-3xl p-8 w-full">
                <div className="mb-8">
                    <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mt-2 animate-pulse"></div>
                </div>
                <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-gray-100 p-6 rounded-lg animate-pulse">
                            <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    
    // Show error state
    if (error) {
        return (
            <div className="bg-white border border-gray-300 rounded-3xl p-8 w-full text-center">
                <div className="text-red-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Không thể tải lịch phỏng vấn</h2>
                <p className="text-lg text-gray-600 mb-4">{error}</p>
                <button 
                    onClick={fetchInterviews}
                    className="px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 font-semibold"
                >
                    Thử lại
                </button>
            </div>
        );
    }

    const displayInterviews = userInterviews;
    
    const filteredInterviews =
        filter === "all" ? displayInterviews : displayInterviews.filter((interview) => interview.status === filter);

    const filterOptions = [
        { value: "all", label: "Tất cả", count: displayInterviews.length },
        {
            value: "Đã lên lịch",
            label: "Đã lên lịch",
            count: displayInterviews.filter((i) => i.status === "Đã lên lịch").length,
        },
        {
            value: "Đang phỏng vấn",
            label: "Đang phỏng vấn",
            count: displayInterviews.filter((i) => i.status === "Đang phỏng vấn").length,
        },
        {
            value: "Đã hoàn thành",
            label: "Đã hoàn thành",
            count: displayInterviews.filter((i) => i.status === "Đã hoàn thành").length,
        },
    ];

    const handleJoinInterview = (interview) => {
        if (interview.format === "Trực tuyến") {
            window.open(interview.meetingLink || "#", "_blank");
        } else {
            alert(`Địa điểm phỏng vấn: ${interview.location || "Không có thông tin"}`);
        }
    };

    return (
        <div className="bg-white border border-gray-300 rounded-3xl p-8 w-full">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-green-800 text-3xl font-black">LỊCH PHỎNG VẤN</h2>
                <p className="text-gray-600 mt-2">Quản lý và theo dõi lịch phỏng vấn của bạn</p>
            </div>

            {/* Filter Tabs */}
            <div className="mb-6">
                <div className="flex space-x-2">
                    {filterOptions.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => setFilter(option.value)}
                            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                                filter === option.value
                                    ? "bg-green-800 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        >
                            {option.label} ({option.count})
                        </button>
                    ))}
                </div>
            </div>

            {/* Empty state */}
            {displayInterviews.length === 0 && (
                <div className="text-center py-10">
                    <div className="text-gray-400 text-5xl mb-4">🗓️</div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">Không có lịch phỏng vấn</h3>
                    <p className="text-gray-500">Bạn chưa có lịch phỏng vấn nào được đặt</p>
                </div>
            )}

            {/* No results for filter */}
            {displayInterviews.length > 0 && filteredInterviews.length === 0 && (
                <div className="text-center py-10">
                    <div className="text-gray-400 text-5xl mb-4">🔍</div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">Không tìm thấy kết quả</h3>
                    <p className="text-gray-500">Không có lịch phỏng vấn nào phù hợp với bộ lọc</p>
                </div>
            )}

            {/* Interview Cards */}
            {filteredInterviews.length > 0 && (
                <div className="space-y-6">
                    {filteredInterviews.map((interview) => (
                        <div key={interview._id} className="border border-gray-200 rounded-xl overflow-hidden">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">{interview.job?.title || "Không có tiêu đề"}</h3>
                                        <p className="text-gray-600">{interview.job?.company?.name || "Không có tên công ty"}</p>
                                    </div>
                                    <div
                                        className={`px-4 py-2 rounded-full text-sm font-bold ${
                                            interview.status === "Đã hoàn thành"
                                                ? "bg-green-200 text-green-800"
                                                : interview.status === "Đang phỏng vấn"
                                                ? "bg-blue-200 text-blue-800"
                                                : "bg-yellow-200 text-yellow-800"
                                        }`}
                                    >
                                        {interview.status || "Chưa có trạng thái"}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6 mb-4">
                                    <div>
                                        <div className="flex items-center mb-2">
                                            <svg
                                                className="w-5 h-5 mr-2 text-gray-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <span className="font-semibold text-gray-700">Thời gian:</span>
                                        </div>
                                        <p className="pl-7 text-gray-600">{formatDateTime(interview.scheduledTime)}</p>
                                    </div>

                                    <div>
                                        <div className="flex items-center mb-2">
                                            <svg
                                                className="w-5 h-5 mr-2 text-gray-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                />
                                            </svg>
                                            <span className="font-semibold text-gray-700">Người phỏng vấn:</span>
                                        </div>
                                        <p className="pl-7 text-gray-600">
                                            {interview.interviewers?.map(i => i.name).join(', ') || "Chưa có thông tin"}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6 mb-4">
                                    <div>
                                        <div className="flex items-center mb-2">
                                            <svg
                                                className="w-5 h-5 mr-2 text-gray-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                />
                                            </svg>
                                            <span className="font-semibold text-gray-700">
                                                {interview.format === "Trực tuyến" ? "Link phỏng vấn:" : "Địa điểm:"}
                                            </span>
                                        </div>
                                        <p className="pl-7 text-gray-600">
                                            {interview.format === "Trực tuyến"
                                                ? interview.meetingLink || "Chưa có thông tin"
                                                : interview.location || "Chưa có thông tin"}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex items-center mb-2">
                                            <svg
                                                className="w-5 h-5 mr-2 text-gray-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                />
                                            </svg>
                                            <span className="font-semibold text-gray-700">Ghi chú:</span>
                                        </div>
                                        <p className="pl-7 text-gray-600">{interview.notes || "Không có ghi chú"}</p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="mt-6 flex space-x-3">
                                    <button
                                        onClick={() => handleJoinInterview(interview)}
                                        className={`px-6 py-2 rounded font-semibold text-white ${
                                            interview.format === "Trực tuyến"
                                                ? "bg-blue-600 hover:bg-blue-700"
                                                : "bg-green-600 hover:bg-green-700"
                                        }`}
                                    >
                                        {interview.format === "Trực tuyến" ? "Tham gia phỏng vấn" : "Xem địa điểm"}
                                    </button>
                                    <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded">
                                        Xem chi tiết
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Calendar View Button */}
            <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-green-100 text-green-800 font-semibold rounded-lg hover:bg-green-200 inline-flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    Xem lịch theo tháng
                </button>
            </div>
        </div>
    );
};

export default InterviewSchedule;
