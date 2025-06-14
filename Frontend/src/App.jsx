import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import JobDetailPage from "./pages/JobDetailPage";
import ProfilePage from "./pages/ProfilePage";
import "./index.css";

// Lazy load components for better performance
const HRMainDashboard = React.lazy(() => import("./pages/HRMainDashboard"));
const HRDashboard = React.lazy(() => import("./pages/HRDashboard"));
const HRInterviewManagement = React.lazy(() => import("./pages/HRInterviewManagement"));
const HRCandidateManagement = React.lazy(() => import("./pages/HRCandidateManagement"));
const HRTestManagement = React.lazy(() => import("./pages/HRTestManagement"));
const HRAccountPage = React.lazy(() => import("./pages/HRAccountPage"));

// Modern loading component
const LoadingSpinner = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
        <div className="text-center">
            <div className="relative">
                <div className="w-20 h-20 border-4 border-gray-200 rounded-full animate-spin"></div>
                <div className="w-20 h-20 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
            </div>
            <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">TalentHub</h3>
                <p className="text-gray-600">Đang tải...</p>
            </div>
        </div>
    </div>
);

function App() {
    return (
        <Router>
            <div className="App">
                <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/jobs" element={<SearchPage />} />
                        <Route path="/job/:id" element={<JobDetailPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/profile/*" element={<ProfilePage />} />
                        <Route path="/hr/dashboard" element={<HRMainDashboard />} />
                        <Route path="/hr/job-management" element={<HRDashboard />} />
                        <Route path="/hr/interview-management" element={<HRInterviewManagement />} />
                        <Route path="/hr/candidate-management" element={<HRCandidateManagement />} />
                        <Route path="/hr/test-management" element={<HRTestManagement />} />
                        <Route path="/hr/account" element={<HRAccountPage />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
