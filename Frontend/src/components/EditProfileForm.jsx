import React, { useState } from "react";

const EditProfileForm = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        username: "pu0406@",
        fullName: "Võ Thị Phương Uyên",
        birthDate: "04/06/2004",
        gender: "Nữ",
        email: "phuonguyen6372@gmail.com",
        phone: "0382868383",
        address: "KTX Khu A",
        ...user,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

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

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Họ và tên là bắt buộc";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email là bắt buộc";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email không hợp lệ";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Số điện thoại là bắt buộc";
        } else if (!/^[0-9]{10,11}$/.test(formData.phone)) {
            newErrors.phone = "Số điện thoại không hợp lệ";
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
        } catch (error) {
            console.error("Error saving profile:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const infoFields = [
        {
            name: "username",
            label: "Tên đăng nhập:",
            type: "text",
            disabled: true,
        },
        {
            name: "fullName",
            label: "Họ và tên:",
            type: "text",
        },
        {
            name: "birthDate",
            label: "Ngày sinh:",
            type: "date",
        },
        {
            name: "gender",
            label: "Giới tính:",
            type: "select",
            options: ["Nam", "Nữ", "Khác"],
        },
        {
            name: "email",
            label: "Email:",
            type: "email",
        },
        {
            name: "phone",
            label: "Số điện thoại:",
            type: "tel",
        },
        {
            name: "address",
            label: "Địa chỉ:",
            type: "text",
        },
    ];

    return (
        <div className="bg-white border border-gray-300 rounded-3xl p-8 w-full">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-green-800 text-3xl font-black">THÔNG TIN CÁ NHÂN</h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-x-16 gap-y-6 mb-8">
                    {infoFields.map((field) => (
                        <div key={field.name} className="flex flex-col">
                            <label className="text-black text-2xl font-bold mb-2">{field.label}</label>

                            {field.type === "select" ? (
                                <select
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className={`text-black text-2xl font-normal bg-gray-100 rounded-xl p-3 border ${
                                        errors[field.name] ? "border-red-500" : "border-gray-300"
                                    } focus:outline-none focus:border-green-500`}
                                >
                                    {field.options.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    disabled={field.disabled}
                                    className={`text-black text-2xl font-normal bg-gray-100 rounded-xl p-3 border ${
                                        errors[field.name] ? "border-red-500" : "border-gray-300"
                                    } ${
                                        field.disabled ? "bg-gray-200 cursor-not-allowed" : ""
                                    } focus:outline-none focus:border-green-500`}
                                />
                            )}

                            {errors[field.name] && (
                                <span className="text-red-500 text-sm mt-1">{errors[field.name]}</span>
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
        </div>
    );
};

export default EditProfileForm;
