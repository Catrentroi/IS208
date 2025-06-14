import React from "react";
import HRSidebar from "../components/HRSidebar";
import HRHeader from "../components/HRHeader";
import HRAccountInfo from "../components/HRAccountInfo";

const HRAccountPage = () => {
    return (
        <div className="min-h-screen bg-[#F5F5F5] flex">
            {/* Sidebar */}
            <HRSidebar activeItem="Thông tin tài khoản" />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <HRHeader title="Thông tin tài khoản" />

                {/* Content */}
                <div className="flex-1 p-8">
                    <HRAccountInfo />
                </div>

                {/* Footer */}
                <footer className="bg-white py-4 px-8 border-t border-gray-200">
                    <div className="text-center text-sm text-gray-600">© 2024 TalentHub. All rights reserved.</div>
                </footer>
            </div>
        </div>
    );
};

export default HRAccountPage;
