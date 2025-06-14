import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
import Breadcrumb from "../components/Breadcrumb";
import JobDetailsCard from "../components/JobDetailsCard";
import JobDescription from "../components/JobDescription";
import CompanyInfoCard from "../components/CompanyInfoCard";
import RelatedJobs from "../components/RelatedJobs";
import Footer from "../components/Footer";

const JobDetailPage = () => {
    const { id } = useParams();
    const [jobData, setJobData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Mock job data
    const mockJobData = {
        id: 1,
        title: "Nhân Viên Marketing (Mảng Thú Y/Thủy Sản)",
        company: "CÔNG TY TNHH PLASMA",
        salary: "15 - 16 triệu",
        location: "Hồ Chí Minh",
        experience: "3 năm",
        level: "Nhân viên",
        education: "Đại học",
        quantity: "2 người",
        workType: "Toàn thời gian",
        deadline: "30/06/2025",
        description: `Mô tả công việc
- Lập kế hoạch, triển khai, giám sát các chiến dịch quảng cáo/truyền thông (Facebook, TikTok, Instagram, Zalo, Google, SMS Marketing,...
- Xác định, phân tích khách hàng tiềm năng và đối tượng mục tiêu  
- Xây dựng chiến lược Marketing & Truyền thông để tiếp cận khách hàng trên các kênh
- Phân tích xu hướng thị trường, thương hiệu, đối thủ cạnh tranh
- Theo dõi hiệu quả doanh số các chiến dịch, báo cáo định kỳ
- Phối hợp quản lý lập ngân sách, tối ưu chi phí
- Hỗ trợ phát triển sản phẩm và hoạt động nhà hàng

Yêu cầu ứng viên
- Tốt nghiệp Đại học (Marketing, Quản trị kinh doanh, Thương mại...).
- Kinh nghiệm từ 3-5 năm chạy quảng cáo
- Độ tuổi từ 25 tuổi trở lên
- Ưu tiên ứng viên đã từng làm trong ngành F&B, bán lẻ (không bắt buộc)
- Có kỹ năng lập kế hoạch, làm việc độc lập và đội nhóm tốt.
- Giao tiếp tốt, chủ động, nhiệt tình và có trách nhiệm với công việc.

Quyền lợi
- Lương từ 15 triệu (thỏa thuận tùy theo năng lực).
- Tham gia BHXH, BHYT, BHTN và các chế độ khác theo quy định.
- Được đào tạo để định hướng trở thành Marketing Leader.
- Nghỉ và thưởng các ngày lễ, tết, phép, thăm hỏi, du lịch theo quy định của Công ty.
- Review & tăng lương theo kết quả hoàn thành công việc của nhân viên.

Địa điểm làm việc: 207C Nguyễn Xí, Phường 26, Quận Bình Thạnh, TP. Hồ Chí Minh

Thời gian làm việc
- Thứ 2 - Thứ 6 (từ 08:30 đến 17:30)
- Thứ 7 (từ 08:30 đến 12:30)`,
        companyInfo: {
            name: "CÔNG TY TNHH PLASMA",
            scale: "25-99 nhân viên",
            field: "Thú y - Thủy sản",
            address: "207C Nguyễn Xí, Phường 26, Quận Bình Thạnh, TP. Hồ Chí Minh",
        },
    };

    // Breadcrumb items
    const breadcrumbItems = [
        { label: "Trang chủ", href: "/" },
        { label: "Việc làm", href: "/search" },
        { label: "Nhân viên marketing", href: "/search?q=marketing" },
        { label: "Nhân viên Marketing Mảng Thú Y/Thủy sản" },
    ];

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setJobData(mockJobData);
            setLoading(false);
        }, 1000);
    }, [id]);

    const handleApply = (job) => {
        console.log("Applying for job:", job);
        alert(`Ứng tuyển cho vị trí: ${job.title}`);
    };

    const handleFavorite = (job) => {
        console.log("Adding to favorites:", job);
        alert(`Đã thêm vào danh sách yêu thích: ${job.title}`);
    };

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

    if (!jobData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-red-600 mb-4">Không tìm thấy việc làm</h1>
                    <p className="text-xl text-gray-600">Việc làm này có thể đã bị xóa hoặc không tồn tại.</p>
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
                <Breadcrumb items={breadcrumbItems} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <JobDetailsCard job={jobData} onApply={handleApply} onFavorite={handleFavorite} />

                        <JobDescription description={jobData.description} />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <CompanyInfoCard company={jobData.companyInfo} />
                    </div>
                </div>

                <RelatedJobs />
            </div>

            <Footer />
        </div>
    );
};

export default JobDetailPage;
