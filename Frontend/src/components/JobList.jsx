import React, { useEffect, useState } from 'react';
import { jobService } from '../api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatSalary = (salary) => {
    if (!salary) return 'Negotiable';

    // If salary is just a string (legacy data)
    if (typeof salary === 'string') return salary;

    // Format based on available properties
    let formattedSalary = '';

    if (salary.min && salary.max) {
      formattedSalary = `${salary.min.toLocaleString()} - ${salary.max.toLocaleString()}`;
    } else if (salary.min) {
      formattedSalary = `From ${salary.min.toLocaleString()}`;
    } else if (salary.max) {
      formattedSalary = `Up to ${salary.max.toLocaleString()}`;
    } else {
      return 'Negotiable';
    }

    // Add currency if available
    if (salary.currency) {
      formattedSalary += ` ${salary.currency}`;
    }

    return formattedSalary;
  };

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
              <p className="description">
                {job.description.substring(0, 100)}...
              </p>
              <div className="job-footer">
                <span className="salary">
                  {formatSalary(job.salary)}
                </span>
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
