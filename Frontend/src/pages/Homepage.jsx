import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";
import JobCard from "../components/JobCard";
import CompanyCard from "../components/CompanyCard";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { jobService } from "../api";

const Homepage = () => {
    const [jobs, setJobs] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState({
        jobs: true,
        companies: true
    });
    const [error, setError] = useState({
        jobs: null,
        companies: null
    });
    const [selectedLocation, setSelectedLocation] = useState("TP. Hồ Chí Minh");

    // Fetch jobs from API
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(prev => ({ ...prev, jobs: true }));
                // Fetch featured/recent jobs
                const response = await jobService.getAllJobs({
                    limit: 20,
                    sort: "-createdAt", // Sort by newest first
                });
                
                if (response && response.data) {
                    setJobs(response.data);
                } else {
                    setJobs([]);
                }
            } catch (err) {
                console.error("Error fetching jobs:", err);
                setError(prev => ({ ...prev, jobs: "Failed to load jobs. Please try again later." }));
            } finally {
                setLoading(prev => ({ ...prev, jobs: false }));
            }
        };

        fetchJobs();
    }, []);

    // Fetch companies from API (get top companies with most jobs)
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                setLoading(prev => ({ ...prev, companies: true }));
                // For now, we'll use the recruiter data from jobs as a stand-in for companies
                const response = await jobService.getAllJobs({
                    limit: 50, // Get more jobs to extract company info
                    fields: "company,recruiter,location,industry" // Only fetch the fields we need
                });
                
                if (response && response.data && response.data.length > 0) {
                    // Extract unique companies from job data
                    const uniqueCompanies = [];
                    const companyMap = {};
                    
                    response.data.forEach(job => {
                        if (job.company && !companyMap[job.company]) {
                            companyMap[job.company] = {
                                id: job.recruiter?._id || job._id,
                                name: job.company,
                                industry: job.industry || "Various industries",
                                jobCount: 1
                            };
                        } else if (job.company && companyMap[job.company]) {
                            companyMap[job.company].jobCount++;
                        }
                    });
                    
                    // Convert to array and sort by job count
                    const companiesArray = Object.values(companyMap);
                    companiesArray.sort((a, b) => b.jobCount - a.jobCount);
                    
                    setCompanies(companiesArray.slice(0, 6)); // Get top 6 companies
                } else {
                    setCompanies([]);
                }
            } catch (err) {
                console.error("Error fetching companies:", err);
                setError(prev => ({ ...prev, companies: "Failed to load company data. Please try again later." }));
            } finally {
                setLoading(prev => ({ ...prev, companies: false }));
            }
        };        fetchCompanies();
    }, []);

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
                    </div>                    {/* Jobs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {loading.jobs ? (
                            // Show loading skeleton
                            Array(6).fill(0).map((_, index) => (
                                <div key={index} className="bg-white/80 border border-gray-100 rounded-3xl p-6 animate-pulse">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded-2xl"></div>
                                        <div className="w-10 h-10 bg-gray-200 rounded-2xl"></div>
                                    </div>
                                    <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-3"></div>
                                    <div className="h-4 bg-gray-200 rounded-md w-1/2 mb-4"></div>
                                    <div className="flex flex-col gap-2 mb-6">
                                        <div className="h-10 bg-gray-200 rounded-2xl"></div>
                                        <div className="h-10 bg-gray-200 rounded-2xl"></div>
                                    </div>
                                    <div className="h-12 bg-gray-200 rounded-2xl w-full"></div>
                                </div>
                            ))
                        ) : error.jobs ? (
                            // Show error message
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-8 text-center">
                                <div className="text-red-500 text-lg mb-4">{error.jobs}</div>
                                <button 
                                    onClick={() => window.location.reload()} 
                                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                                >
                                    Thử lại
                                </button>
                            </div>
                        ) : jobs.length > 0 ? (
                            // Show jobs from API
                            jobs.map((job, index) => (
                                <JobCard key={job._id || index} job={job} />
                            ))
                        ) : (
                            // No jobs found
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-8 text-center">
                                <p className="text-gray-500 text-lg">Không tìm thấy việc làm nào.</p>
                            </div>
                        )}
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
                    </div>                    {/* Companies Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {loading.companies ? (
                            // Show loading skeleton
                            Array(6).fill(0).map((_, index) => (
                                <div key={index} className="bg-white/80 border border-gray-100 rounded-3xl p-6 animate-pulse">
                                    <div className="w-16 h-16 bg-gray-200 rounded-2xl mb-4"></div>
                                    <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-3"></div>
                                    <div className="h-4 bg-gray-200 rounded-md w-1/2 mb-4"></div>
                                    <div className="h-8 bg-gray-200 rounded-xl w-1/3 mt-4"></div>
                                </div>
                            ))
                        ) : error.companies ? (
                            // Show error message
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-8 text-center">
                                <div className="text-red-500 text-lg mb-4">{error.companies}</div>
                                <button 
                                    onClick={() => window.location.reload()} 
                                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                                >
                                    Thử lại
                                </button>
                            </div>
                        ) : companies.length > 0 ? (
                            // Show companies from API
                            companies.map((company, index) => (
                                <CompanyCard key={company.id || index} company={company} />
                            ))
                        ) : (
                            // No companies found
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-8 text-center">
                                <p className="text-gray-500 text-lg">Không tìm thấy công ty nào.</p>
                            </div>
                        )}
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
