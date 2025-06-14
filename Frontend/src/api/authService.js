import api from './config';

// Auth service functions
const authService = {
  // Store api reference for direct access
  api,
  // Login user
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    
    // Save token and user to localStorage if successful
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    
    return response.data;
  },
  
  // Register user
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  
  // Log out user
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  
  // Get current user
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },
  
  // Check if user is logged in
  isLoggedIn: () => {
    return !!localStorage.getItem('token');
  },
  
  // Get current auth token
  getToken: () => {
    return localStorage.getItem('token');
  },

  // Change password
  changePassword: async (currentPassword, newPassword) => {
    const response = await api.put('/auth/password', { 
      currentPassword, 
      newPassword 
    });
    return response.data;
  },
  
  // Request password reset
  requestPasswordReset: async (email) => {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
  },
  
  // Reset password with token
  resetPassword: async (token, newPassword) => {
    const response = await api.post('/auth/reset-password', { 
      token, 
      newPassword 
    });
    return response.data;
  },
  
  // Verify email with token
  verifyEmail: async (token) => {
    const response = await api.get(`/auth/verify-email/${token}`);
    return response.data;
  }
};

export default authService;
