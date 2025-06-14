import React from "react";

const JobDescription = ({ description }) => {
    const defaultDescription = `Mô tả công việc
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
- Thứ 7 (từ 08:30 đến 12:30)`;

    const formatDescription = (text) => {
        return text.split("\n").map((line, index) => {
            // Check if line is a header
            if (line.match(/^(Mô tả công việc|Yêu cầu ứng viên|Quyền lợi|Địa điểm làm việc|Thời gian làm việc)$/)) {
                return (
                    <h3 key={index} className="text-black font-bold text-xl mt-6 mb-3">
                        {line}
                    </h3>
                );
            }

            // Check if line starts with a dash (bullet point)
            if (line.startsWith("- ")) {
                return (
                    <li key={index} className="text-green-800 font-medium text-lg mb-2 ml-4">
                        {line.substring(2)}
                    </li>
                );
            }

            // Regular paragraph
            if (line.trim()) {
                return (
                    <p key={index} className="text-green-800 font-medium text-lg mb-3">
                        {line}
                    </p>
                );
            }

            // Empty line
            return <br key={index} />;
        });
    };

    return (
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">i</span>
                </div>
                <h2 className="text-black font-bold text-xl">Thông tin chung</h2>
            </div>

            <div className="prose max-w-none">{formatDescription(description || defaultDescription)}</div>
        </div>
    );
};

export default JobDescription;
