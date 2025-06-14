import api from './config';

// Application service functions
const applicationService = {
  // Get all applications (admin/recruiter only)
  getAllApplications: async (filters = {}) => {
    const response = await api.get('/applications', { params: filters });
    return response.data;
  },
  
  // Get application by ID
  getApplicationById: async (applicationId) => {
    const response = await api.get(`/applications/${applicationId}`);
    return response.data;
  },
  
  // Get applications for current user
  getMyApplications: async () => {
    const response = await api.get('/applications/me');
    return response.data;
  },
  
  // Create a new application
  createApplication: async (jobId, applicationData) => {
    const response = await api.post('/applications', {
      ...applicationData,
      job: jobId
    });
    return response.data;
  },
  
  // Update application status (admin/recruiter only)
  updateApplicationStatus: async (applicationId, status) => {
    const response = await api.put(`/applications/${applicationId}/status`, { status });
    return response.data;
  },
  
  // Get applications by job ID (admin/recruiter only)
  getApplicationsByJob: async (jobId) => {
    const response = await api.get(`/applications/job/${jobId}`);
    return response.data;
  }
};

export default applicationService;
