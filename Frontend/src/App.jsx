import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import JobDetailPage from "./pages/JobDetailPage";
import ProfilePage from "./pages/ProfilePage";
import HRDashboard from "./pages/HRDashboard";
import HRMainDashboard from "./pages/HRMainDashboard";
import HRInterviewManagement from "./pages/HRInterviewManagement";
import HRCandidateManagement from "./pages/HRCandidateManagement";
import HRTestManagement from "./pages/HRTestManagement";
import HRAccountPage from "./pages/HRAccountPage";
import "./index.css";

function App() {
    return (
        <Router>
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
        </Router>
    );
}

export default App;
