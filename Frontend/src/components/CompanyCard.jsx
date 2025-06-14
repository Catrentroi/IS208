import React from "react";

const CompanyCard = ({ company }) => {
    return (
        <div className="bg-white border border-yellow-400 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-300 rounded"></div>
                </div>

                {/* Company Details */}
                <div className="flex-1">
                    <h3 className="font-bold text-lg text-black mb-2">
                        {company?.name || "CÔNG TY CỔ PHẦN VINCOM RETAIL"}
                    </h3>
                    <p className="text-gray-600 font-bold text-sm mb-2">{company?.industry || "Bất động sản"}</p>
                    <p className="text-green-800 font-bold text-sm mb-4">{company?.jobCount || "10"} việc làm</p>

                    {/* Portfolio Icon */}
                    <div className="w-6 h-6 text-gray-400">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                </div>

                {/* Follow Button */}
                <button className="bg-green-800 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-green-900 transition-colors">
                    + Theo dõi
                </button>
            </div>
        </div>
    );
};

export default CompanyCard;
