import React from "react";
import logoImage from "../assets/Blue White Bold Playful Kids Clothing Logo (1000 x 500 px) (1172 x 263 px) (1).png";

const CTASection = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full -ml-32 -mb-32"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Logo Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <img src={logoImage} alt="TalentHub Logo" className="h-20 w-auto object-contain" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text mb-4">
                        Kết nối tài năng, kiến tạo tương lai
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left Side - Upload CV */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                        <div className="text-center lg:text-left">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                                    <path
                                        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
                                    <path d="M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">ĐĂNG TẢI CV CỦA BẠN</h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Nắm bắt cơ hội việc làm mỗi ngày với TalentHub. Tải ngay CV lên để TalentHub gửi đến cho
                                bạn những công việc tuyệt vời.
                            </p>
                            <button className="w-full lg:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7 10L12 15L17 10"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 15V3"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Đăng tải CV
                            </button>
                        </div>
                    </div>

                    {/* Right Side - For Recruiters */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                        <div className="text-center lg:text-left">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                                    <path
                                        d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21L12 19L16 21Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M12 7V13M9 10H15"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                                BẠN LÀ NHÀ TUYỂN DỤNG?
                            </h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Tìm ngay ứng viên phù hợp với TalentHub. Đăng ký hồ sơ doanh nghiệp và đăng tin tuyển
                                dụng ngay.
                            </p>
                            <button className="w-full lg:w-auto bg-white border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 5V19M5 12H19"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Đăng tin tuyển dụng ngay
                            </button>
                        </div>
                    </div>
                </div>

                {/* Enhanced Contact Support Section */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-100">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text mb-6">
                            Hỗ trợ 24/7
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-4"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn trong hành trình tìm kiếm việc làm
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                        {/* Phone Support */}
                        <div className="group bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-6 flex items-center gap-6 shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                                    <path
                                        d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3">
                                <span className="text-2xl font-bold text-emerald-600">(+84) 382868383</span>
                            </div>
                            <div className="text-white">
                                <span className="font-bold text-lg">Gọi ngay</span>
                                <p className="text-sm opacity-90">Miễn phí 24/7</p>
                            </div>
                        </div>

                        {/* Email Support */}
                        <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                                    <path
                                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-600 text-lg">Email hỗ trợ</p>
                                <p className="text-blue-600 font-bold text-xl">talenthub.support@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Support Options */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                                    <path
                                        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h4 className="font-bold text-gray-800 mb-2">Live Chat</h4>
                            <p className="text-gray-600 text-sm">Trò chuyện trực tiếp với chuyên gia</p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                                    <path
                                        d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                            <h4 className="font-bold text-gray-800 mb-2">Hướng dẫn</h4>
                            <p className="text-gray-600 text-sm">Tài liệu và video hướng dẫn</p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                                    <path
                                        d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                            <h4 className="font-bold text-gray-800 mb-2">Cộng đồng</h4>
                            <p className="text-gray-600 text-sm">Kết nối với cộng đồng TalentHub</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
