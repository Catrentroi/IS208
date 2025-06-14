import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
import Breadcrumb from "../components/Breadcrumb";
import FilterSection from "../components/FilterSection";
import JobResultCard from "../components/JobResultCard";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import { jobService } from "../api";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    
    // Initialize search state from URL parameters
    const [searchQuery, setSearchQuery] = useState({
        title: searchParams.get('title') || "",
        company: searchParams.get('company') || "",
        location: searchParams.get('location') || ""
    });

    const [filters, setFilters] = useState({
        experience: searchParams.get('experience') || "all",
        jobType: searchParams.get('jobType') || "all",
        level: searchParams.get('level') || "all",
        salary: searchParams.get('salary') || "all",
        salaryRange: { 
            from: searchParams.get('salaryFrom') || "", 
            to: searchParams.get('salaryTo') || "" 
        },
    });

    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 1);
    const [totalPages, setTotalPages] = useState(1);
    const [jobs, setJobs] = useState([]);    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalJobs, setTotalJobs] = useState(0);    // Generate breadcrumb items based on search query
    const breadcrumbItems = [
        { label: "Trang chủ", href: "/" },
        { label: "Việc làm", href: "/jobs" },
        ...(searchQuery.title ? [{ label: searchQuery.title }] : [])
    ];

    // Perform search with API
    const performSearch = async (newQuery, newFilters, page = 1) => {
        setIsLoading(true);
        setError(null);
        
        try {
            // Build API filters
            const apiFilters = {
                page: page,
                limit: 10 // Items per page
            };
            
            // Add search query params
            if (newQuery.title) apiFilters.title = newQuery.title;
            if (newQuery.company) apiFilters.company = newQuery.company;
            if (newQuery.location) apiFilters.location = newQuery.location;
            
            // Add filters
            if (newFilters.experience && newFilters.experience !== 'all') {
                apiFilters.experience = newFilters.experience;
            }
            
            if (newFilters.jobType && newFilters.jobType !== 'all') {
                apiFilters.jobType = newFilters.jobType;
            }
            
            if (newFilters.level && newFilters.level !== 'all') {
                apiFilters.level = newFilters.level;
            }
            
            // Handle salary range
            if (newFilters.salary === 'custom' && (newFilters.salaryRange.from || newFilters.salaryRange.to)) {
                if (newFilters.salaryRange.from) apiFilters.minSalary = newFilters.salaryRange.from;
                if (newFilters.salaryRange.to) apiFilters.maxSalary = newFilters.salaryRange.to;
            } else if (newFilters.salary && newFilters.salary !== 'all') {
                // Handle predefined salary ranges
                switch (newFilters.salary) {
                    case 'under10':
                        apiFilters.maxSalary = 10000000;
                        break;
                    case '10to20':
                        apiFilters.minSalary = 10000000;
                        apiFilters.maxSalary = 20000000;
                        break;
                    case '20to30':
                        apiFilters.minSalary = 20000000;
                        apiFilters.maxSalary = 30000000;
                        break;
                    case 'over30':
                        apiFilters.minSalary = 30000000;
                        break;
                }
            }
            
            console.log('Searching jobs with filters:', apiFilters);
            
            // Call API
            const response = await jobService.getAllJobs(apiFilters);
            
            console.log('Search API response:', response);
            
            if (response && response.data) {
                setJobs(response.data);
                setTotalJobs(response.totalCount || response.data.length);
                setTotalPages(response.totalPages || Math.ceil(response.totalCount / 10) || 1);
            } else {
                setJobs([]);
                setTotalJobs(0);
                setTotalPages(1);
            }
            
            // Update URL with search parameters
            const queryParams = new URLSearchParams();
            if (newQuery.title) queryParams.set('title', newQuery.title);
            if (newQuery.company) queryParams.set('company', newQuery.company);
            if (newQuery.location) queryParams.set('location', newQuery.location);
            if (newFilters.experience !== 'all') queryParams.set('experience', newFilters.experience);
            if (newFilters.jobType !== 'all') queryParams.set('jobType', newFilters.jobType);
            if (newFilters.level !== 'all') queryParams.set('level', newFilters.level);
            if (newFilters.salary !== 'all') queryParams.set('salary', newFilters.salary);
            if (page > 1) queryParams.set('page', page.toString());
            
            navigate({ search: queryParams.toString() });
        } catch (err) {
            console.error('Error searching jobs:', err);
            setError('Failed to load jobs. Please try again.');
            setJobs([]);
            setTotalJobs(0);
            setTotalPages(1);
        } finally {
            setIsLoading(false);
        }
    };    // Handle search form submit
    const handleSearch = (newSearchQuery) => {
        setSearchQuery(newSearchQuery);
        setCurrentPage(1);
        performSearch(newSearchQuery, filters, 1);
    };

    // Handle filter changes
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        setCurrentPage(1);
        performSearch(searchQuery, newFilters, 1);
    };

    // Handle job application
    const handleApply = (job) => {
        // Check if user is logged in
        const token = localStorage.getItem('token');
        
        if (!token) {
            alert("Vui lòng đăng nhập để ứng tuyển");
            // Save the job to redirect back after login
            localStorage.setItem('redirectAfterLogin', `/job/${job._id || job.id}`);
            navigate('/login');
            return;
        }
        
        // Navigate to job detail page for application
        navigate(`/job/${job._id || job.id}`);
    };

    // Handle favorite job
    const handleFavorite = (job) => {
        // This would need a backend implementation for saved jobs
        console.log("Adding to favorites:", job);
        alert(`Đã thêm "${job.title}" vào danh sách yêu thích`);
    };

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
        performSearch(searchQuery, filters, page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Initial search on component mount
    useEffect(() => {
        performSearch(searchQuery, filters, currentPage);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Header */}
            <Header />

            {/* Modern Hero Section */}
            <div className="relative h-64 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>

                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4">Tìm Kiếm Việc Làm</h1>
                        <div className="w-24 h-1 bg-white/80 rounded-full mx-auto mb-4"></div>
                        <p className="text-white/90 text-lg">Khám phá hàng nghìn cơ hội nghề nghiệp phù hợp với bạn</p>
                    </div>
                </div>
            </div>

            {/* Search Section */}
            <div className="py-8 bg-white/80 backdrop-blur-sm border-b border-gray-100">
                <SearchSection initialData={searchQuery} onSearch={handleSearch} />
            </div>

            {/* Breadcrumb */}
            <div className="bg-white/60 backdrop-blur-sm border-b border-gray-100">
                <Breadcrumb items={breadcrumbItems} />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filter Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <FilterSection onFilterChange={handleFilterChange} />
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="lg:col-span-3">
                        {/* Results Header */}
                        <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
                            <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text mb-4">
                                Kết quả tìm kiếm - Công việc phù hợp với bạn
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4"></div>
                            <div className="flex items-center gap-4 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="text-emerald-600"
                                        >
                                            <path
                                                d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <span className="text-lg font-semibold">
                                        Tìm thấy <span className="text-emerald-600 font-bold">{jobs.length}</span> việc
                                        làm
                                    </span>
                                </div>
                                <div className="text-gray-400">•</div>
                                <span className="text-lg">
                                    phù hợp với từ khóa "
                                    <span className="font-semibold text-gray-800">{searchQuery.jobTitle}</span>"
                                </span>
                            </div>
                        </div>

                        {/* Modern Loading State */}
                        {isLoading && (
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-gray-100 mb-8">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="relative mb-6">
                                        <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin"></div>
                                        <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Đang tìm kiếm...</h3>
                                    <p className="text-gray-600">
                                        Chúng tôi đang tìm những công việc phù hợp nhất cho bạn
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Job Results */}
                        {!isLoading && (
                            <>
                                <div className="space-y-6 mb-8">
                                    {jobs.map((job) => (
                                        <JobResultCard
                                            key={job._id || job.id}
                                            job={job}
                                            onApply={() => handleApply(job)}
                                            onFavorite={() => handleFavorite(job)}
                                        />
                                    ))}
                                </div>

                                {/* No Results State */}
                                {jobs.length === 0 && (
                                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-gray-100 text-center">
                                        <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                                            <svg
                                                width="48"
                                                height="48"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="text-gray-400"
                                            >
                                                <path
                                                    d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                                <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                            Không tìm thấy kết quả phù hợp
                                        </h3>
                                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                                            Hãy thử điều chỉnh từ khóa tìm kiếm hoặc bộ lọc để tìm thấy nhiều cơ hội
                                            việc làm hơn
                                        </p>
                                        <button
                                            onClick={() => handleSearch({ jobTitle: "", company: "", location: "" })}
                                            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
                                        >
                                            Xóa bộ lọc
                                        </button>
                                    </div>
                                )}

                                {/* Pagination */}
                                {jobs.length > 0 && (
                                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-100">
                                        <Pagination
                                            currentPage={currentPage}
                                            totalPages={totalPages}
                                            onPageChange={handlePageChange}
                                        />
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SearchPage;
