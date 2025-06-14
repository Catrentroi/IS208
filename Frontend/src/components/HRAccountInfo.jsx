import React, { useState } from "react";

const HRAccountInfo = () => {
    const [accountData, setAccountData] = useState({
        companyName: "Công ty ABC",
        companyAddress: "123 Đường ABC, Quận 1, TP.HCM",
        companyPhone: "0123456789",
        companyEmail: "contact@companyabc.com",
        hrName: "Nguyễn Văn A",
        hrPosition: "HR phòng tài năng",
        hrPhone: "0987654321",
        hrEmail: "hr@companyabc.com",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({ ...accountData });

    const handleEdit = () => {
        setIsEditing(true);
        setEditData({ ...accountData });
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditData({ ...accountData });
    };

    const handleSave = () => {
        setAccountData({ ...editData });
        setIsEditing(false);
        console.log("Account info updated:", editData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white rounded-[15px] p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-[#27553F]">Thông tin tài khoản</h2>
                    {!isEditing ? (
                        <button
                            onClick={handleEdit}
                            className="bg-[#27553F] text-white text-sm font-bold px-6 py-2 rounded-[15px] hover:bg-[#1e3f2f] transition-colors"
                        >
                            CHỈNH SỬA
                        </button>
                    ) : (
                        <div className="flex gap-3">
                            <button
                                onClick={handleCancel}
                                className="bg-gray-500 text-white text-sm font-bold px-6 py-2 rounded-[15px] hover:bg-gray-600 transition-colors"
                            >
                                HỦY
                            </button>
                            <button
                                onClick={handleSave}
                                className="bg-[#27553F] text-white text-sm font-bold px-6 py-2 rounded-[15px] hover:bg-[#1e3f2f] transition-colors"
                            >
                                LƯU
                            </button>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Company Information */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-[#27553F] border-b border-gray-200 pb-2">
                            Thông tin công ty
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[#27553F] mb-2">Tên công ty</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={editData.companyName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-[15px] text-sm focus:outline-none focus:ring-2 focus:ring-[#85A947]"
                                    />
                                ) : (
                                    <p className="text-sm text-gray-700 bg-gray-50 px-4 py-3 rounded-[15px]">
                                        {accountData.companyName}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#27553F] mb-2">Địa chỉ công ty</label>
                                {isEditing ? (
                                    <textarea
                                        name="companyAddress"
                                        value={editData.companyAddress}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-[15px] text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#85A947]"
                                    />
                                ) : (
                                    <p className="text-sm text-gray-700 bg-gray-50 px-4 py-3 rounded-[15px]">
                                        {accountData.companyAddress}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#27553F] mb-2">
                                    Số điện thoại công ty
                                </label>
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        name="companyPhone"
                                        value={editData.companyPhone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-[15px] text-sm focus:outline-none focus:ring-2 focus:ring-[#85A947]"
                                    />
                                ) : (
                                    <p className="text-sm text-gray-700 bg-gray-50 px-4 py-3 rounded-[15px]">
                                        {accountData.companyPhone}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#27553F] mb-2">Email công ty</label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        name="companyEmail"
                                        value={editData.companyEmail}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-[15px] text-sm focus:outline-none focus:ring-2 focus:ring-[#85A947]"
                                    />
                                ) : (
                                    <p className="text-sm text-gray-700 bg-gray-50 px-4 py-3 rounded-[15px]">
                                        {accountData.companyEmail}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* HR Personal Information */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-[#27553F] border-b border-gray-200 pb-2">
                            Thông tin cá nhân
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[#27553F] mb-2">Họ và tên</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="hrName"
                                        value={editData.hrName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-[15px] text-sm focus:outline-none focus:ring-2 focus:ring-[#85A947]"
                                    />
                                ) : (
                                    <p className="text-sm text-gray-700 bg-gray-50 px-4 py-3 rounded-[15px]">
                                        {accountData.hrName}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#27553F] mb-2">Chức vụ</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="hrPosition"
                                        value={editData.hrPosition}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-[15px] text-sm focus:outline-none focus:ring-2 focus:ring-[#85A947]"
                                    />
                                ) : (
                                    <p className="text-sm text-gray-700 bg-gray-50 px-4 py-3 rounded-[15px]">
                                        {accountData.hrPosition}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#27553F] mb-2">Số điện thoại</label>
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        name="hrPhone"
                                        value={editData.hrPhone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-[15px] text-sm focus:outline-none focus:ring-2 focus:ring-[#85A947]"
                                    />
                                ) : (
                                    <p className="text-sm text-gray-700 bg-gray-50 px-4 py-3 rounded-[15px]">
                                        {accountData.hrPhone}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#27553F] mb-2">Email cá nhân</label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        name="hrEmail"
                                        value={editData.hrEmail}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-[15px] text-sm focus:outline-none focus:ring-2 focus:ring-[#85A947]"
                                    />
                                ) : (
                                    <p className="text-sm text-gray-700 bg-gray-50 px-4 py-3 rounded-[15px]">
                                        {accountData.hrEmail}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRAccountInfo;
