import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            console.log("Reset password for:", email);
            setIsEmailSent(true);
            setIsLoading(false);
        }, 2000);
    };

    const handleResendEmail = () => {
        setIsLoading(true);
        setTimeout(() => {
            alert("Email đã được gửi lại!");
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <Header />

            {/* Hero Background */}
            <div className="relative min-h-screen flex items-center justify-center py-20">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-indigo-600/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                <div className="relative z-10 w-full max-w-md mx-auto px-6">
                    {/* Forgot Password Card */}
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                        {!isEmailSent ? (
                            <>
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M9.663 17H4.5C3.11929 17 2 15.8807 2 14.5V9.5C2 8.11929 3.11929 7 4.5 7H19.5C20.8807 7 22 8.11929 22 9.5V14.5C22 15.8807 20.8807 17 19.5 17H14.337"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                                <path
                                                    d="M22 7L13.03 13.7C12.7213 13.9466 12.3687 14.0754 12.01 14.0754C11.6513 14.0754 11.2987 13.9466 10.99 13.7L2 7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                                <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="2" />
                                                <path d="M12 1V5" stroke="currentColor" strokeWidth="2" />
                                                <path d="M12 19V23" stroke="currentColor" strokeWidth="2" />
                                                <path d="M4.22 4.22L7.07 7.07" stroke="currentColor" strokeWidth="2" />
                                                <path
                                                    d="M16.93 16.93L19.78 19.78"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                                <path d="M1 12H5" stroke="currentColor" strokeWidth="2" />
                                                <path d="M19 12H23" stroke="currentColor" strokeWidth="2" />
                                                <path
                                                    d="M4.22 19.78L7.07 16.93"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                                <path
                                                    d="M16.93 7.07L19.78 4.22"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text mb-2">
                                        Quên Mật Khẩu
                                    </h1>
                                    <p className="text-gray-600">Nhập email để nhận liên kết đặt lại mật khẩu</p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Email Field */}
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    className="text-gray-400"
                                                >
                                                    <path
                                                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />
                                                    <polyline
                                                        points="22,6 12,13 2,6"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />
                                                </svg>
                                            </div>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Nhập email của bạn"
                                                required
                                                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Đang gửi...
                                            </>
                                        ) : (
                                            <>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />
                                                    <polyline
                                                        points="22,6 12,13 2,6"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />
                                                </svg>
                                                Gửi liên kết đặt lại
                                            </>
                                        )}
                                    </button>
                                </form>

                                {/* Back to Login */}
                                <div className="mt-8 text-center">
                                    <Link
                                        to="/login"
                                        className="text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M15 18L9 12L15 6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Quay lại đăng nhập
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Success State */}
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M20 6L9 17L4 12"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text mb-4">
                                        Email Đã Được Gửi!
                                    </h1>
                                    <p className="text-gray-600 mb-6">
                                        Chúng tôi đã gửi liên kết đặt lại mật khẩu đến email:
                                    </p>
                                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-6">
                                        <p className="font-semibold text-gray-800">{email}</p>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-8">
                                        Vui lòng kiểm tra hộp thư đến (và cả thư mục spam) để tìm email từ TalentHub.
                                        Liên kết sẽ hết hạn sau 24 giờ.
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="space-y-4">
                                        <button
                                            onClick={handleResendEmail}
                                            disabled={isLoading}
                                            className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    Đang gửi lại...
                                                </>
                                            ) : (
                                                <>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M1 4L11 9L21 4M1 4V18C1 18.5304 1.21071 19.0391 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H19C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18V4M1 4C1 3.46957 1.21071 2.96086 1.58579 2.58579C1.96086 2.21071 2.46957 2 3 2H19C19.5304 2 20.0391 2.21071 20.4142 2.58579C20.7893 2.96086 21 3.46957 21 4Z"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                        />
                                                    </svg>
                                                    Gửi lại email
                                                </>
                                            )}
                                        </button>

                                        <Link
                                            to="/login"
                                            className="w-full bg-white border-2 border-gray-200 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M10 17L15 12L10 7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M15 12H3"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            Quay lại đăng nhập
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ForgotPasswordPage;
