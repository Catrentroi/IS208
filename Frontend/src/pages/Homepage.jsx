import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";
import JobCard from "../components/JobCard";
import CompanyCard from "../components/CompanyCard";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Homepage = () => {
    // Mock data cho các việc làm
    const mockJobs = [
        {
            id: 1,
            title: "Nhân Viên Marketing (Mảng Thú Y / Thủy Sản)",
            company: "CÔNG TY TNHH PLASMA",
            salary: "10 - 15 triệu",
            location: "Hồ Chí Minh",
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "CÔNG TY TNHH CÔNG NGHỆ ABC",
            salary: "15 - 25 triệu",
            location: "Hà Nội",
        },
        {
            id: 3,
            title: "Business Analyst",
            company: "CÔNG TY CỔ PHẦN DEF",
            salary: "20 - 30 triệu",
            location: "Đà Nẵng",
        },
    ];

    // Mock data cho các công ty
    const mockCompanies = [
        {
            id: 1,
            name: "CÔNG TY CỔ PHẦN VINCOM RETAIL",
            industry: "Bất động sản",
            jobCount: 10,
        },
        {
            id: 2,
            name: "CÔNG TY TNHH SHOPEE",
            industry: "Thương mại điện tử",
            jobCount: 25,
        },
        {
            id: 3,
            name: "CÔNG TY CỔ PHẦN FPT",
            industry: "Công nghệ thông tin",
            jobCount: 15,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <HeroSection />

            {/* Search Section */}
            <SearchSection />

            {/* Jobs Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text mb-4">
                                Việc làm tốt nhất
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-600 font-medium">Lọc theo:</span>
                                <span className="text-gray-800 font-bold">Địa điểm</span>
                            </div>

                            {/* Location Filters */}
                            <div className="flex flex-wrap gap-3">
                                <button className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
                                    <span className="relative z-10">TP. Hồ Chí Minh</span>
                                </button>
                                {["Quận 1", "Quận 2", "Quận 3", "Quận 4"].map((district, index) => (
                                    <button
                                        key={index}
                                        className="px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-2xl font-semibold border border-gray-200 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-700 hover:border-emerald-300 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                                    >
                                        {district}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Jobs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {Array(20)
                            .fill(0)
                            .map((_, index) => (
                                <JobCard key={index} job={mockJobs[index % mockJobs.length]} />
                            ))}
                    </div>

                    {/* Modern Pagination */}
                    <div className="flex items-center justify-center gap-4">
                        <button className="group flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:scale-110">
                            <svg
                                className="w-6 h-6 text-gray-600 group-hover:text-emerald-600 transition-colors duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200">
                            <span className="text-xl font-bold text-gray-800">2</span>
                            <span className="text-gray-500">/</span>
                            <span className="text-xl font-bold text-gray-800">10</span>
                            <span className="text-gray-600 font-medium ml-2">trang</span>
                        </div>

                        <button className="group flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:scale-110">
                            <svg
                                className="w-6 h-6 text-gray-600 group-hover:text-emerald-600 transition-colors duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Companies Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-cyan-50/50 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-200/20 to-blue-200/20 rounded-full -ml-32 -mb-32"></div>

                <div className="container mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text mb-6">
                            Doanh nghiệp uy tín hàng đầu
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-4"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Khám phá cơ hội nghề nghiệp tại những công ty hàng đầu với môi trường làm việc chuyên nghiệp
                        </p>
                    </div>

                    {/* Companies Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {Array(9)
                            .fill(0)
                            .map((_, index) => (
                                <CompanyCard key={index} company={mockCompanies[index % mockCompanies.length]} />
                            ))}
                    </div>

                    {/* Modern Pagination */}
                    <div className="flex items-center justify-center gap-4">
                        <button className="group flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:scale-110">
                            <svg
                                className="w-6 h-6 text-gray-600 group-hover:text-emerald-600 transition-colors duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200">
                            <span className="text-xl font-bold text-gray-800">2</span>
                            <span className="text-gray-500">/</span>
                            <span className="text-xl font-bold text-gray-800">10</span>
                            <span className="text-gray-600 font-medium ml-2">trang</span>
                        </div>

                        <button className="group flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:scale-110">
                            <svg
                                className="w-6 h-6 text-gray-600 group-hover:text-emerald-600 transition-colors duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Homepage;
