import React from "react";

const CompanyInfoCard = ({ company }) => {
    const companyInfo = {
        name: company?.name || "CÔNG TY TNHH PLASMA",
        scale: company?.scale || "25-99 nhân viên",
        field: company?.field || "Thú y - Thủy sản",
        address: company?.address || "207C Nguyễn Xí, Phường 26, Quận Bình Thạnh, TP. Hồ Chí Minh",
    };

    const handleViewDetails = () => {
        console.log("Viewing company details:", companyInfo.name);
        alert(`Xem chi tiết công ty: ${companyInfo.name}`);
    };

    return (
        <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-black font-bold text-xl mb-6">Thông tin chung</h2>

            {/* Company Name */}
            <h3 className="text-black font-bold text-xl mb-6">{companyInfo.name}</h3>

            {/* Company Details */}
            <div className="space-y-4 mb-6">
                <div className="flex">
                    <span className="text-gray-600 font-bold text-lg w-24">Quy mô:</span>
                    <span className="text-black font-bold text-lg">{companyInfo.scale}</span>
                </div>

                <div className="flex">
                    <span className="text-gray-600 font-bold text-lg w-24">Lĩnh vực:</span>
                    <span className="text-black font-bold text-lg">{companyInfo.field}</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-gray-600 font-bold text-lg mb-2">Địa chỉ:</span>
                    <span className="text-black font-bold text-lg leading-relaxed">{companyInfo.address}</span>
                </div>
            </div>

            {/* View Details Button */}
            <button
                onClick={handleViewDetails}
                className="text-black font-medium text-lg hover:text-green-800 transition-colors underline"
            >
                Xem chi tiết
            </button>
        </div>
    );
};

export default CompanyInfoCard;
