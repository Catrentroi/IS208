import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { candidateService } from "../api";

const JobApplicationModal = ({ isOpen, onClose, job, onSubmit }) => {
    const { user, isAuthenticated } = useAuth();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        coverLetter: ""
    });
    const [uploadedFile, setUploadedFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [resumeUploaded, setResumeUploaded] = useState(false);

    // If user is logged in, prefill the form with user data
    useEffect(() => {
        if (isAuthenticated && user) {
            // Fetch candidate profile if user is logged in
            const fetchCandidateProfile = async () => {
                try {
                    const candidateData = await candidateService.getMyProfile();
                    setFormData({
                        fullName: candidateData.name || user.name || "",
                        email: user.email || "",
                        phone: candidateData.phone || "",
                        coverLetter: ""
                    });
                    
                    // Check if candidate already has a resume uploaded
                    if (candidateData.resume) {
                        setResumeUploaded(true);
                    }
                } catch (err) {
                    console.error("Error fetching candidate profile:", err);
                }
            };
            
            fetchCandidateProfile();
        }
    }, [isAuthenticated, user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type (PDF, DOC, DOCX)
            const allowedTypes = [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ];
            if (!allowedTypes.includes(file.type)) {
                alert("Chỉ chấp nhận file PDF, DOC, DOCX");
                return;
            }

            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert("File không được vượt quá 5MB");
                return;
            }

            setUploadedFile(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Upload resume if a new file was selected
            let resumeId = null;
            if (uploadedFile && !resumeUploaded) {
                const resumeData = await candidateService.uploadResume(uploadedFile);
                resumeId = resumeData.resumeId;
            }
            
            // Submit the application
            await onSubmit({
                ...formData,
                resumeId
            });
            
            // Close the modal
            onClose();
        } catch (error) {
            console.error("Application submission error:", error);
            alert("Failed to submit your application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setFormData({ fullName: "", email: "", phone: "" });
        setUploadedFile(null);
        setIsSubmitting(false);
        onClose();
    };

    const handleUploadClick = () => {
        document.getElementById("cv-upload").click();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="bg-green-800 text-white px-8 py-6 rounded-t-2xl relative">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 w-8 h-8 bg-gray-400 rounded flex items-center justify-center hover:bg-gray-500 transition-colors"
                    >
                        <span className="text-white text-lg">×</span>
                    </button>
                    <h2 className="text-3xl font-bold mb-2">
                        Ứng tuyển {job?.title || "Nhân Viên Marketing ADS"} Lương Từ 15 Triệu Yêu Cầu 3 Năm Kinh Nghiệm
                    </h2>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="p-8">
                    {/* Upload Section */}
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-black mb-6">Tải CV từ máy tính</h3>

                        {/* Upload Area */}
                        <div
                            className="border-2 border-dashed border-green-800 rounded-lg p-16 mb-6 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                            onClick={handleUploadClick}
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl">📄</span>
                                </div>
                                {uploadedFile ? (
                                    <div className="text-center">
                                        <p className="text-lg font-bold text-green-800 mb-2">
                                            ✅ Đã tải lên: {uploadedFile.name}
                                        </p>
                                        <p className="text-gray-600">
                                            Kích thước: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                                        </p>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <p className="text-lg font-bold text-gray-700 mb-2">
                                            Kéo thả file hoặc click để chọn CV
                                        </p>
                                        <p className="text-gray-600">Hỗ trợ: PDF, DOC, DOCX (tối đa 5MB)</p>
                                    </div>
                                )}
                            </div>
                            <input
                                id="cv-upload"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handleUploadClick}
                            className="bg-gray-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-700 transition-colors"
                        >
                            Upload CV
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="border-t-2 border-gray-300 my-8"></div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="block text-black font-bold text-xl mb-3">Họ và tên:*</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 border border-green-800 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                placeholder="Nhập họ và tên"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-black font-bold text-xl mb-3">Email:*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 border border-green-800 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                placeholder="Nhập email"
                                required
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-black font-bold text-xl mb-3">Số điện thoại:*</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 border border-green-800 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                placeholder="Nhập số điện thoại"
                                required
                            />
                        </div>
                    </div>

                    {/* Warning Section */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                        <h4 className="text-red-600 font-bold text-3xl mb-4">Lưu ý</h4>
                        <p className="text-black font-bold text-lg leading-relaxed">
                            TalentHub khuyên tất cả các bạn hãy luôn cẩn trọng trong quá trình tìm việc và chủ động
                            nghiên cứu về thông tin công ty, vị trí việc làm trước khi ứng tuyển.
                            <br />
                            <br />
                            Ứng viên cần có trách nhiệm với hành vi ứng tuyển của mình. Nếu bạn gặp phải tin tuyển dụng
                            hoặc nhận được liên lạc đáng ngờ của nhà tuyển dụng, hãy báo cáo ngay cho TalentHub qua
                            email TalentHub.support@gmail.com để được hỗ trợ kịp thời.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="bg-gray-400 text-white px-8 py-3 rounded-lg font-bold text-xl hover:bg-gray-500 transition-colors"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-16 py-3 rounded-lg font-bold text-xl transition-colors ${
                                isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-green-800 hover:bg-green-900"
                            } text-white`}
                        >
                            {isSubmitting ? "Đang gửi..." : "Nộp hồ sơ ứng tuyển ngay"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApplicationModal;
