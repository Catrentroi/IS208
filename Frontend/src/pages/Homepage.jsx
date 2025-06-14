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
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <HeroSection />

            {/* Search Section */}
            <SearchSection />

            {/* Jobs Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-4xl font-bold text-black">Việc làm tốt nhất</h2>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-500">Lọc theo:</span>
                            <span className="text-black font-bold">Địa điểm</span>

                            {/* Location Filters */}
                            <div className="flex gap-2 ml-8">
                                <button className="bg-green-800 text-white px-6 py-2 rounded-full font-bold">
                                    TP. Hồ Chí Minh
                                </button>
                                <button className="bg-gray-400 text-white px-6 py-2 rounded-full font-bold">
                                    Quận 1
                                </button>
                                <button className="bg-gray-400 text-white px-6 py-2 rounded-full font-bold">
                                    Quận 2
                                </button>
                                <button className="bg-gray-400 text-white px-6 py-2 rounded-full font-bold">
                                    Quận 3
                                </button>
                                <button className="bg-gray-400 text-white px-6 py-2 rounded-full font-bold">
                                    Quận 4
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Jobs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                        {Array(20)
                            .fill(0)
                            .map((_, index) => (
                                <JobCard key={index} job={mockJobs[index % mockJobs.length]} />
                            ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-4">
                        <button className="w-10 h-10 flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <span className="text-xl font-bold">2 / 10 trang</span>
                        <button className="w-10 h-10 flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Companies Section */}
            <section className="py-16 px-6 bg-gray-100">
                <div className="container mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-green-800 mb-4">Doanh nghiệp uy tín hàng đầu</h2>
                    </div>

                    {/* Companies Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {Array(9)
                            .fill(0)
                            .map((_, index) => (
                                <CompanyCard key={index} company={mockCompanies[index % mockCompanies.length]} />
                            ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-4">
                        <button className="w-10 h-10 flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <span className="text-xl font-bold">2 / 10 trang</span>
                        <button className="w-10 h-10 flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
