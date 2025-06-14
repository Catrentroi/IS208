import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { candidateService } from "../api";

const JobApplicationModal = ({ isOpen, onClose, job, onSubmit }) => {
    // Safe auth hook usage with fallback values
    const auth = useAuth();
    const user = auth?.user || null;
    const isAuthenticated = auth?.isAuthenticated || false;
    
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        coverLetter: "",
        resume: null,
    });
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
                        fullName: candidateData?.name || user?.name || "",
                        email: user?.email || "",
                        phone: candidateData?.phone || "",
                        coverLetter: ""
                    });
                    
                    // Check if candidate already has a resume uploaded
                    if (candidateData?.resume) {
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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prev) => ({
            ...prev,
            resume: file,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log("Application submitted:", formData);
            alert("Ứng tuyển thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.");
            setIsSubmitting(false);
            onClose();
            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                coverLetter: "",
                resume: null,
            });
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/95 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text">
                            Ứng tuyển vị trí
                        </h2>
                        <p className="text-gray-600 font-semibold mt-1">{job?.title || "Nhân Viên Marketing"}</p>
                        <p className="text-gray-500 text-sm">{job?.company || "CÔNG TY TNHH PLASMA"}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 bg-gray-100 hover:bg-red-50 border border-gray-200 hover:border-red-300 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-gray-400 group-hover:text-red-500 transition-colors duration-300"
                        >
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
                <form onSubmit={handleSubmit} className="space-y-6">
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

                    {/* Resume Upload */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">CV/Resume *</label>
                        <div className="relative">
                            <input
                                type="file"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                required
                                className="sr-only"
                                id="resume-upload"
                            />
                            <label
                                htmlFor="resume-upload"
                                className="w-full flex items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-emerald-500 hover:bg-emerald-50/50 transition-all duration-200 group"
                            >
                                <div className="text-center">
                                    <svg
                                        width="48"
                                        height="48"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="mx-auto mb-3 text-gray-400 group-hover:text-emerald-500 transition-colors duration-200"
                                    >
                                        <path
                                            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" />
                                        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" />
                                        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" />
                                        <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                    {formData.resume ? (
                                        <div>
                                            <p className="text-emerald-600 font-semibold">{formData.resume.name}</p>
                                            <p className="text-gray-500 text-sm">Nhấp để thay đổi file</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="text-gray-600 font-semibold">Tải lên CV/Resume</p>
                                            <p className="text-gray-500 text-sm">PDF, DOC, DOCX (tối đa 5MB)</p>
                                        </div>
                                    )}
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Cover Letter */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Thư xin việc</label>
                        <textarea
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleInputChange}
                            placeholder="Viết vài dòng về bản thân và lý do bạn phù hợp với vị trí này..."
                            rows="4"
                            className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white resize-none"
                        />
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-white border-2 border-gray-200 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105"
                        >
                            Hủy bỏ
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Đang gửi...
                                </>
                            ) : (
                                <>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M12 19L19 12L12 5M19 12H5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Gửi ứng tuyển
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApplicationModal;
