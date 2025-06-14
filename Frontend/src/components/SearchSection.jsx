import React, { useState } from "react";

const SearchSection = () => {
    const [searchData, setSearchData] = useState({
        jobTitle: "",
        company: "",
        location: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchData);
        // Implement search logic here
    };

    return (
        <div className="bg-white py-16 px-6">
            <div className="container mx-auto">
                {/* Search Form */}
                <form onSubmit={handleSearch} className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        {/* Job Title Input */}
                        <div className="flex-1">
                            <input
                                type="text"
                                name="jobTitle"
                                placeholder="Nhập tên việc làm..."
                                value={searchData.jobTitle}
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-800"
                            />
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-12 bg-green-800"></div>

                        {/* Company Input */}
                        <div className="flex-1">
                            <input
                                type="text"
                                name="company"
                                placeholder="Nhập tên công ty..."
                                value={searchData.company}
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-800"
                            />
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-12 bg-green-800"></div>

                        {/* Location Input */}
                        <div className="flex-1">
                            <input
                                type="text"
                                name="location"
                                placeholder="Địa điểm..."
                                value={searchData.location}
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-800"
                            />
                        </div>

                        {/* Search Button */}
                        <button
                            type="submit"
                            className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-900 transition-colors"
                        >
                            Tìm kiếm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchSection;
