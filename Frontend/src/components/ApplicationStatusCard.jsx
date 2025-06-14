import React from "react";

const ApplicationStatusCard = ({ application }) => {
    const getStatusBadge = (status) => {
        const badges = {
            "Đang tiếp nhận": {
                bg: "bg-yellow-200",
                text: "text-black",
                label: "Đang tiếp nhận",
            },
            "Đã hoàn thành": {
                bg: "bg-green-200",
                text: "text-black",
                label: "Đã hoàn thành",
            },
            "Đang ứng tuyển": {
                bg: "bg-blue-200",
                text: "text-black",
                label: "Đang ứng tuyển",
            },
            "Từ chối": {
                bg: "bg-red-200",
                text: "text-black",
                label: "Từ chối",
            },
        };

        const badge = badges[status] || badges["Đang ứng tuyển"];

        return (
            <div className={`${badge.bg} ${badge.text} px-4 py-2 rounded-full text-sm font-bold text-center`}>
                {badge.label}
            </div>
        );
    };

    const defaultApplication = {
        position: "Nhân viên Marketing",
        company: "Công ty TNHH Plasma",
        status: "Đang tiếp nhận",
        note: "Không có",
        appliedDate: "25/11/2024",
        ...application,
    };

    return (
        <div className="bg-white border border-gray-300 rounded-3xl p-6 mb-4">
            <div className="grid grid-cols-3 gap-8">
                {/* Position & Company Info */}
                <div className="space-y-4">
                    <div>
                        <label className="text-green-800 text-lg font-bold block mb-1">Vị trí:</label>
                        <span className="text-black text-lg font-semibold">{defaultApplication.position}</span>
                    </div>

                    <div>
                        <label className="text-green-800 text-lg font-bold block mb-1">Doanh nghiệp:</label>
                        <span className="text-black text-lg font-semibold">{defaultApplication.company}</span>
                    </div>
                </div>

                {/* Status Info */}
                <div className="space-y-4">
                    <div>
                        <label className="text-green-800 text-lg font-bold block mb-1">Trạng thái hồ sơ:</label>
                        {getStatusBadge(defaultApplication.status)}
                    </div>

                    <div>
                        <label className="text-green-800 text-lg font-bold block mb-1">Ngày ứng tuyển:</label>
                        <span className="text-black text-lg font-semibold">{defaultApplication.appliedDate}</span>
                    </div>
                </div>

                {/* Notes */}
                <div className="space-y-4">
                    <div>
                        <label className="text-green-800 text-lg font-bold block mb-1">Ghi chú:</label>
                        <span className="text-black text-lg font-semibold">{defaultApplication.note}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ApplicationStatusList = ({ applications = [] }) => {
    // Mock data if no applications provided
    const mockApplications = [
        {
            id: 1,
            position: "Nhân viên Marketing",
            company: "Công ty TNHH Plasma",
            status: "Đang tiếp nhận",
            note: "Hồ sơ đang được xem xét",
            appliedDate: "25/11/2024",
        },
        {
            id: 2,
            position: "Developer Frontend",
            company: "Công ty TNHH TechViet",
            status: "Đã hoàn thành",
            note: "Đã được tuyển dụng",
            appliedDate: "20/11/2024",
        },
        {
            id: 3,
            position: "UI/UX Designer",
            company: "Công ty TNHH Creative",
            status: "Đang ứng tuyển",
            note: "Chờ phỏng vấn vòng 2",
            appliedDate: "18/11/2024",
        },
    ];

    const displayApplications = applications.length > 0 ? applications : mockApplications;

    return (
        <div className="bg-white border border-gray-300 rounded-3xl p-8 w-full">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-green-800 text-3xl font-black">TRẠNG THÁI HỒ SƠ ỨNG TUYỂN</h2>
                <p className="text-gray-600 mt-2">Theo dõi tình trạng các hồ sơ ứng tuyển của bạn</p>
            </div>

            {/* Applications List */}
            <div className="space-y-4">
                {displayApplications.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📋</div>
                        <h3 className="text-xl font-bold text-gray-600 mb-2">Chưa có hồ sơ ứng tuyển nào</h3>
                        <p className="text-gray-500">Bắt đầu ứng tuyển để theo dõi trạng thái hồ sơ của bạn</p>
                    </div>
                ) : (
                    displayApplications.map((application) => (
                        <ApplicationStatusCard key={application.id} application={application} />
                    ))
                )}
            </div>

            {/* Stats Summary */}
            {displayApplications.length > 0 && (
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">📊 Thống kê ứng tuyển</h4>
                    <div className="grid grid-cols-4 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{displayApplications.length}</div>
                            <div className="text-sm text-gray-600">Tổng hồ sơ</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl font-bold text-yellow-600">
                                {displayApplications.filter((app) => app.status === "Đang tiếp nhận").length}
                            </div>
                            <div className="text-sm text-gray-600">Đang xét duyệt</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">
                                {displayApplications.filter((app) => app.status === "Đã hoàn thành").length}
                            </div>
                            <div className="text-sm text-gray-600">Hoàn thành</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">
                                {displayApplications.filter((app) => app.status === "Đang ứng tuyển").length}
                            </div>
                            <div className="text-sm text-gray-600">Đang ứng tuyển</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApplicationStatusList;
