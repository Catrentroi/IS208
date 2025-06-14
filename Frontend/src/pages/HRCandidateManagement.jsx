import React from "react";
import HRSidebar from "../components/HRSidebar";
import HRHeader from "../components/HRHeader";
import CandidateManagementTable from "../components/CandidateManagementTable";

const HRCandidateManagement = () => {
    return (
        <div className="min-h-screen bg-[#F5F5F5] flex">
            {/* Sidebar */}
            <HRSidebar activeItem="Quản lý hồ sơ ứng viên" />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <HRHeader title="Quản lý hồ sơ ứng viên" />

                {/* Content */}
                <div className="flex-1 p-8">
                    <CandidateManagementTable />
                </div>

                {/* Footer */}
                <footer className="bg-white py-4 px-8 border-t border-gray-200">
                    <div className="text-center text-sm text-gray-600">© 2024 TalentHub. All rights reserved.</div>
                </footer>
            </div>
        </div>
    );
};

export default HRCandidateManagement;
