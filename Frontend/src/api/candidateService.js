import api from './config';

// Candidate service functions
const candidateService = {
  // Get all candidates (recruiter/admin only)
  getAllCandidates: async (filters = {}) => {
    const response = await api.get('/candidates', { params: filters });
    return response.data;
  },
  
  // Get candidate by ID
  getCandidateById: async (candidateId) => {
    const response = await api.get(`/candidates/${candidateId}`);
    return response.data;
  },
  
  // Get candidate profile (for current user)
  getMyProfile: async () => {
    const response = await api.get('/candidates/me');
    return response.data;
  },
  
  // Update candidate profile (for current user)
  updateMyProfile: async (candidateData) => {
    const response = await api.put('/candidates/me', candidateData);
    return response.data;
  },
  
  // Upload resume (for current user)
  uploadResume: async (resumeFile) => {
    const formData = new FormData();
    formData.append('resume', resumeFile);
    
    const response = await api.post('/candidates/resume', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    return response.data;
  }
};

export default candidateService;
