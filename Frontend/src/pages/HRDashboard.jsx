import React, { useState } from "react";
import HRSidebar from "../components/HRSidebar";
import HRHeader from "../components/HRHeader";
import JobManagementTable from "../components/JobManagementTable";
import CreateJobForm from "../components/CreateJobForm";

const HRDashboard = () => {
    const [showCreateJobForm, setShowCreateJobForm] = useState(false);

    const handleCreateJob = () => {
        setShowCreateJobForm(true);
    };

    const handleCloseForm = () => {
        setShowCreateJobForm(false);
    };

    const handleSaveJob = (jobData) => {
        // Here you would typically save to backend
        console.log("Saving job:", jobData);
        setShowCreateJobForm(false);
        // You could also show a success message or refresh the job list
    };

    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}
            <HRSidebar activeItem="Quản lý tin tuyển dụng" />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Content Area */}
                <div className="flex-1 p-7 gap-7 bg-white overflow-auto">
                    {/* Header */}
                    <HRHeader title="QUẢN LÝ TIN TUYỂN DỤNG" />

                    {/* Body Content */}
                    <div className="mt-7">
                        <JobManagementTable onCreateJob={handleCreateJob} />
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-white px-7 py-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <span className="text-[13px] font-bold leading-[1.3] text-[#3E7B27] font-nunito">
                                Copyright © 2025 TalentHub
                            </span>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2.5">
                                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Create Job Form Modal */}
            {showCreateJobForm && <CreateJobForm onClose={handleCloseForm} onSave={handleSaveJob} />}
        </div>
    );
};

export default HRDashboard;
