import React, { useState } from "react";

const ChangePasswordForm = ({ onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false,
    });

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

    const togglePasswordVisibility = (field) => {
        setShowPasswords((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.currentPassword.trim()) {
            newErrors.currentPassword = "Mật khẩu cũ là bắt buộc";
        }

        if (!formData.newPassword.trim()) {
            newErrors.newPassword = "Mật khẩu mới là bắt buộc";
        } else if (formData.newPassword.length < 6) {
            newErrors.newPassword = "Mật khẩu mới phải có ít nhất 6 ký tự";
        }

        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = "Xác nhận mật khẩu là bắt buộc";
        } else if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
        }

        if (formData.currentPassword === formData.newPassword && formData.currentPassword) {
            newErrors.newPassword = "Mật khẩu mới phải khác mật khẩu cũ";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            await onSave?.(formData);
            // Reset form after successful save
            setFormData({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.error("Error changing password:", error);
            setErrors({ general: "Có lỗi xảy ra khi đổi mật khẩu" });
        } finally {
            setIsSubmitting(false);
        }
    };

    const passwordFields = [
        {
            name: "currentPassword",
            label: "Mật khẩu cũ:",
            placeholder: "Nhập mật khẩu hiện tại",
            showKey: "current",
        },
        {
            name: "newPassword",
            label: "Mật khẩu mới:",
            placeholder: "Nhập mật khẩu mới",
            showKey: "new",
        },
        {
            name: "confirmPassword",
            label: "Xác nhận mật khẩu mới:",
            placeholder: "Nhập lại mật khẩu mới",
            showKey: "confirm",
        },
    ];

    return (
        <div className="bg-white border border-gray-300 rounded-3xl p-8 w-full">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-green-800 text-3xl font-black">ĐỔI MẬT KHẨU</h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
                {errors.general && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        {errors.general}
                    </div>
                )}

                <div className="space-y-8 mb-8">
                    {passwordFields.map((field) => (
                        <div key={field.name} className="flex flex-col">
                            <label className="text-black text-2xl font-bold mb-4">{field.label}</label>

                            <div className="relative">
                                <input
                                    type={showPasswords[field.showKey] ? "text" : "password"}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    className={`w-full text-black text-xl font-normal bg-gray-200 rounded-xl p-4 border ${
                                        errors[field.name] ? "border-red-500" : "border-gray-300"
                                    } focus:outline-none focus:border-green-500 pr-12`}
                                />

                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility(field.showKey)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPasswords[field.showKey] ? "🙈" : "👁️"}
                                </button>
                            </div>

                            {errors[field.name] && (
                                <span className="text-red-500 text-sm mt-2">{errors[field.name]}</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-end">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-gray-400 text-white px-8 py-3 rounded-lg font-bold text-xl hover:bg-gray-500 transition-colors"
                    >
                        Hủy
                    </button>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-green-800 text-white px-8 py-3 rounded-lg font-bold text-xl hover:bg-green-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Đang lưu..." : "Lưu"}
                    </button>
                </div>
            </form>

            {/* Security Tips */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="text-blue-800 font-bold mb-2">💡 Lời khuyên bảo mật:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Sử dụng mật khẩu dài ít nhất 8 ký tự</li>
                    <li>• Kết hợp chữ cái, số và ký tự đặc biệt</li>
                    <li>• Không sử dụng thông tin cá nhân dễ đoán</li>
                    <li>• Không chia sẻ mật khẩu với người khác</li>
                </ul>
            </div>
        </div>
    );
};

export default ChangePasswordForm;
