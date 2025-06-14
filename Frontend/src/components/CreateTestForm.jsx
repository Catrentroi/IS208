import React, { useState } from "react";

const CreateTestForm = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        testName: "",
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

        if (!formData.testName.trim()) {
            newErrors.testName = "Vui lòng nhập tên bài kiểm tra";
        }

        if (!formData.description.trim()) {
            newErrors.description = "Vui lòng nhập mô tả bài kiểm tra";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            onSubmit(formData);
            setFormData({ testName: "", description: "" });
            setErrors({});
            onClose();
        }
    };

    const handleClose = () => {
        setFormData({ testName: "", description: "" });
        setErrors({});
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-[15px] w-[600px] max-w-[90vw] max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-lg font-bold text-[#27553F]">Tạo bài kiểm tra mới</h2>
                    <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors">
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

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6">
                    {/* Test Name Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-[#27553F] mb-2">Tên bài kiểm tra</label>
                        <input
                            type="text"
                            name="testName"
                            value={formData.testName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-[15px] text-sm focus:outline-none focus:ring-2 focus:ring-[#85A947] ${
                                errors.testName ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="Nhập tên bài kiểm tra..."
                        />
                        {errors.testName && <p className="text-red-500 text-xs mt-1">{errors.testName}</p>}
                    </div>

                    {/* Description Textarea */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-[#27553F] mb-2">MÔ TẢ BÀI KIỂM TRA</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows={8}
                            className={`w-full px-4 py-3 border rounded-[15px] text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#85A947] ${
                                errors.description ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="Nhập mô tả chi tiết về bài kiểm tra..."
                        />
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-[#27553F] text-white text-sm font-bold leading-[1.21] px-8 py-3 rounded-[15px] hover:bg-[#1e3f2f] transition-colors"
                        >
                            HOÀN TẤT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTestForm;
