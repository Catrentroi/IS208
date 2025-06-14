import React from "react";

const DashboardStats = () => {
    const stats = [
        {
            title: "Tổng số tin tuyển dụng",
            value: "24",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14 2V8H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16 13H8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16 17H8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10 9H9H8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            gradient: "from-blue-500 to-indigo-600",
            bgGradient: "from-blue-50 to-indigo-50",
            shadowColor: "shadow-blue-500/20",
        },
        {
            title: "Ứng viên mới",
            value: "156",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            gradient: "from-emerald-500 to-teal-600",
            bgGradient: "from-emerald-50 to-teal-50",
            shadowColor: "shadow-emerald-500/20",
        },
        {
            title: "Phỏng vấn hôm nay",
            value: "8",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16 2V6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8 2V6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3 10H21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            gradient: "from-orange-500 to-amber-600",
            bgGradient: "from-orange-50 to-amber-50",
            shadowColor: "shadow-orange-500/20",
        },
        {
            title: "Đã tuyển dụng",
            value: "42",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4905 2.02168 11.3363C2.16356 9.18211 2.99721 7.13314 4.39828 5.49C5.79935 3.84686 7.69279 2.69972 9.79619 2.21793C11.8996 1.73614 14.1003 1.94408 16.07 2.82001"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M22 4L12 14.01L9 11.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            gradient: "from-purple-500 to-pink-600",
            bgGradient: "from-purple-50 to-pink-50",
            shadowColor: "shadow-purple-500/20",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`group relative bg-gradient-to-br ${stat.bgGradient} rounded-3xl p-8 shadow-lg ${stat.shadowColor} hover:shadow-xl hover:shadow-gray-300/30 transition-all duration-300 hover:transform hover:scale-105 border border-white/50`}
                >
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full -mr-10 -mt-10"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-white/10 to-transparent rounded-full -ml-6 -mb-6"></div>

                    <div className="relative flex items-start justify-between">
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                                {stat.title}
                            </p>
                            <div className="flex items-end gap-2 mb-2">
                                <p className="text-4xl font-bold text-gray-800 leading-none group-hover:scale-110 transition-transform duration-300">
                                    {stat.value}
                                </p>
                                <div className="w-6 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mb-2"></div>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <div className="flex items-center gap-1 text-green-600">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 2L8 4L6 6L4 4L6 2Z" fill="currentColor" />
                                        <path
                                            d="M6 6V10"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <span className="font-medium">+12%</span>
                                </div>
                                <span className="text-gray-500">tháng này</span>
                            </div>
                        </div>

                        <div
                            className={`relative p-4 bg-gradient-to-br ${stat.gradient} rounded-2xl text-white shadow-lg ${stat.shadowColor} group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                        >
                            {stat.icon}
                            {/* Icon glow effect */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                            ></div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6 relative">
                        <div className="w-full h-2 bg-gray-200/50 rounded-full overflow-hidden">
                            <div
                                className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: `${Math.min(parseInt(stat.value), 100)}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardStats;
