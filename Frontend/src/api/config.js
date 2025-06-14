import axios from 'axios';

// Create an axios instance with a base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  // Add timeout
  timeout: 10000
});

// Add request interceptor for debugging
api.interceptors.request.use(
  config => {
    console.log('API Request:', {
      url: config.url, 
      method: config.method,
      params: config.params,
      data: config.data,
      headers: config.headers
    });
    
    // Add token to Authorization header if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  response => {
    console.log('API Response:', {
      url: response.config.url,
      status: response.status,
      data: response.data
    });
    return response;
  },
  error => {
    console.error('API Response Error:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    
    // Handle 401 Unauthorized errors (token expired)
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

export default api;
