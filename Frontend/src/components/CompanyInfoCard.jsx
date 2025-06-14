import React from "react";

const CompanyInfoCard = ({ company }) => {
    // Use company data directly from props without defaults
    const handleViewDetails = () => {
        if (company?.website) {
            window.open(company.website, '_blank');
        } else {
            console.log("Viewing company details:", company?.name);
        }
    };

    return (
        <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-black font-bold text-xl mb-6">Thông tin chung</h2>            {/* Company Name */}
            <h3 className="text-black font-bold text-xl mb-6">{company?.name || "Không có thông tin"}</h3>

            {/* Company Details */}
            <div className="space-y-4 mb-6">
                {company?.scale && (
                    <div className="flex">
                        <span className="text-gray-600 font-bold text-lg w-24">Quy mô:</span>
                        <span className="text-black font-bold text-lg">{company.scale}</span>
                    </div>
                )}

                {company?.field && (
                    <div className="flex">
                        <span className="text-gray-600 font-bold text-lg w-24">Lĩnh vực:</span>
                        <span className="text-black font-bold text-lg">{company.field}</span>
                    </div>
                )}

                {company?.address && (
                    <div className="flex flex-col">
                        <span className="text-gray-600 font-bold text-lg mb-2">Địa chỉ:</span>
                        <span className="text-black font-bold text-lg leading-relaxed">{company.address}</span>
                    </div>
                )}
                
                {company?.description && (
                    <div className="flex flex-col mt-4">
                        <span className="text-gray-600 font-bold text-lg mb-2">Giới thiệu:</span>
                        <span className="text-gray-700 leading-relaxed">{company.description}</span>
                    </div>
                )}
            </div>            {/* View Details Button */}
            {company?.website && (
                <button
                    onClick={handleViewDetails}
                    className="text-black font-medium text-lg hover:text-green-800 transition-colors underline"
                >
                    Xem trang web công ty
                </button>
            )}
        </div>
    );
};

export default CompanyInfoCard;
