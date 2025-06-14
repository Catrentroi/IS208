import React, { useEffect, useState } from 'react';
import { jobService } from '../api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch jobs when component mounts
    const fetchJobs = async () => {
      try {
        const data = await jobService.getAllJobs();
        setJobs(data.jobs || []);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch jobs. Please try again later.');
        setLoading(false);
        console.error('Error fetching jobs:', err);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <div>Loading jobs...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="job-list">
      <h2>Available Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs available at the moment.</p>
      ) : (
        <div className="jobs-container">
          {jobs.map((job) => (
            <div key={job._id} className="job-card">
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
              <p className="location">{job.location}</p>
              <p className="description">{job.description.substring(0, 100)}...</p>
              <div className="job-footer">
                <span className="salary">${job.salary}</span>
                <button className="view-details">View Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
