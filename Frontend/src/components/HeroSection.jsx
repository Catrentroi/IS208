import React from "react";

const HeroSection = () => {
    return (
        <div className="relative bg-white">
            {/* Hero Banner */}
            <div className="relative h-[600px] bg-gradient-to-r from-green-800 to-green-600 rounded-3xl mx-6 my-8 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
                    <div className="absolute top-20 right-20 w-24 h-24 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-20 left-32 w-16 h-16 border-4 border-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center px-12">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            CẦU NỐI TUYỂN DỤNG, BỆ PHÓNG TƯƠNG LAI
                        </h1>
                        <p className="text-xl mb-8 opacity-90">
                            Nền tảng tuyển dụng toàn diện giúp doanh nghiệp tìm kiếm ứng viên tài năng và ứng viên tìm
                            kiếm cơ hội nghề nghiệp tốt nhất. Cùng nhau xây dựng tương lai phát triển nghề nghiệp.
                        </p>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Secondary Banner */}
            <div className="mx-6 mb-8">
                <div className="h-96 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl relative overflow-hidden">
                    {/* Shopee Vietnam Is Hiring Banner */}
                    <div className="absolute inset-0 flex items-center justify-between px-12">
                        <div className="text-white">
                            <div className="mb-4">
                                <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-white font-bold text-2xl">S</span>
                                </div>
                                <h2 className="text-4xl font-bold mb-2">SHOPEE VIETNAM</h2>
                                <h3 className="text-3xl font-bold">IS HIRING</h3>
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full inline-block">
                                    BUSINESS DEVELOPMENT TEAM
                                </div>
                                <div className="bg-blue-500 text-white px-3 py-1 rounded-full inline-block ml-2">
                                    MARKETING TEAM
                                </div>
                            </div>
                        </div>

                        {/* Happy employees image area */}
                        <div className="flex-1 h-full bg-gradient-to-l from-transparent to-orange-500 opacity-80"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
