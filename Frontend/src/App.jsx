import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
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
import LoginPage from "./pages/LoginPage";
import ApiTester from "./components/ApiTester";
import "./index.css";

// Protected Route component
const ProtectedRoute = ({ children, requireAuth = true }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  
  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" />;
  } else if (!requireAuth && isAuthenticated) {
    return <Navigate to="/profile" />;
  }
  
  return children;
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/jobs" element={<SearchPage />} />
                    <Route path="/job/:id" element={<JobDetailPage />} />
                    <Route path="/login" element={
                        <ProtectedRoute requireAuth={false}>
                            <LoginPage />
                        </ProtectedRoute>
                    } />
                    <Route path="/profile" element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    } />
                    <Route path="/profile/*" element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    } />
                    <Route path="/hr/dashboard" element={
                        <ProtectedRoute>
                            <HRMainDashboard />
                        </ProtectedRoute>
                    } />
                    <Route path="/hr/job-management" element={
                        <ProtectedRoute>
                            <HRDashboard />
                        </ProtectedRoute>
                    } />
                    <Route path="/hr/interview-management" element={
                        <ProtectedRoute>
                            <HRInterviewManagement />
                        </ProtectedRoute>
                    } />
                    <Route path="/hr/candidate-management" element={
                        <ProtectedRoute>
                            <HRCandidateManagement />
                        </ProtectedRoute>
                    } />
                    <Route path="/hr/test-management" element={
                        <ProtectedRoute>
                            <HRTestManagement />
                        </ProtectedRoute>
                    } />
                    <Route path="/hr/account" element={
                        <ProtectedRoute>
                            <HRAccountPage />
                        </ProtectedRoute>
                    } />
                    <Route path="/api-test" element={<ApiTester />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
