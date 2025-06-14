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
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>
            ),
            label: "Thông tin cá nhân",
            component: isEditing ? "edit-profile" : "profile-info",
            gradient: "from-blue-500 to-indigo-600",
        },
        {
            id: "interview-calendar",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
            label: "Lịch phỏng vấn",
            component: "interview-calendar",
            gradient: "from-orange-500 to-amber-600",
        },
        {
            id: "change-password",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M19 11H5M5 11L12 18M5 11L12 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="16" r="1" fill="currentColor" />
                </svg>
            ),
            label: "Đổi mật khẩu",
            component: "change-password",
            gradient: "from-purple-500 to-pink-600",
        },
        {
            id: "test-schedule",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
            label: "Lịch làm bài test",
            component: "test-schedule",
            gradient: "from-emerald-500 to-teal-600",
        },
        {
            id: "application-status",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>
            ),
            label: "Trạng thái hồ sơ",
            component: "application-status",
            gradient: "from-cyan-500 to-blue-600",
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
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 w-full shadow-xl">
                        <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text mb-6">
                            LỊCH LÀM BÀI TEST
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-8"></div>
                        <div className="text-center py-16">
                            <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="text-emerald-600"
                                >
                                    <path
                                        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Chưa có lịch test nào</h3>
                            <p className="text-gray-600 max-w-md mx-auto">
                                Lịch làm bài test sẽ xuất hiện ở đây khi bạn được mời tham gia đánh giá
                            </p>
                        </div>
                    </div>
                );

            default:
                return <ProfileInfoCard user={userData} onEdit={() => setIsEditing(true)} />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <Header />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex gap-8">
                    {/* Modern Sidebar */}
                    <div className="w-80 flex-shrink-0">
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 sticky top-8 shadow-xl">
                            {/* User Avatar & Name */}
                            <div className="text-center mb-8">
                                <div className="relative">
                                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-3xl p-1">
                                        <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl overflow-hidden">
                                            <img
                                                src={userData.avatar}
                                                alt="Avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{userData.fullName}</h3>
                                <p className="text-gray-600 font-medium">{userData.username}</p>
                                <div className="mt-4 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl">
                                    <p className="text-sm text-emerald-700 font-medium">Ứng viên tích cực</p>
                                </div>
                            </div>

                            {/* Navigation Menu */}
                            <nav className="space-y-3">
                                {menuItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setActiveTab(item.id);
                                            setIsEditing(false);
                                        }}
                                        className={`group w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-left font-semibold transition-all duration-300 ${
                                            activeTab === item.id
                                                ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg transform scale-[1.02]`
                                                : "text-gray-700 hover:bg-white hover:shadow-md hover:scale-[1.01]"
                                        }`}
                                    >
                                        <div
                                            className={`transition-transform duration-300 ${
                                                activeTab === item.id
                                                    ? "text-white"
                                                    : "text-gray-500 group-hover:text-emerald-600"
                                            }`}
                                        >
                                            {item.icon}
                                        </div>
                                        <span className="text-sm">{item.label}</span>
                                        {activeTab === item.id && (
                                            <div className="ml-auto w-2 h-2 bg-white rounded-full opacity-80"></div>
                                        )}
                                    </button>
                                ))}
                            </nav>

                            {/* Logout Button */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-left font-semibold text-red-600 hover:bg-red-50 hover:shadow-md transition-all duration-300 hover:scale-[1.01] group">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <path
                                            d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M16 17L21 12L16 7"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M21 12H9"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="text-sm">Đăng xuất</span>
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
