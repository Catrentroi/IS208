import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileInfoCard from "../components/ProfileInfoCard";
import EditProfileForm from "../components/EditProfileForm";
import ChangePasswordForm from "../components/ChangePasswordForm";
import ApplicationStatusList from "../components/ApplicationStatusCard";
import InterviewSchedule from "../components/InterviewSchedule";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const [isEditing, setIsEditing] = useState(false);

    const userData = {
        avatar: "/api/placeholder/109/109",
        fullName: "Võ Thị Phương Uyên",
        username: "pu0406@",
        birthDate: "04/06/2004",
        gender: "Nữ",
        email: "phuonguyen6372@gmail.com",
        phone: "0382868383",
        address: "KTX Khu A",
    };

    const menuItems = [
        {
            id: "profile",
            icon: "👤",
            label: "Thông tin cá nhân",
            component: isEditing ? "edit-profile" : "profile-info",
        },
        {
            id: "interview-calendar",
            icon: "📅",
            label: "Lịch phỏng vấn",
            component: "interview-calendar",
        },
        {
            id: "change-password",
            icon: "🔒",
            label: "Đổi mật khẩu",
            component: "change-password",
        },
        {
            id: "test-schedule",
            icon: "📝",
            label: "Lịch làm bài test",
            component: "test-schedule",
        },
        {
            id: "application-status",
            icon: "📊",
            label: "Trạng thái hồ sơ",
            component: "application-status",
        },
    ];

    const handleSaveProfile = async (formData) => {
        console.log("Saving profile:", formData);
        // Here you would typically make an API call to save the data
        setIsEditing(false);
        // Show success message
        alert("Thông tin đã được cập nhật thành công!");
    };

    const handleChangePassword = async (passwords) => {
        console.log("Changing password:", passwords);
        // Here you would typically make an API call to change password
        alert("Mật khẩu đã được thay đổi thành công!");
    };

    const renderContent = () => {
        const activeItem = menuItems.find((item) => item.id === activeTab);

        switch (activeItem?.component) {
            case "profile-info":
                return <ProfileInfoCard user={userData} onEdit={() => setIsEditing(true)} />;

            case "edit-profile":
                return (
                    <EditProfileForm user={userData} onSave={handleSaveProfile} onCancel={() => setIsEditing(false)} />
                );

            case "change-password":
                return <ChangePasswordForm onSave={handleChangePassword} onCancel={() => setActiveTab("profile")} />;

            case "interview-calendar":
                return <InterviewSchedule />;

            case "application-status":
                return <ApplicationStatusList />;

            case "test-schedule":
                return (
                    <div className="bg-white border border-gray-300 rounded-3xl p-8 w-full">
                        <h2 className="text-green-800 text-3xl font-black mb-6">LỊCH LÀM BÀI TEST</h2>
                        <div className="text-center py-12">
                            <div className="text-gray-400 text-6xl mb-4">📝</div>
                            <h3 className="text-xl font-bold text-gray-600 mb-2">Chưa có lịch test nào</h3>
                            <p className="text-gray-500">Lịch làm bài test sẽ xuất hiện ở đây khi bạn được mời</p>
                        </div>
                    </div>
                );

            default:
                return <ProfileInfoCard user={userData} onEdit={() => setIsEditing(true)} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex gap-8">
                    {/* Sidebar */}
                    <div className="w-80 flex-shrink-0">
                        <div className="bg-white border border-gray-300 rounded-3xl p-6 sticky top-8">
                            {/* User Avatar & Name */}
                            <div className="text-center mb-8">
                                <div className="w-28 h-28 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
                                    <img src={userData.avatar} alt="Avatar" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold text-green-800">{userData.fullName}</h3>
                                <p className="text-gray-600 text-sm">{userData.username}</p>
                            </div>

                            {/* Navigation Menu */}
                            <nav className="space-y-2">
                                {menuItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setActiveTab(item.id);
                                            setIsEditing(false);
                                        }}
                                        className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-left text-lg font-semibold transition-colors ${
                                            activeTab === item.id
                                                ? "bg-green-800 text-white"
                                                : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                    >
                                        <span className="text-2xl">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </button>
                                ))}
                            </nav>

                            {/* Logout Button */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-left text-lg font-semibold text-red-600 hover:bg-red-50 transition-colors">
                                    <span className="text-2xl">🚪</span>
                                    <span>Đăng xuất</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1">{renderContent()}</div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProfilePage;
