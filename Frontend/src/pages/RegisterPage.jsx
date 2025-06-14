import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RegisterPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Basic Info
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",

        // Step 2: Profile Info
        dateOfBirth: "",
        gender: "",
        address: "",
        city: "",

        // Step 3: Professional Info
        experience: "",
        skills: [],
        education: "",
        currentJob: "",

        // Terms
        agreeTerms: false,
        agreeNewsletter: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSkillToggle = (skill) => {
        setFormData((prev) => ({
            ...prev,
            skills: prev.skills.includes(skill) ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
        }));
    };

    const validateStep = (step) => {
        switch (step) {
            case 1:
                return (
                    formData.fullName &&
                    formData.email &&
                    formData.phone &&
                    formData.password &&
                    formData.confirmPassword &&
                    formData.password === formData.confirmPassword
                );
            case 2:
                return formData.dateOfBirth && formData.gender && formData.address && formData.city;
            case 3:
                return formData.experience && formData.education && formData.agreeTerms;
            default:
                return false;
        }
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep((prev) => Math.min(prev + 1, 3));
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep(3)) return;

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            console.log("Registration data:", formData);
            alert("Đăng ký thành công! Vui lòng kiểm tra email để xác thực tài khoản.");
            setIsLoading(false);
            navigate("/login");
        }, 2000);
    };

    const skillOptions = [
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "Java",
        "PHP",
        "Marketing",
        "Design",
        "Sales",
        "Management",
        "Finance",
        "HR",
    ];

    const StepIndicator = () => (
        <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((step) => (
                <React.Fragment key={step}>
                    <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                            currentStep >= step
                                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30"
                                : "bg-gray-200 text-gray-500"
                        }`}
                    >
                        {currentStep > step ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M20 6L9 17L4 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ) : (
                            step
                        )}
                    </div>
                    {step < 3 && (
                        <div
                            className={`w-16 h-1 mx-2 rounded-full transition-all duration-300 ${
                                currentStep > step ? "bg-gradient-to-r from-emerald-500 to-teal-600" : "bg-gray-200"
                            }`}
                        ></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );

    const renderStep1 = () => (
        <div className="space-y-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Thông tin cơ bản</h2>
                <p className="text-gray-600">Vui lòng điền thông tin cá nhân của bạn</p>
            </div>

            {/* Full Name */}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Họ và tên *</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                            <path
                                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Nhập họ và tên đầy đủ"
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    />
                </div>
            </div>

            {/* Email */}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                            <path
                                d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Nhập địa chỉ email"
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    />
                </div>
            </div>

            {/* Phone */}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Số điện thoại *</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                            <path
                                d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.16 -0.52 5.16 0.08C5.16 2.08 5.44 4.04 6 5.92C6.12 6.32 6 6.76 5.72 7.04L4.12 8.64C5.32 11.24 7.76 13.68 10.36 14.88L11.96 13.28C12.24 13 12.68 12.88 13.08 13C14.96 13.56 16.92 13.84 18.92 13.84C19.52 13.84 20 14.32 20 14.92V17.92C20 18.52 19.52 19 18.92 19Z"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Nhập số điện thoại"
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    />
                </div>
            </div>

            {/* Password */}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Mật khẩu *</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                            <rect
                                x="3"
                                y="11"
                                width="18"
                                height="11"
                                rx="2"
                                ry="2"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <circle cx="12" cy="16" r="1" stroke="currentColor" strokeWidth="2" />
                            <path
                                d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Nhập mật khẩu"
                        required
                        className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-emerald-600 transition-colors duration-200"
                    >
                        {showPassword ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 4.028 7.66607 6.17 6.17M9.9 4.24C10.5883 4.0789 11.2931 3.99836 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1749 15.0074 10.8016 14.8565C10.4283 14.7056 10.0887 14.481 9.80385 14.1962C9.51900 13.9113 9.29439 13.5717 9.14351 13.1984C8.99262 12.8251 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4858 9.58525 10.1546 9.88 9.88"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M1 1L23 23"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Confirm Password */}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Xác nhận mật khẩu *</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                            <rect
                                x="3"
                                y="11"
                                width="18"
                                height="11"
                                rx="2"
                                ry="2"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <circle cx="12" cy="16" r="1" stroke="currentColor" strokeWidth="2" />
                            <path
                                d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Nhập lại mật khẩu"
                        required
                        className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-emerald-600 transition-colors duration-200"
                    >
                        {showConfirmPassword ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 4.028 7.66607 6.17 6.17M9.9 4.24C10.5883 4.0789 11.2931 3.99836 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1749 15.0074 10.8016 14.8565C10.4283 14.7056 10.0887 14.481 9.80385 14.1962C9.51900 13.9113 9.29439 13.5717 9.14351 13.1984C8.99262 12.8251 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4858 9.58525 10.1546 9.88 9.88"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M1 1L23 23"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        )}
                    </button>
                </div>
                {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="text-red-500 text-sm mt-2">Mật khẩu không khớp</p>
                )}
            </div>
        </div>
    );

    const renderStep2 = () => (
        <div className="space-y-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Thông tin cá nhân</h2>
                <p className="text-gray-600">Hoàn thiện hồ sơ cá nhân của bạn</p>
            </div>

            {/* Date of Birth */}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Ngày sinh *</label>
                <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                />
            </div>

            {/* Gender */}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Giới tính *</label>
                <div className="grid grid-cols-3 gap-3">
                    {["Nam", "Nữ", "Khác"].map((gender) => (
                        <label
                            key={gender}
                            className="flex items-center space-x-3 cursor-pointer p-4 border border-gray-200 rounded-2xl hover:bg-emerald-50/50 transition-all duration-200"
                        >
                            <input
                                type="radio"
                                name="gender"
                                value={gender}
                                checked={formData.gender === gender}
                                onChange={handleInputChange}
                                className="sr-only"
                            />
                            <div
                                className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                                    formData.gender === gender
                                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 border-emerald-500"
                                        : "bg-white border-gray-300"
                                }`}
                            >
                                {formData.gender === gender && (
                                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                                )}
                            </div>
                            <span className="font-medium">{gender}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Address */}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Địa chỉ *</label>
                <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Nhập địa chỉ chi tiết"
                    required
                    rows="3"
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white resize-none"
                />
            </div>

            {/* City */}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Thành phố *</label>
                <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                >
                    <option value="">Chọn thành phố</option>
                    <option value="Ho Chi Minh">Thành phố Hồ Chí Minh</option>
                    <option value="Ha Noi">Hà Nội</option>
                    <option value="Da Nang">Đà Nẵng</option>
                    <option value="Can Tho">Cần Thơ</option>
                    <option value="Hai Phong">Hải Phòng</option>
                    <option value="Other">Khác</option>
                </select>
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div className="space-y-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Thông tin nghề nghiệp</h2>
                <p className="text-gray-600">Chia sẻ kinh nghiệm và kỹ năng của bạn</p>
            </div>

            {/* Experience */}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Kinh nghiệm làm việc *</label>
                <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                >
                    <option value="">Chọn kinh nghiệm</option>
                    <option value="Fresher">Fresher (0-1 năm)</option>
                    <option value="Junior">Junior (1-3 năm)</option>
                    <option value="Middle">Middle (3-5 năm)</option>
                    <option value="Senior">Senior (5+ năm)</option>
                </select>
            </div>

            {/* Skills */}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Kỹ năng</label>
                <div className="grid grid-cols-2 gap-3">
                    {skillOptions.map((skill) => (
                        <label
                            key={skill}
                            className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-2xl hover:bg-emerald-50/50 transition-all duration-200"
                        >
                            <input
                                type="checkbox"
                                checked={formData.skills.includes(skill)}
                                onChange={() => handleSkillToggle(skill)}
                                className="sr-only"
                            />
                            <div
                                className={`w-5 h-5 rounded border-2 transition-all duration-200 ${
                                    formData.skills.includes(skill)
                                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 border-emerald-500"
                                        : "bg-white border-gray-300"
                                }`}
                            >
                                {formData.skills.includes(skill) && (
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="text-white m-0.5"
                                    >
                                        <path
                                            d="M20 6L9 17L4 12"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </div>
                            <span className="font-medium text-sm">{skill}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Education */}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Trình độ học vấn *</label>
                <select
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                >
                    <option value="">Chọn trình độ học vấn</option>
                    <option value="High School">Trung học phổ thông</option>
                    <option value="College">Cao đẳng</option>
                    <option value="Bachelor">Đại học</option>
                    <option value="Master">Thạc sĩ</option>
                    <option value="PhD">Tiến sĩ</option>
                </select>
            </div>

            {/* Current Job */}
            <div>
                <label className="block text-gray-700 font-semibold mb-2">Công việc hiện tại</label>
                <input
                    type="text"
                    name="currentJob"
                    value={formData.currentJob}
                    onChange={handleInputChange}
                    placeholder="Nhập vị trí công việc hiện tại (nếu có)"
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                />
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        className="sr-only"
                    />
                    <div
                        className={`w-5 h-5 rounded border-2 transition-all duration-200 mt-0.5 ${
                            formData.agreeTerms
                                ? "bg-gradient-to-r from-emerald-500 to-teal-600 border-emerald-500"
                                : "bg-white border-gray-300"
                        }`}
                    >
                        {formData.agreeTerms && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white m-0.5">
                                <path
                                    d="M20 6L9 17L4 12"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </div>
                    <span className="text-gray-600 font-medium">
                        Tôi đồng ý với{" "}
                        <Link to="/terms" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                            Điều khoản sử dụng
                        </Link>{" "}
                        và{" "}
                        <Link to="/privacy" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                            Chính sách bảo mật
                        </Link>
                    </span>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                        type="checkbox"
                        name="agreeNewsletter"
                        checked={formData.agreeNewsletter}
                        onChange={handleInputChange}
                        className="sr-only"
                    />
                    <div
                        className={`w-5 h-5 rounded border-2 transition-all duration-200 mt-0.5 ${
                            formData.agreeNewsletter
                                ? "bg-gradient-to-r from-emerald-500 to-teal-600 border-emerald-500"
                                : "bg-white border-gray-300"
                        }`}
                    >
                        {formData.agreeNewsletter && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white m-0.5">
                                <path
                                    d="M20 6L9 17L4 12"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </div>
                    <span className="text-gray-600 font-medium">
                        Tôi muốn nhận thông tin về cơ hội việc làm và tin tức từ TalentHub
                    </span>
                </label>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <Header />

            {/* Hero Background */}
            <div className="relative min-h-screen flex items-center justify-center py-20">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-indigo-600/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                <div className="relative z-10 w-full max-w-2xl mx-auto px-6">
                    {/* Register Card */}
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 border border-emerald-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                                        <path
                                            d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                        <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                                        <line x1="20" y1="8" x2="20" y2="14" stroke="currentColor" strokeWidth="2" />
                                        <line x1="23" y1="11" x2="17" y2="11" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text mb-2">
                                Đăng Ký Tài Khoản
                            </h1>
                            <p className="text-gray-600">Tham gia TalentHub để khám phá cơ hội nghề nghiệp</p>
                        </div>

                        {/* Step Indicator */}
                        <StepIndicator />

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            {currentStep === 1 && renderStep1()}
                            {currentStep === 2 && renderStep2()}
                            {currentStep === 3 && renderStep3()}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8">
                                {currentStep > 1 && (
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M15 18L9 12L15 6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Quay lại
                                    </button>
                                )}

                                {currentStep < 3 ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        disabled={!validateStep(currentStep)}
                                        className="ml-auto bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                    >
                                        Tiếp tục
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M9 18L15 12L9 6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={isLoading || !validateStep(3)}
                                        className="ml-auto bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Đang đăng ký...
                                            </>
                                        ) : (
                                            <>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M20 6L9 17L4 12"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                Hoàn thành đăng ký
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>
                        </form>

                        {/* Login Link */}
                        <div className="mt-8 text-center">
                            <p className="text-gray-600">
                                Đã có tài khoản?{" "}
                                <Link
                                    to="/login"
                                    className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200"
                                >
                                    Đăng nhập ngay
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default RegisterPage;
