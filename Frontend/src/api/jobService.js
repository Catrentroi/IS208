import api from './config';

// Job service functions
const jobService = {
  // Get all jobs with optional filters
  getAllJobs: async (filters = {}) => {
    try {
      console.log('Fetching all jobs with filters:', filters);
      const response = await api.get('/jobs', { params: filters });
      console.log('Jobs API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw error;
    }
  },
  
  // Get job by ID
  getJobById: async (jobId) => {
    try {
      console.log('Fetching job with ID:', jobId);
      const response = await api.get(`/jobs/${jobId}`);
      console.log('Job details API response:', response.data);
      return response.data;
    } catch (error) {
      console.error(`Error fetching job with ID ${jobId}:`, error);
      throw error;
    }
  },
  
  // Create a new job (recruiter/admin only)
  createJob: async (jobData) => {
    try {
      const response = await api.post('/jobs', jobData);
      return response.data;
    } catch (error) {
      console.error('Error creating job:', error);
      throw error;
    }
  },
  
  // Update an existing job (recruiter/admin only)
  updateJob: async (jobId, jobData) => {
    try {
      const response = await api.put(`/jobs/${jobId}`, jobData);
      return response.data;
    } catch (error) {
      console.error(`Error updating job with ID ${jobId}:`, error);
      throw error;
    }
  },
  
  // Delete a job (recruiter/admin only)
  deleteJob: async (jobId) => {
    try {
      const response = await api.delete(`/jobs/${jobId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting job with ID ${jobId}:`, error);
      throw error;
    }
  },
  
  // Search for jobs
  searchJobs: async (searchQuery) => {
    try {
      const response = await api.get('/jobs', { 
        params: { 
          search: searchQuery 
        } 
      });
      return response.data;
    } catch (error) {
      console.error('Error searching jobs:', error);
      throw error;
    }
  },

  // Apply for a job
  applyForJob: async (jobId, applicationData) => {
    try {
      console.log('Applying for job with ID:', jobId);
      const response = await api.post('/applications', {
        job: jobId,
        ...applicationData
      });
      console.log('Job application response:', response.data);
      return response.data;
    } catch (error) {
      console.error(`Error applying for job with ID ${jobId}:`, error);
      throw error;
    }
  },
};

export default jobService;
