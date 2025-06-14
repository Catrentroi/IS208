import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-yellow-50 h-44 flex items-center px-6">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="w-32 h-32 bg-green-800 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">TH</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-gray-800 font-bold text-lg hover:text-green-800">
                        Trang chủ
                    </Link>
                    <Link to="/search" className="text-gray-800 font-bold text-lg hover:text-green-800">
                        Tin tuyển dụng
                    </Link>
                    <a href="#" className="text-gray-800 font-bold text-lg hover:text-green-800">
                        Các doanh nghiệp
                    </a>
                    <a href="#" className="text-gray-800 font-bold text-lg hover:text-green-800">
                        Công cụ
                    </a>
                </nav>

                {/* Auth Buttons */}
                <div className="flex items-center space-x-4">
                    {/* For demo purposes, show both logged in and logged out states */}
                    <Link
                        to="/profile"
                        className="px-6 py-3 border border-green-800 text-gray-800 font-bold rounded-full hover:bg-green-50 flex items-center gap-2"
                    >
                        <span>👤</span>
                        Hồ sơ
                    </Link>
                    <button className="px-6 py-3 border border-green-800 text-gray-800 font-bold rounded-full hover:bg-green-50">
                        Đăng nhập
                    </button>
                    <button className="px-6 py-3 bg-green-800 text-white font-bold rounded-full hover:bg-green-900">
                        Đăng ký
                    </button>
                    <button className="px-8 py-3 bg-gray-300 text-gray-800 font-bold rounded-full hover:bg-gray-400">
                        Đăng tuyển
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
