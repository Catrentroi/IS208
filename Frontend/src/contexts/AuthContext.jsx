import React, { createContext, useState, useEffect, useContext } from 'react';
import { authService } from '../api';

// Create context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const checkLoginStatus = () => {
      try {
        // Validate both token and user exist in localStorage
        const token = localStorage.getItem('token');
        const userStr = localStorage.getItem('user');
        
        // Only set user if we have both token and valid user data
        if (token && userStr) {
          try {
            const currentUser = JSON.parse(userStr);
            if (currentUser && currentUser.id) { // Make sure user object is valid
              setUser(currentUser);
            } else {
              // Invalid user object, clear auth data
              localStorage.removeItem('token');
              localStorage.removeItem('user');
            }
          } catch (e) {
            // Error parsing user JSON, clear auth data
            console.error("Error parsing user data:", e);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
          }
        } else {
          // If either token or user is missing, clear both
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
        }
      } catch (err) {
        console.error("Error checking login status:", err);
        // On any error, clear auth data
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
      } finally {
        setIsLoading(false);
        setInitialCheckDone(true);
      }
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
    isAuthenticated: !!user,
    initialCheckDone
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
    console.warn('useAuth was called outside of AuthProvider. Using fallback values.');
    // Return fallback values to avoid breaking the UI
    return {
      user: null,
      isLoading: false,
      login: () => {
        console.warn('AuthProvider not found during login attempt');
        return Promise.reject(new Error('AuthProvider not found'));
      },
      logout: () => console.warn('AuthProvider not found during logout attempt'),
      register: () => {
        console.warn('AuthProvider not found during registration attempt');
        return Promise.reject(new Error('AuthProvider not found'));
      },
      updateUserProfile: () => console.warn('AuthProvider not found during profile update attempt'),
      isAuthenticated: false
    };
  }
  return context;
};
