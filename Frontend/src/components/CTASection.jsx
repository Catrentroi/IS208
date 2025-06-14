import React from "react";

const CTASection = () => {
    return (
        <div className="bg-green-50 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Upload CV */}
                    <div className="text-left">
                        <h2 className="text-5xl font-bold text-green-800 mb-6">ĐĂNG TẢI CV CỦA BẠN</h2>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            Nắm bắt cơ hội việc làm mỗi ngày với TalentHub. Tải ngay CV lên để TalentHub gửi đến cho bạn
                            những công việc tuyệt vời.
                        </p>
                        <button className="bg-green-800 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-green-900 transition-colors">
                            Đăng tải CV
                        </button>
                    </div>

                    {/* Right Side - For Recruiters */}
                    <div className="text-left">
                        <h2 className="text-5xl font-bold text-green-800 mb-6">BẠN LÀ NHÀ TUYỂN DỤNG?</h2>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            Tìm ngay ứng viên phù hợp với TalentHub. Đăng ký hồ sơ doanh nghiệp và đăng tin tuyển dụng
                            ngay.
                        </p>
                        <button className="bg-white border-2 border-green-800 text-green-800 px-12 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition-colors">
                            Đăng tin tuyển dụng ngay
                        </button>
                    </div>
                </div>

                {/* Contact Support Section */}
                <div className="mt-16 bg-white rounded-2xl p-12 shadow-lg">
                    <div className="text-center mb-8">
                        <h3 className="text-4xl font-bold text-green-800 mb-4">Hotline tư vấn</h3>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        {/* Phone Number */}
                        <div className="bg-green-800 rounded-full p-6 flex items-center gap-4">
                            <div className="w-8 h-8 text-white">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                            </div>
                            <div className="bg-white rounded-full px-8 py-3">
                                <span className="text-2xl font-bold text-green-800">(+84) 382868383</span>
                            </div>
                            <span className="text-white font-bold text-xl">Gọi ngay</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 text-green-800">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-gray-700 text-xl">Email hỗ trợ: </span>
                                <span className="text-green-800 font-bold text-xl">talenthub.support@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
