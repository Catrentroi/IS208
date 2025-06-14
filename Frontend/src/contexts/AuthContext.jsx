import React, { createContext, useState, useEffect, useContext } from 'react';
import { authService } from '../api';

// Create context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const checkLoginStatus = () => {
      const currentUser = authService.getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
      }
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  // Login user
  const login = async (email, password) => {
    const data = await authService.login(email, password);
    setUser(data.user);
    return data;
  };

  // Logout user
  const logout = () => {
    authService.logout();
    setUser(null);
  };

  // Register user
  const register = async (userData) => {
    const data = await authService.register(userData);
    return data;
  };

  // Update user profile
  const updateUserProfile = (updatedUser) => {
    setUser({ ...user, ...updatedUser });
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    register,
    updateUserProfile,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
