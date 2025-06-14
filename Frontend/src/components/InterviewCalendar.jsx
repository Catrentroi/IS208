import React, { useState } from "react";

const InterviewCalendar = ({ interviews = [] }) => {
    const [filter, setFilter] = useState("all");

    // Mock data if no interviews provided
    const mockInterviews = [
        {
            id: 1,
            position: "Nhân viên Marketing",
            company: "Công ty TNHH Plasma",
            datetime: "10 giờ 00 phút - 30/5/2025",
            format: "Trực tiếp",
            status: "Đã lên lịch",
            note: "Mang theo CV và bằng cấp",
            location: "Tầng 5, Tòa nhà ABC, Quận 1, TP.HCM",
            interviewer: "Ms. Lan - Phòng Nhân sự",
        },
        {
            id: 2,
            position: "Developer Frontend",
            company: "Công ty TNHH TechViet",
            datetime: "14 giờ 30 phút - 28/5/2025",
            format: "Trực tuyến",
            status: "Đang phỏng vấn",
            note: "Phỏng vấn kỹ thuật với team dev",
            meetingLink: "https://meet.google.com/abc-defg-hij",
            interviewer: "Mr. Dũng - Technical Lead",
        },
        {
            id: 3,
            position: "UI/UX Designer",
            company: "Công ty TNHH Creative",
            datetime: "09 giờ 00 phút - 25/5/2025",
            format: "Trực tuyến",
            status: "Đã hoàn thành",
            note: "Đã hoàn thành vòng 1",
            interviewer: "Ms. Hương - Design Team",
        },
    ];

    const displayInterviews = interviews.length > 0 ? interviews : mockInterviews;

    const getStatusBadge = (status) => {
        const badges = {
            "Đã lên lịch": {
                bg: "bg-yellow-200",
                text: "text-black",
                label: "Đã lên lịch",
            },
            "Đang phỏng vấn": {
                bg: "bg-blue-200",
                text: "text-black",
                label: "Đang phỏng vấn",
            },
            "Đã hoàn thành": {
                bg: "bg-green-200",
                text: "text-black",
                label: "Đã hoàn thành",
            },
        };

        const badge = badges[status] || badges["Đã lên lịch"];

        return (
            <div className={`${badge.bg} ${badge.text} px-4 py-2 rounded-full text-sm font-bold inline-block`}>
                {badge.label}
            </div>
        );
    };

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
            alert(`Địa điểm phỏng vấn: ${interview.location}`);
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

            {/* Interviews List */}
            <div className="space-y-4">
                {filteredInterviews.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📅</div>
                        <h3 className="text-xl font-bold text-gray-600 mb-2">
                            {filter === "all"
                                ? "Chưa có lịch phỏng vấn nào"
                                : `Không có lịch phỏng vấn "${filterOptions.find((f) => f.value === filter)?.label}"`}
                        </h3>
                        <p className="text-gray-500">
                            {filter === "all"
                                ? "Các lịch phỏng vấn sẽ xuất hiện ở đây khi bạn được mời phỏng vấn"
                                : "Thử chuyển sang tab khác để xem các lịch phỏng vấn"}
                        </p>
                    </div>
                ) : (
                    filteredInterviews.map((interview) => (
                        <div key={interview.id} className="bg-white border border-gray-300 rounded-3xl p-6 mb-4">
                            <div className="grid grid-cols-3 gap-8">
                                {/* Position & Company Info */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-green-800 text-lg font-bold block mb-1">Vị trí:</label>
                                        <span className="text-black text-lg font-semibold">{interview.position}</span>
                                    </div>

                                    <div>
                                        <label className="text-green-800 text-lg font-bold block mb-1">
                                            Doanh nghiệp:
                                        </label>
                                        <span className="text-black text-lg font-semibold">{interview.company}</span>
                                    </div>

                                    <div>
                                        <label className="text-green-800 text-lg font-bold block mb-1">
                                            Lịch phỏng vấn:
                                        </label>
                                        <span className="text-black text-lg font-semibold">{interview.datetime}</span>
                                    </div>
                                </div>

                                {/* Format & Status */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-green-800 text-lg font-bold block mb-1">
                                            Hình thức:
                                        </label>
                                        <span className="text-black text-lg font-semibold">{interview.format}</span>
                                    </div>

                                    <div>
                                        <label className="text-green-800 text-lg font-bold block mb-1">
                                            Trạng thái:
                                        </label>
                                        {getStatusBadge(interview.status)}
                                    </div>

                                    <div>
                                        <label className="text-green-800 text-lg font-bold block mb-1">
                                            Người phỏng vấn:
                                        </label>
                                        <span className="text-black text-lg font-semibold">
                                            {interview.interviewer}
                                        </span>
                                    </div>
                                </div>

                                {/* Notes & Actions */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-green-800 text-lg font-bold block mb-1">Ghi chú:</label>
                                        <span className="text-black text-lg font-semibold">{interview.note}</span>
                                    </div>

                                    {interview.status === "Đã lên lịch" && (
                                        <div className="mt-4">
                                            <button
                                                onClick={() => handleJoinInterview(interview)}
                                                className="bg-green-800 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors"
                                            >
                                                {interview.format === "Trực tuyến"
                                                    ? "Tham gia phỏng vấn"
                                                    : "Xem địa điểm"}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Additional Info */}
                            {interview.status === "Đã lên lịch" && (
                                <div className="mt-6">
                                    {interview.format === "Trực tuyến" ? (
                                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                            <h4 className="text-blue-800 font-bold mb-2">
                                                📹 Hướng dẫn phỏng vấn trực tuyến:
                                            </h4>
                                            <ul className="text-blue-700 text-sm space-y-1">
                                                <li>• Kiểm tra kết nối internet ổn định trước 15 phút</li>
                                                <li>• Chuẩn bị camera và micro hoạt động tốt</li>
                                                <li>• Chọn không gian yên tĩnh, ánh sáng đầy đủ</li>
                                                <li>• Tham gia phòng họp trước 5-10 phút</li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                            <h4 className="text-green-800 font-bold mb-2">
                                                🏢 Thông tin phỏng vấn trực tiếp:
                                            </h4>
                                            <div className="text-green-700 text-sm space-y-1">
                                                <p>
                                                    <strong>Địa chỉ:</strong> {interview.location}
                                                </p>
                                                <p>
                                                    <strong>Lưu ý:</strong> Vui lòng có mặt trước 15 phút và mang theo
                                                    CV bản cứng
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* Quick Stats */}
            {displayInterviews.length > 0 && (
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">📊 Thống kê phỏng vấn</h4>
                    <div className="grid grid-cols-4 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{displayInterviews.length}</div>
                            <div className="text-sm text-gray-600">Tổng lịch hẹn</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl font-bold text-yellow-600">
                                {displayInterviews.filter((i) => i.status === "Đã lên lịch").length}
                            </div>
                            <div className="text-sm text-gray-600">Sắp tới</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">
                                {displayInterviews.filter((i) => i.status === "Đã hoàn thành").length}
                            </div>
                            <div className="text-sm text-gray-600">Hoàn thành</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">
                                {displayInterviews.filter((i) => i.format === "Trực tuyến").length}
                            </div>
                            <div className="text-sm text-gray-600">Trực tuyến</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InterviewCalendar;
