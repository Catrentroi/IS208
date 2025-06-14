import api from './config';

// Auth service functions
const authService = {
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
  }
};

export default authService;
