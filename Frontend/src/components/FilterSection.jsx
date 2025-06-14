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
            <h3 className="text-black font-bold text-xl mb-4">{title}</h3>
            <div className="space-y-3">
                {options.map((option) => (
                    <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
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
                                className={`w-5 h-5 rounded-full border-2 border-gray-300 ${
                                    selectedValue === option.value ? "bg-green-800 border-green-800" : "bg-white"
                                }`}
                            >
                                {selectedValue === option.value && (
                                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                                )}
                            </div>
                        </div>
                        <span className="text-black font-bold text-lg">{option.label}</span>
                    </label>
                ))}
            </div>
            <div className="mt-4 border-t border-gray-300 pt-4">
                <span className="text-gray-400 text-lg">------------------------------------------</span>
            </div>
        </div>
    );

    return (
        <div className="bg-white p-6 border border-gray-200 rounded-lg">
            <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gray-300 rounded mr-3"></div>
                <h2 className="text-green-800 font-bold text-2xl">Lọc nâng cao</h2>
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
                <div className="flex space-x-4 mb-4">
                    <div className="flex-1">
                        <input
                            type="number"
                            placeholder="Từ"
                            value={filters.salaryRange.from}
                            onChange={(e) => handleSalaryRangeChange("from", e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-500 font-bold text-lg"
                        />
                    </div>
                    <div className="flex-1 flex items-center">
                        <input
                            type="number"
                            placeholder="Đến"
                            value={filters.salaryRange.to}
                            onChange={(e) => handleSalaryRangeChange("to", e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-500 font-bold text-lg mr-2"
                        />
                        <span className="text-gray-500 font-bold text-lg">triệu</span>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
                <button
                    onClick={handleApplyFilters}
                    className="bg-green-800 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors"
                >
                    Áp dụng
                </button>
                <button
                    onClick={handleClearFilters}
                    className="bg-green-800 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors"
                >
                    Xóa lọc
                </button>
            </div>
        </div>
    );
};

export default FilterSection;
