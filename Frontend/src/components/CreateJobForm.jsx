import React, { useState } from "react";

const CreateJobForm = ({ onClose, onSave }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
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

        if (!formData.title.trim()) {
            newErrors.title = "Tiêu đề tin tuyển dụng là bắt buộc";
        }

        if (!formData.description.trim()) {
            newErrors.description = "Thông tin mô tả là bắt buộc";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            onSave(formData);
            setFormData({ title: "", description: "" });
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-[15px] w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="bg-[#FBF7EB] px-[380px] py-2.5 rounded-t-[15px] flex justify-center">
                    <h2 className="text-xs font-bold leading-[1.21] text-black">TIÊU ĐỀ TIN TUYỂN DỤNG</h2>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="p-7">
                    {/* Title Input */}
                    <div className="mb-6">
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Nhập tiêu đề tin tuyển dụng..."
                            className={`w-full px-4 py-3 border-2 rounded-[15px] text-sm outline-none transition-colors ${
                                errors.title
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-[#27553F] focus:border-[#3E7B27]"
                            }`}
                        />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    {/* Description Textarea */}
                    <div className="mb-6">
                        <div className="border border-[#27553F] rounded-[15px] p-6 min-h-[382px]">
                            <label className="block text-xs font-bold leading-[1.21] text-[#B8B7B7] mb-4">
                                THÔNG TIN MÔ TẢ
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Nhập mô tả công việc, yêu cầu ứng viên, quyền lợi..."
                                className={`w-full h-[300px] resize-none outline-none text-sm ${
                                    errors.description ? "text-red-500" : "text-gray-700"
                                }`}
                            />
                            {errors.description && <p className="text-red-500 text-xs mt-2">{errors.description}</p>}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-[15px] hover:bg-gray-50 transition-colors"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            className="bg-[#27553F] text-white font-semibold text-xl leading-[1.08] px-6 py-3 rounded-[15px] hover:bg-[#1e3f2f] transition-colors"
                        >
                            HOÀN TẤT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateJobForm;
