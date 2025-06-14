import React from "react";

const ProfileInfoCard = ({ user, onEdit }) => {
    const userData = {
        username: "pu0406@",
        fullName: "Võ Thị Phương Uyên",
        birthDate: "04/06/2004",
        gender: "Nữ",
        email: "phuonguyen6372@gmail.com",
        phone: "0382868383",
        address: "KTX Khu A",
        ...user,
    };

    const infoItems = [
        { label: "Tên đăng nhập:", value: userData.username },
        { label: "Họ và tên:", value: userData.fullName },
        { label: "Ngày sinh:", value: userData.birthDate },
        { label: "Giới tính:", value: userData.gender },
        { label: "Email:", value: userData.email },
        { label: "Số điện thoại:", value: userData.phone },
        { label: "Địa chỉ:", value: userData.address },
    ];

    return (
        <div className="bg-white border border-gray-300 rounded-3xl p-8 w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-green-800 text-3xl font-black">THÔNG TIN CÁ NHÂN</h2>
                <button
                    onClick={onEdit}
                    className="bg-transparent border border-gray-400 text-blue-600 px-8 py-3 rounded-3xl font-normal text-xl hover:bg-blue-50 transition-colors"
                >
                    Chỉnh sửa
                </button>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-6">
                {infoItems.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <label className="text-black text-2xl font-bold mb-2">{item.label}</label>
                        <span className="text-black text-2xl font-normal">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileInfoCard;
