import React, { useState } from "react";

const FilterSection = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        experience: "all",
        level: "all",
        workType: "all",
        salary: "all",
        salaryRange: { from: "", to: "" },
    });

    const experienceOptions = [
        { value: "all", label: "Tất cả" },
        { value: "no_requirement", label: "Không yêu cầu" },
        { value: "under_1", label: "Dưới 1 năm" },
        { value: "1_year", label: "1 năm" },
        { value: "2_year", label: "2 năm" },
        { value: "3_year", label: "3 năm" },
        { value: "4_year", label: "4 năm" },
        { value: "5_year", label: "5 năm" },
        { value: "over_5", label: "Trên 5 năm" },
    ];

    const levelOptions = [
        { value: "all", label: "Tất cả" },
        { value: "employee", label: "Nhân viên" },
        { value: "team_lead", label: "Trưởng nhóm" },
        { value: "supervisor", label: "Trưởng/Phó phòng" },
        { value: "manager", label: "Quản lý" },
        { value: "director", label: "Giám đốc" },
        { value: "deputy_director", label: "Phó giám đốc" },
        { value: "branch_manager", label: "Trưởng chi nhánh" },
        { value: "intern", label: "Thực tập sinh" },
    ];

    const workTypeOptions = [
        { value: "all", label: "Tất cả" },
        { value: "full_time", label: "Toàn thời gian" },
        { value: "part_time", label: "Bán thời gian" },
        { value: "internship", label: "Thực tập" },
        { value: "other", label: "Khác" },
    ];

    const salaryOptions = [
        { value: "all", label: "Tất cả" },
        { value: "under_10", label: "Dưới 10 triệu" },
        { value: "10_15", label: "10 - 15 triệu" },
        { value: "15_20", label: "15 - 20 triệu" },
        { value: "20_25", label: "20 - 25 triệu" },
        { value: "25_30", label: "25 - 30 triệu" },
        { value: "30_50", label: "30 - 50 triệu" },
        { value: "over_50", label: "Trên 50 triệu" },
        { value: "negotiable", label: "Thỏa thuận" },
    ];

    const handleFilterChange = (type, value) => {
        const newFilters = { ...filters, [type]: value };
        setFilters(newFilters);
        onFilterChange?.(newFilters);
    };

    const handleSalaryRangeChange = (field, value) => {
        const newSalaryRange = { ...filters.salaryRange, [field]: value };
        const newFilters = { ...filters, salaryRange: newSalaryRange };
        setFilters(newFilters);
        onFilterChange?.(newFilters);
    };

    const handleApplyFilters = () => {
        onFilterChange?.(filters);
    };

    const handleClearFilters = () => {
        const clearedFilters = {
            experience: "all",
            level: "all",
            workType: "all",
            salary: "all",
            salaryRange: { from: "", to: "" },
        };
        setFilters(clearedFilters);
        onFilterChange?.(clearedFilters);
    };

    const FilterGroup = ({ title, options, selectedValue, onChange }) => (
        <div className="mb-8">
            <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
                {title}
            </h3>
            <div className="space-y-2">
                {options.map((option) => (
                    <label
                        key={option.value}
                        className="flex items-center space-x-3 cursor-pointer group hover:bg-emerald-50/50 rounded-xl p-2 transition-all duration-200"
                    >
                        <div className="relative">
                            <input
                                type="radio"
                                name={title}
                                value={option.value}
                                checked={selectedValue === option.value}
                                onChange={(e) => onChange(e.target.value)}
                                className="sr-only"
                            />
                            <div
                                className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                                    selectedValue === option.value
                                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 border-emerald-500 shadow-md shadow-emerald-500/25"
                                        : "bg-white border-gray-300 group-hover:border-emerald-300"
                                }`}
                            >
                                {selectedValue === option.value && (
                                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                                )}
                            </div>
                        </div>
                        <span
                            className={`font-medium transition-colors duration-200 ${
                                selectedValue === option.value
                                    ? "text-emerald-700"
                                    : "text-gray-700 group-hover:text-emerald-600"
                            }`}
                        >
                            {option.label}
                        </span>
                    </label>
                ))}
            </div>
            <div className="mt-6 border-t border-gray-100"></div>
        </div>
    );

    return (
        <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 border border-emerald-200 rounded-2xl flex items-center justify-center mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
                        <path
                            d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4C21 4.55228 20.5523 5 20 5H4C3.44772 5 3 4.55228 3 4Z"
                            fill="currentColor"
                        />
                        <path
                            d="M3 8C3 7.44772 3.44772 7 4 7H12C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9H4C3.44772 9 3 8.55228 3 8Z"
                            fill="currentColor"
                        />
                        <path
                            d="M3 12C3 11.4477 3.44772 11 4 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H4C3.44772 13 3 12.5523 3 12Z"
                            fill="currentColor"
                        />
                        <path
                            d="M3 16C3 15.4477 3.44772 15 4 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16Z"
                            fill="currentColor"
                        />
                        <path
                            d="M3 20C3 19.4477 3.44772 19 4 19H8C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21H4C3.44772 21 3 20.5523 3 20Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text">
                    Lọc nâng cao
                </h2>
            </div>

            <FilterGroup
                title="Kinh nghiệm"
                options={experienceOptions}
                selectedValue={filters.experience}
                onChange={(value) => handleFilterChange("experience", value)}
            />

            <FilterGroup
                title="Cấp bậc"
                options={levelOptions}
                selectedValue={filters.level}
                onChange={(value) => handleFilterChange("level", value)}
            />

            <FilterGroup
                title="Hình thức làm việc"
                options={workTypeOptions}
                selectedValue={filters.workType}
                onChange={(value) => handleFilterChange("workType", value)}
            />

            <FilterGroup
                title="Mức lương"
                options={salaryOptions}
                selectedValue={filters.salary}
                onChange={(value) => handleFilterChange("salary", value)}
            />

            {/* Custom Salary Range */}
            <div className="mb-8">
                <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
                    Khoảng lương tùy chỉnh
                </h3>
                <div className="flex space-x-3 mb-4">
                    <div className="flex-1">
                        <input
                            type="number"
                            placeholder="Từ"
                            value={filters.salaryRange.from}
                            onChange={(e) => handleSalaryRangeChange("from", e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-2xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                        />
                    </div>
                    <div className="flex items-center text-gray-400 font-medium">-</div>
                    <div className="flex-1">
                        <input
                            type="number"
                            placeholder="Đến"
                            value={filters.salaryRange.to}
                            onChange={(e) => handleSalaryRangeChange("to", e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-2xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-gray-50/50 hover:bg-white"
                        />
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-600 font-medium bg-gray-100 px-3 py-3 rounded-2xl">triệu</span>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-100"></div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
                <button
                    onClick={handleApplyFilters}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Áp dụng bộ lọc
                </button>
                <button
                    onClick={handleClearFilters}
                    className="w-full bg-white border-2 border-gray-200 text-gray-700 px-6 py-4 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M3 6H21M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M19 6V20C19 20.5523 18.4477 21 18 21H6C5.44772 21 5 20.5523 5 20V6H19Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Xóa tất cả
                </button>
            </div>
        </div>
    );
};

export default FilterSection;
