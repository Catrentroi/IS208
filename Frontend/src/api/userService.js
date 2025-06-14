import api from './config';

// User service functions
const userService = {
  // Get user profile
  getProfile: async () => {
    const response = await api.get('/users/me');
    return response.data;
  },
  
  // Update user profile
  updateProfile: async (userData) => {
    const response = await api.put('/users/me', userData);
    
    // Update user in localStorage if successful
    if (response.data.user) {
      const currentUser = JSON.parse(localStorage.getItem('user'));
      localStorage.setItem('user', JSON.stringify({
        ...currentUser,
        ...response.data.user
      }));
    }
    
    return response.data;
  },
  
  // Get all users (admin only)
  getAllUsers: async () => {
    const response = await api.get('/users');
    return response.data;
  },
  
  // Get user by ID (admin only)
  getUserById: async (userId) => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  },
  
  // Update user by ID (admin only)
  updateUser: async (userId, userData) => {
    const response = await api.put(`/users/${userId}`, userData);
    return response.data;
  },
  
  // Delete user by ID (admin only)
  deleteUser: async (userId) => {
    const response = await api.delete(`/users/${userId}`);
    return response.data;
  }
};

export default userService;
