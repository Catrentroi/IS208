import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
import Breadcrumb from "../components/Breadcrumb";
import FilterSection from "../components/FilterSection";
import JobResultCard from "../components/JobResultCard";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState({
        jobTitle: "Nhân viên Marketing",
        company: "",
        location: "Thành phố Hồ Chí Minh",
    });

    const [filters, setFilters] = useState({
        experience: "all",
        level: "all",
        workType: "all",
        salary: "all",
        salaryRange: { from: "", to: "" },
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages] = useState(10);
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Mock data cho kết quả tìm kiếm
    const mockJobs = [
        {
            id: 1,
            title: "Nhân Viên Marketing (Mảng Thú Y/Thủy Sản)",
            company: "CÔNG TY TNHH PLASMA",
            salary: "10 - 15 triệu",
            experience: "3 năm",
            location: "Hồ Chí Minh",
        },
        {
            id: 2,
            title: "Chuyên Viên Marketing Digital",
            company: "CÔNG TY CỔ PHẦN VINCOM RETAIL",
            salary: "15 - 20 triệu",
            experience: "2 năm",
            location: "Hồ Chí Minh",
        },
        {
            id: 3,
            title: "Trưởng Phòng Marketing",
            company: "CÔNG TY TNHH SAMSUNG VIETNAM",
            salary: "25 - 30 triệu",
            experience: "5 năm",
            location: "Hồ Chí Minh",
        },
        {
            id: 4,
            title: "Marketing Executive",
            company: "UNILEVER VIETNAM",
            salary: "12 - 18 triệu",
            experience: "1 năm",
            location: "Hồ Chí Minh",
        },
        {
            id: 5,
            title: "Content Marketing Specialist",
            company: "SHOPEE VIETNAM",
            salary: "18 - 25 triệu",
            experience: "3 năm",
            location: "Hồ Chí Minh",
        },
        {
            id: 6,
            title: "Marketing Manager",
            company: "GRAB VIETNAM",
            salary: "30 - 40 triệu",
            experience: "4 năm",
            location: "Hồ Chí Minh",
        },
    ];

    // Breadcrumb items
    const breadcrumbItems = [
        { label: "Trang chủ", href: "/" },
        { label: "Việc làm", href: "/jobs" },
        { label: "Nhân viên marketing" },
    ];

    // Simulate search with loading
    const performSearch = async (newQuery, newFilters) => {
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            // Filter jobs based on search criteria
            let filteredJobs = mockJobs;

            if (newQuery?.jobTitle) {
                filteredJobs = filteredJobs.filter((job) =>
                    job.title.toLowerCase().includes(newQuery.jobTitle.toLowerCase())
                );
            }

            if (newQuery?.company) {
                filteredJobs = filteredJobs.filter((job) =>
                    job.company.toLowerCase().includes(newQuery.company.toLowerCase())
                );
            }

            setJobs(filteredJobs);
            setIsLoading(false);
        }, 1000);
    };

    // Handle search from SearchSection
    const handleSearch = (newSearchQuery) => {
        setSearchQuery(newSearchQuery);
        setCurrentPage(1);
        performSearch(newSearchQuery, filters);
    };

    // Handle filter changes
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        setCurrentPage(1);
        performSearch(searchQuery, newFilters);
    };

    // Handle job application
    const handleApply = (job) => {
        console.log("Applying for job:", job);
        alert(`Đang ứng tuyển vào vị trí: ${job.title}`);
    };

    // Handle favorite job
    const handleFavorite = (job) => {
        console.log("Adding to favorites:", job);
        alert(`Đã thêm "${job.title}" vào danh sách yêu thích`);
    };

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Initial search on component mount
    useEffect(() => {
        performSearch(searchQuery, filters);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header />

            {/* Hero Image */}
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Tìm Kiếm Việc Làm</h1>
                </div>
            </div>

            {/* Search Section */}
            <div className="py-8">
                <SearchSection initialData={searchQuery} onSearch={handleSearch} />
            </div>

            {/* Breadcrumb */}
            <Breadcrumb items={breadcrumbItems} />

            {/* Main Content */}
            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filter Sidebar */}
                    <div className="lg:col-span-1">
                        <FilterSection onFilterChange={handleFilterChange} />
                    </div>

                    {/* Results Section */}
                    <div className="lg:col-span-3">
                        {/* Results Header */}
                        <div className="mb-8">
                            <h2 className="text-green-800 font-bold text-3xl mb-4">
                                Kết quả tìm kiếm - Công việc phù hợp với bạn
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Tìm thấy {jobs.length} việc làm phù hợp với từ khóa "{searchQuery.jobTitle}"
                            </p>
                        </div>

                        {/* Loading State */}
                        {isLoading && (
                            <div className="flex justify-center items-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-800"></div>
                                <span className="ml-4 text-lg text-gray-600">Đang tìm kiếm...</span>
                            </div>
                        )}

                        {/* Job Results */}
                        {!isLoading && (
                            <>
                                {jobs.length > 0 ? (
                                    <div className="space-y-6">
                                        {jobs.map((job) => (
                                            <JobResultCard
                                                key={job.id}
                                                job={job}
                                                onApply={handleApply}
                                                onFavorite={handleFavorite}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="text-gray-400 text-6xl mb-4">🔍</div>
                                        <h3 className="text-xl font-bold text-gray-600 mb-2">
                                            Không tìm thấy việc làm phù hợp
                                        </h3>
                                        <p className="text-gray-500">Hãy thử thay đổi từ khóa tìm kiếm hoặc bộ lọc</p>
                                    </div>
                                )}

                                {/* Pagination */}
                                {jobs.length > 0 && (
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default SearchPage;
