import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden mt-20">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full -ml-32 -mb-32"></div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                    {/* Logo and Contact */}
                    <div className="md:col-span-1">
                        <div className="flex items-center mb-6">
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 rounded-3xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                                    <span className="text-white font-bold text-xl">TH</span>
                                </div>
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
                            </div>
                            <div className="ml-4">
                                <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text">
                                    TalentHub
                                </h1>
                                <p className="text-sm text-gray-400 font-medium">Kết nối tài năng</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="text-emerald-400"
                                    >
                                        <path
                                            d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Hotline</p>
                                    <p className="text-gray-300">(+84) 382868383</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="text-emerald-400"
                                    >
                                        <path
                                            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Email</p>
                                    <p className="text-gray-300">talenthub.support@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Modern Social Media Icons */}
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="group w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-110"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="text-white"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="group w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-sky-400/30 transition-all duration-300 hover:scale-110"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="text-white"
                                >
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="group w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-110"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="text-white"
                                >
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="group w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-700/30 transition-all duration-300 hover:scale-110"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="text-white"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* About TalentHub */}
                    <div>
                        <h3 className="font-bold text-xl mb-6 text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text">
                            Về TalentHub
                        </h3>
                        <ul className="space-y-4">
                            {["Về chúng tôi", "Tuyển dụng", "Hỏi đáp", "Liên hệ"].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <svg
                                            width="4"
                                            height="4"
                                            viewBox="0 0 4 4"
                                            className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <circle cx="2" cy="2" r="2" fill="currentColor" />
                                        </svg>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CV & Profile */}
                    <div>
                        <h3 className="font-bold text-xl mb-6 text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text">
                            Hồ sơ và CV
                        </h3>
                        <ul className="space-y-4">
                            {["Quản lý CV của bạn", "Hướng dẫn viết CV", "Mẫu CV", "Công việc phù hợp"].map(
                                (item, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                                        >
                                            <svg
                                                width="4"
                                                height="4"
                                                viewBox="0 0 4 4"
                                                className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            >
                                                <circle cx="2" cy="2" r="2" fill="currentColor" />
                                            </svg>
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Career Building */}
                    <div>
                        <h3 className="font-bold text-xl mb-6 text-transparent bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text">
                            Xây dựng sự nghiệp
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Việc làm lương cao",
                                "Việc làm tốt nhất",
                                "Việc làm toàn thời gian",
                                "Việc làm bán thời gian",
                                "Việc làm thực tập",
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <svg
                                            width="4"
                                            height="4"
                                            viewBox="0 0 4 4"
                                            className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <circle cx="2" cy="2" r="2" fill="currentColor" />
                                        </svg>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Policy */}
                    <div>
                        <h3 className="font-bold text-xl mb-6 text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
                            Chính sách
                        </h3>
                        <ul className="space-y-4 mb-8">
                            {["Chính sách hoạt động", "Chính sách bảo mật"].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <svg
                                            width="4"
                                            height="4"
                                            viewBox="0 0 4 4"
                                            className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <circle cx="2" cy="2" r="2" fill="currentColor" />
                                        </svg>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div>
                            <h3 className="font-bold text-xl mb-4 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                                Liên hệ
                            </h3>
                            <p className="text-gray-300">Cộng đồng TalentHub</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700/50 bg-black/20 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm">© 2024 TalentHub. Tất cả quyền được bảo lưu.</p>
                        <div className="flex items-center gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                                Điều khoản sử dụng
                            </a>
                            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                                Chính sách riêng tư
                            </a>
                            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
