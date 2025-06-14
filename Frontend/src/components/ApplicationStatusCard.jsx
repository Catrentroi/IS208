import React, { useEffect, useState } from "react";
import { applicationService } from "../api";

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

    // Format date from API (assumes ISO format)
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

    return (
        <div className="bg-white border border-gray-300 rounded-3xl p-6 mb-4">
            <div className="grid grid-cols-3 gap-8">
                {/* Position & Company Info */}
                <div className="space-y-4">
                    <div>
                        <label className="text-green-800 text-lg font-bold block mb-1">Vị trí:</label>
                        <span className="text-black text-lg font-semibold">{application.job?.title || "Không có thông tin"}</span>
                    </div>

                    <div>
                        <label className="text-green-800 text-lg font-bold block mb-1">Doanh nghiệp:</label>
                        <span className="text-black text-lg font-semibold">{application.job?.company?.name || "Không có thông tin"}</span>
                    </div>
                </div>

                {/* Status Info */}
                <div className="space-y-4">
                    <div>
                        <label className="text-green-800 text-lg font-bold block mb-1">Trạng thái hồ sơ:</label>
                        {getStatusBadge(application.status)}
                    </div>

                    <div>
                        <label className="text-green-800 text-lg font-bold block mb-1">Ngày ứng tuyển:</label>
                        <span className="text-black text-lg font-semibold">{formatDate(application.createdAt)}</span>
                    </div>
                </div>

                {/* Notes */}
                <div className="space-y-4">
                    <div>
                        <label className="text-green-800 text-lg font-bold block mb-1">Ghi chú:</label>
                        <span className="text-black text-lg font-semibold">{application.notes || "Không có"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ApplicationStatusList = ({ applications = [] }) => {    const [userApplications, setUserApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Use the provided applications prop if available, otherwise fetch from API
        if (applications.length > 0) {
            setUserApplications(applications);
            setLoading(false);
        } else {
            fetchApplications();
        }
    }, [applications]);

    const fetchApplications = async () => {
        try {
            setLoading(true);
            const response = await applicationService.getMyApplications();
            setUserApplications(response.applications || []);
            setError(null);
        } catch (err) {
            console.error("Error fetching applications:", err);
            setError("Failed to load applications. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    
    if (loading) {
        return (
            <div className="bg-white rounded-lg p-6 mb-4">
                <div className="animate-pulse space-y-4">
                    <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                    <div className="space-y-2">
                        <div className="h-6 bg-gray-200 rounded"></div>
                        <div className="h-6 bg-gray-200 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="bg-white rounded-lg p-6 mb-4 text-center">
                <div className="text-red-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p className="text-lg font-medium">{error}</p>
                <button 
                    onClick={fetchApplications}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Thử lại
                </button>
            </div>
        );
    }
    
    if (userApplications.length === 0) {
        return (
            <div className="bg-white rounded-lg p-6 mb-4 text-center">
                <div className="text-gray-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                </div>
                <p className="text-lg font-medium">Bạn chưa có đơn ứng tuyển nào</p>
            </div>
        );
    }


    const displayApplications = applications.length > 0 ? applications : mockApplications;    return (
        <div className="bg-white border border-gray-300 rounded-3xl p-8 w-full">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-green-800 text-3xl font-black">TRẠNG THÁI HỒ SƠ ỨNG TUYỂN</h2>
                <p className="text-gray-600 mt-2">Theo dõi tình trạng các hồ sơ ứng tuyển của bạn</p>
            </div>

            {/* Applications List */}
            <div className="space-y-4">
                {userApplications.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📋</div>
                        <h3 className="text-xl font-bold text-gray-600 mb-2">Chưa có hồ sơ ứng tuyển nào</h3>
                        <p className="text-gray-500">Bắt đầu ứng tuyển để theo dõi trạng thái hồ sơ của bạn</p>
                    </div>
                ) : (
                    userApplications.map((application) => (
                        <ApplicationStatusCard key={application._id} application={application} />
                    ))
                )}
            </div>

            {/* Stats Summary */}
            {userApplications.length > 0 && (
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">📊 Thống kê ứng tuyển</h4>
                    <div className="grid grid-cols-4 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{userApplications.length}</div>
                            <div className="text-sm text-gray-600">Tổng hồ sơ</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl font-bold text-yellow-600">
                                {userApplications.filter((app) => app.status === "Đang tiếp nhận").length}
                            </div>
                            <div className="text-sm text-gray-600">Đang xét duyệt</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">
                                {userApplications.filter((app) => app.status === "Đã hoàn thành").length}
                            </div>
                            <div className="text-sm text-gray-600">Hoàn thành</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">
                                {userApplications.filter((app) => app.status === "Đang ứng tuyển").length}
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
