import React from "react";

const Footer = () => {
    return (
        <footer className="bg-green-800 text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Logo and Contact */}
                    <div className="md:col-span-1">
                        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6">
                            <span className="text-green-800 font-bold text-xl">TH</span>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-lg">Hotline: (+84) 382868383</p>
                            <p className="font-bold text-lg">Email: talenthub.support@gmail.com</p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-4 mt-6">
                            <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                                <span className="text-white font-bold">f</span>
                            </div>
                            <div className="w-12 h-12 bg-blue-400 rounded flex items-center justify-center">
                                <span className="text-white font-bold">Z</span>
                            </div>
                            <div className="w-12 h-12 bg-pink-500 rounded flex items-center justify-center">
                                <span className="text-white font-bold">IG</span>
                            </div>
                            <div className="w-12 h-12 bg-blue-700 rounded flex items-center justify-center">
                                <span className="text-white font-bold">in</span>
                            </div>
                        </div>
                    </div>

                    {/* About TalentHub */}
                    <div>
                        <h3 className="font-bold text-xl mb-4">Về TalentHub</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="hover:underline">
                                    Về chúng tôi
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Tuyển dụng
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Hỏi đáp
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Liên hệ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* CV & Profile */}
                    <div>
                        <h3 className="font-bold text-xl mb-4">Hồ sơ và CV</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="hover:underline">
                                    Quản lý CV của bạn
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Hướng dẫn viết CV
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Mẫu CV
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Công việc phù hợp
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Career Building */}
                    <div>
                        <h3 className="font-bold text-xl mb-4">Xây dựng sự nghiệp</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="hover:underline">
                                    Việc làm lương cao
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Việc làm tốt nhất
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Việc làm toàn thời gian
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Việc làm bán thời gian
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Việc làm thực tập
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Policy */}
                    <div>
                        <h3 className="font-bold text-xl mb-4">Chính sách</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="hover:underline">
                                    Chính sách hoạt động
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Chính sách bảo mật
                                </a>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <h3 className="font-bold text-xl mb-4">Liên hệ</h3>
                            <p className="text-white">Cộng đồng TalentHub</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
