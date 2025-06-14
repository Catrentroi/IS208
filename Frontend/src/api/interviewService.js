import api from './config';

// Interview service functions
const interviewService = {
  // Get all interviews (admin/recruiter only)
  getAllInterviews: async (filters = {}) => {
    const response = await api.get('/interviews', { params: filters });
    return response.data;
  },
  
  // Get interview by ID
  getInterviewById: async (interviewId) => {
    const response = await api.get(`/interviews/${interviewId}`);
    return response.data;
  },
  
  // Get interviews for current user
  getMyInterviews: async () => {
    const response = await api.get('/interviews/me');
    return response.data;
  },
  
  // Schedule an interview (admin/recruiter only)
  scheduleInterview: async (interviewData) => {
    const response = await api.post('/interviews', interviewData);
    return response.data;
  },
  
  // Update an interview (admin/recruiter only)
  updateInterview: async (interviewId, interviewData) => {
    const response = await api.put(`/interviews/${interviewId}`, interviewData);
    return response.data;
  },
  
  // Delete an interview (admin/recruiter only)
  deleteInterview: async (interviewId) => {
    const response = await api.delete(`/interviews/${interviewId}`);
    return response.data;
  },
  
  // Accept/reject interview invitation (for candidate)
  respondToInterview: async (interviewId, status) => {
    const response = await api.put(`/interviews/${interviewId}/respond`, { status });
    return response.data;
  },
  
  // Add interview feedback (admin/recruiter only)
  addInterviewFeedback: async (interviewId, feedback) => {
    const response = await api.post(`/interviews/${interviewId}/feedback`, feedback);
    return response.data;
  }
};

export default interviewService;
