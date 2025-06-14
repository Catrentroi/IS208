import React, { useState } from "react";
import HRSidebar from "../components/HRSidebar";
import HRHeader from "../components/HRHeader";
import TestManagementTable from "../components/TestManagementTable";
import CreateTestForm from "../components/CreateTestForm";

const HRTestManagement = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const handleCreateTest = () => {
        setIsCreateModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsCreateModalOpen(false);
    };

    const handleSubmitTest = (testData) => {
        console.log("New test created:", testData);
        // Here you would typically send the data to your backend
    };

    return (
        <div className="min-h-screen bg-[#F5F5F5] flex">
            {/* Sidebar */}
            <HRSidebar activeItem="Quản lý bài kiểm tra" />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <HRHeader title="Quản lý bài kiểm tra" />

                {/* Content */}
                <div className="flex-1 p-8">
                    <TestManagementTable onCreateTest={handleCreateTest} />
                </div>

                {/* Footer */}
                <footer className="bg-white py-4 px-8 border-t border-gray-200">
                    <div className="text-center text-sm text-gray-600">© 2024 TalentHub. All rights reserved.</div>
                </footer>
            </div>

            {/* Create Test Modal */}
            <CreateTestForm isOpen={isCreateModalOpen} onClose={handleCloseModal} onSubmit={handleSubmitTest} />
        </div>
    );
};

export default HRTestManagement;
