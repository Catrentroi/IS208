import React from "react";
import heroImage from "../assets/Green Modern Business Report Presentation (5).png";
import shopeeImage from "../assets/image.png";
import rectanglePattern from "../assets/Rectangle 1163.png";

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Main Hero Banner */}
            <div className="relative h-[600px] bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl mx-6 my-8 overflow-hidden shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img src={heroImage} alt="TalentHub Hero" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 via-teal-600/70 to-cyan-600/80"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-pulse"></div>
                    <div className="absolute top-20 right-20 w-24 h-24 border-4 border-white rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-32 w-16 h-16 border-4 border-white rounded-full animate-pulse delay-2000"></div>
                    <div className="absolute bottom-32 right-40 w-20 h-20 border-4 border-white rounded-full animate-pulse delay-500"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center px-12">
                    <div className="max-w-3xl text-white">
                        <div className="mb-6">
                            <h1 className="text-6xl font-bold mb-4 leading-tight text-transparent bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
                                CẦU NỐI TUYỂN DỤNG
                            </h1>
                            <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text">
                                BỆ PHÓNG TƯƠNG LAI
                            </h2>
                        </div>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-8"></div>
                        <p className="text-xl mb-8 opacity-95 leading-relaxed max-w-2xl">
                            Nền tảng tuyển dụng toàn diện giúp doanh nghiệp tìm kiếm ứng viên tài năng và ứng viên tìm
                            kiếm cơ hội nghề nghiệp tốt nhất. Cùng nhau xây dựng tương lai phát triển nghề nghiệp.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-2xl hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105">
                                Tìm việc ngay
                            </button>
                            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                                Đăng tuyển
                            </button>
                        </div>
                    </div>
                </div>

                {/* Modern Navigation Arrows */}
                <button className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                </div>
            </div>

            {/* Secondary Banner - Shopee Hiring */}
            <div className="mx-6 mb-8">
                <div className="h-96 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl relative overflow-hidden shadow-2xl">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img src={shopeeImage} alt="Shopee Vietnam Team" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-red-500/80 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center justify-between px-12">
                        <div className="text-white max-w-lg">
                            <div className="mb-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                                    <span className="text-white font-bold text-3xl">S</span>
                                </div>
                                <h2 className="text-5xl font-bold mb-2 text-transparent bg-gradient-to-r from-white to-yellow-200 bg-clip-text">
                                    SHOPEE VIETNAM
                                </h2>
                                <h3 className="text-4xl font-bold text-yellow-300">IS HIRING</h3>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 px-6 py-3 rounded-2xl inline-block font-bold shadow-lg">
                                    🚀 BUSINESS DEVELOPMENT TEAM
                                </div>
                                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-2xl inline-block font-bold shadow-lg ml-4">
                                    📊 MARKETING TEAM
                                </div>
                            </div>

                            <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-2xl hover:shadow-xl hover:shadow-white/30 transition-all duration-300 hover:scale-105">
                                Xem chi tiết →
                            </button>
                        </div>

                        {/* Decorative Pattern */}
                        <div className="hidden lg:block">
                            <img src={rectanglePattern} alt="Pattern" className="w-32 h-32 opacity-20" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Support Hotline Section */}
            <div className="mx-6 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
                    <div className="text-center mb-6">
                        <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text mb-4">
                            Hotline tư vấn
                        </h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto"></div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex items-center gap-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-3xl shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text-xl font-bold">(+84) 382868383</span>
                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">Gọi ngay</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
                                <path
                                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            <span className="text-lg">Email hỗ trợ: </span>
                            <span className="font-bold text-emerald-600">talenthub.support@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
