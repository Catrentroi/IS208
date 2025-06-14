import React, { useState } from "react";

const CreateJobForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        requirements: "",
        location: "",
        salary: "",
        type: "full-time",
        experience: "",
        deadline: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = "Tiêu đề là bắt buộc";
        if (!formData.description.trim()) newErrors.description = "Mô tả công việc là bắt buộc";
        if (!formData.requirements.trim()) newErrors.requirements = "Yêu cầu là bắt buộc";
        if (!formData.location.trim()) newErrors.location = "Địa điểm là bắt buộc";
        if (!formData.salary.trim()) newErrors.salary = "Mức lương là bắt buộc";
        if (!formData.deadline) newErrors.deadline = "Hạn nộp hồ sơ là bắt buộc";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            // Reset form
            setFormData({
                title: "",
                description: "",
                requirements: "",
                location: "",
                salary: "",
                type: "full-time",
                experience: "",
                deadline: "",
            });
            setErrors({});
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10"></div>
                    <div className="relative flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Tạo tin tuyển dụng mới</h2>
                            <p className="text-emerald-100">Điền thông tin chi tiết để thu hút ứng viên phù hợp</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-2xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M18 6L6 18M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="p-8 space-y-8 max-h-[calc(90vh-200px)] overflow-y-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Job Title */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                    Tiêu đề công việc *
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="VD: Senior Frontend Developer"
                                        className={`w-full px-4 py-4 bg-white border-2 rounded-2xl text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-4 ${
                                            errors.title
                                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                                                : "border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20"
                                        }`}
                                    />
                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                            </div>

                            {/* Location */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                    Địa điểm làm việc *
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="VD: Hồ Chí Minh, Remote, Hybrid"
                                        className={`w-full px-4 py-4 bg-white border-2 rounded-2xl text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-4 ${
                                            errors.location
                                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                                                : "border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20"
                                        }`}
                                    />
                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                            </div>

                            {/* Salary */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                    Mức lương *
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="salary"
                                        value={formData.salary}
                                        onChange={handleChange}
                                        placeholder="VD: 15-25 triệu VNĐ"
                                        className={`w-full px-4 py-4 bg-white border-2 rounded-2xl text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-4 ${
                                            errors.salary
                                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                                                : "border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20"
                                        }`}
                                    />
                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </div>
                                {errors.salary && <p className="text-red-500 text-sm mt-1">{errors.salary}</p>}
                            </div>

                            {/* Job Type */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                    Loại hình công việc
                                </label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:border-emerald-500 focus:ring-emerald-500/20 transition-all duration-200"
                                >
                                    <option value="full-time">Toàn thời gian</option>
                                    <option value="part-time">Bán thời gian</option>
                                    <option value="contract">Hợp đồng</option>
                                    <option value="internship">Thực tập</option>
                                </select>
                            </div>

                            {/* Experience */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                    Kinh nghiệm yêu cầu
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        placeholder="VD: 2-3 năm kinh nghiệm"
                                        className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-4 focus:border-emerald-500 focus:ring-emerald-500/20"
                                    />
                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M20 6H16L14 4H10L8 6H4C2.9 6 2 6.9 2 8V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V8C22 6.9 21.1 6 20 6Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Deadline */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                    Hạn nộp hồ sơ *
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        name="deadline"
                                        value={formData.deadline}
                                        onChange={handleChange}
                                        min={new Date().toISOString().split("T")[0]}
                                        className={`w-full px-4 py-4 bg-white border-2 rounded-2xl text-gray-800 transition-all duration-200 focus:outline-none focus:ring-4 ${
                                            errors.deadline
                                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                                                : "border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20"
                                        }`}
                                    />
                                </div>
                                {errors.deadline && <p className="text-red-500 text-sm mt-1">{errors.deadline}</p>}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Job Description */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                    Mô tả công việc *
                                </label>
                                <div className="relative">
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows={6}
                                        placeholder="Mô tả chi tiết về công việc, nhiệm vụ chính, môi trường làm việc..."
                                        className={`w-full px-4 py-4 bg-white border-2 rounded-2xl text-gray-800 placeholder-gray-400 resize-none transition-all duration-200 focus:outline-none focus:ring-4 ${
                                            errors.description
                                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                                                : "border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20"
                                        }`}
                                    />
                                    <div className="absolute right-4 top-4 text-gray-400">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M16 13H8M16 17H8M10 9H8"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {errors.description && (
                                    <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                                )}
                            </div>

                            {/* Requirements */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                    Yêu cầu ứng viên *
                                </label>
                                <div className="relative">
                                    <textarea
                                        name="requirements"
                                        value={formData.requirements}
                                        onChange={handleChange}
                                        rows={6}
                                        placeholder="Kỹ năng, trình độ học vấn, chứng chỉ, kinh nghiệm yêu cầu..."
                                        className={`w-full px-4 py-4 bg-white border-2 rounded-2xl text-gray-800 placeholder-gray-400 resize-none transition-all duration-200 focus:outline-none focus:ring-4 ${
                                            errors.requirements
                                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                                                : "border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20"
                                        }`}
                                    />
                                    <div className="absolute right-4 top-4 text-gray-400">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {errors.requirements && (
                                    <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                        <div className="text-sm text-gray-500">
                            <span className="font-medium">Lưu ý:</span> Tất cả thông tin đánh dấu (*) là bắt buộc
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-2xl hover:bg-gray-200 transition-all duration-200 hover:scale-105"
                            >
                                Hủy bỏ
                            </button>
                            <button
                                type="submit"
                                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-3"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="group-hover:rotate-12 transition-transform duration-300"
                                >
                                    <path
                                        d="M5 12H19M12 5L19 12L12 19"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                TẠO TIN TUYỂN DỤNG
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateJobForm;
