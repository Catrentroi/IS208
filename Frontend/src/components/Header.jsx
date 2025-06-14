import React, { useState } from "react";
import { Link } from "react-router-dom";
import talentHubLogo from "../assets/TalentHub logo 1.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 h-20 flex items-center px-6 sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto flex items-center justify-between">
                {/* Modern Logo */}
                <Link to="/" className="flex items-center group">
                    <div className="relative">
                        <img
                            src={talentHubLogo}
                            alt="TalentHub Logo"
                            className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <div className="ml-3">
                        <h1 className="text-xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text">
                            TalentHub
                        </h1>
                        <p className="text-xs text-gray-500 font-medium">Kết nối tài năng</p>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    <Link
                        to="/"
                        className="relative text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-300 group"
                    >
                        Trang chủ
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:w-full transition-all duration-300"></div>
                    </Link>
                    <Link
                        to="/search"
                        className="relative text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-300 group"
                    >
                        Tin tuyển dụng
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:w-full transition-all duration-300"></div>
                    </Link>
                    <a
                        href="#"
                        className="relative text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-300 group"
                    >
                        Doanh nghiệp
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:w-full transition-all duration-300"></div>
                    </a>
                    <a
                        href="#"
                        className="relative text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-300 group"
                    >
                        Công cụ
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:w-full transition-all duration-300"></div>
                    </a>
                </nav>

                {/* Auth Buttons */}
                <div className="flex items-center space-x-3">
                    {/* Profile Button */}
                    <Link
                        to="/profile"
                        className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
                        Hồ sơ
                    </Link>

                    {/* Login Button */}
                    <button className="hidden sm:block px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                        Đăng nhập
                    </button>

                    {/* Register Button */}
                    <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 shadow-md">
                        Đăng ký
                    </button>

                    {/* Employer Button */}
                    <button className="hidden md:block px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 shadow-md">
                        Đăng tuyển
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                            <path
                                d="M3 12H21M3 6H21M3 18H21"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-lg">
                    <nav className="container mx-auto px-6 py-4 space-y-3">
                        <Link
                            to="/"
                            className="block text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-300 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Trang chủ
                        </Link>
                        <Link
                            to="/search"
                            className="block text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-300 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Tin tuyển dụng
                        </Link>
                        <a
                            href="#"
                            className="block text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-300 py-2"
                        >
                            Doanh nghiệp
                        </a>
                        <a
                            href="#"
                            className="block text-gray-700 font-semibold hover:text-emerald-600 transition-colors duration-300 py-2"
                        >
                            Công cụ
                        </a>
                        <div className="pt-3 border-t border-gray-200 space-y-2">
                            <Link
                                to="/profile"
                                className="block w-full text-left px-4 py-2 bg-emerald-50 text-emerald-700 font-semibold rounded-2xl"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Hồ sơ
                            </Link>
                            <button className="block w-full text-left px-4 py-2 bg-blue-50 text-blue-700 font-semibold rounded-2xl">
                                Đăng nhập
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
