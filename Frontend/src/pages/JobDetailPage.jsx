import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
import Breadcrumb from "../components/Breadcrumb";
import JobDetailsCard from "../components/JobDetailsCard";
import CompanyInfoCard from "../components/CompanyInfoCard";
import RelatedJobs from "../components/RelatedJobs";
import Footer from "../components/Footer";
import { jobService } from "../api";

const JobDetailPage = () => {
    const { id } = useParams();
    const [jobData, setJobData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [relatedJobs, setRelatedJobs] = useState([]);

    useEffect(() => {
        // Fetch job data from API
        const fetchJobData = async () => {
            try {
                console.log("Fetching job with ID:", id);
                const response = await jobService.getJobById(id);
                console.log("Job API response:", response);
                
                if (response && response.success === true && response.data) {
                    console.log("Setting job data:", response.data);
                    setJobData(response.data);
                    
                    // Fetch related jobs based on job category/skills
                    fetchRelatedJobs(response.data);
                } else {
                    throw new Error("Invalid response structure");
                }
            } catch (err) {
                console.error("Error fetching job:", err);
                setError("Failed to load job details. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        const fetchRelatedJobs = async (currentJob) => {
            try {
                // Use job title keywords or skills to find related jobs
                const keywords = currentJob.title.split(' ').filter(word => word.length > 3);
                const filters = {
                    limit: 6 // Get 6 related jobs
                };
                
                // Add title or skills based filtering
                if (currentJob.skills && currentJob.skills.length > 0) {
                    filters.skills = currentJob.skills.join(',');
                } else if (keywords.length > 0) {
                    filters.title = keywords[0]; // Use first keyword
                }
                
                const response = await jobService.getAllJobs(filters);
                
                if (response && response.data) {
                    // Filter out the current job
                    const filteredJobs = response.data.filter(job => job._id !== id);
                    // Get only the first 6 jobs
                    setRelatedJobs(filteredJobs.slice(0, 6));
                }
            } catch (error) {
                console.error("Error fetching related jobs:", error);
            }
        };

        if (id) {
            fetchJobData();
        }
    }, [id]);

    const handleApply = async (applicationData) => {
        try {
            await jobService.applyForJob(id, applicationData);
            alert("Ứng tuyển thành công!");
        } catch (err) {
            console.error("Error applying for job:", err);
            alert("Đã có lỗi xảy ra khi ứng tuyển. Vui lòng thử lại sau.");
        }
    };

    // Generate breadcrumb items based on job data
    const generateBreadcrumbs = () => {
        const breadcrumbItems = [
            { label: "Trang chủ", href: "/" },
            { label: "Việc làm", href: "/search" }
        ];

        if (jobData) {
            // Add relevant category if available
            if (jobData.jobType) {
                breadcrumbItems.push({
                    label: jobData.jobType,
                    href: `/search?jobType=${encodeURIComponent(jobData.jobType)}`
                });
            }
            
            // Add job title as the last item (non-clickable)
            breadcrumbItems.push({
                label: jobData.title
            });
        }

        return breadcrumbItems;
    };

    const breadcrumbItems = generateBreadcrumbs();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-800 mx-auto mb-4"></div>
                    <p className="text-xl font-bold text-gray-600">Đang tải thông tin việc làm...</p>
                </div>
            </div>
        );
    }

    if (error || !jobData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-red-600 mb-4">Không tìm thấy việc làm</h1>
                    <p className="text-xl text-gray-600">
                        {error || "Việc làm này có thể đã bị xóa hoặc không tồn tại."}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Banner */}
            <div className="w-full h-48 bg-gradient-to-r from-green-600 to-green-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative z-10 container mx-auto h-full flex items-center px-6">
                    <h1 className="text-white text-4xl font-bold">Chi tiết công việc</h1>
                </div>
            </div>

            <SearchSection />

            <div className="container mx-auto px-6 pb-16">
                <Breadcrumb items={generateBreadcrumbs()} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <JobDetailsCard job={jobData} onApply={handleApply} />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <CompanyInfoCard 
                            company={{
                                name: jobData.company,
                                field: jobData.industry,
                                scale: jobData.companySize,
                                address: jobData.location,
                                website: jobData.recruiter?.companyWebsite,
                                description: jobData.recruiter?.companyDescription
                            }} 
                        />
                    </div>
                </div>

                {relatedJobs.length > 0 && <RelatedJobs jobs={relatedJobs} />}
            </div>

            <Footer />
        </div>
    );
};

export default JobDetailPage;
