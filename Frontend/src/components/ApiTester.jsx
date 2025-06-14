import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiTester = () => {
  const [apiStatus, setApiStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobId, setJobId] = useState('684d20525d2db4d404676d6d');

  // Test the API connection
  useEffect(() => {
    const testApiConnection = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/test');
        setApiStatus(response.data);
        setLoading(false);
      } catch (err) {
        console.error('API test error:', err);
        setError('Could not connect to the API. Check if the server is running.');
        setLoading(false);
      }
    };

    testApiConnection();
  }, []);

  // Test fetching a job
  const fetchJob = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/jobs/${jobId}`);
      console.log('Job data fetched directly:', response.data);
      alert('Job fetched successfully! Check console for details.');
      setLoading(false);
    } catch (err) {
      console.error('Error fetching job:', err);
      setError(`Could not fetch job: ${err.message}`);
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>API Tester</h1>
      
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div style={{ color: 'red', padding: '10px', border: '1px solid red', borderRadius: '5px' }}>
          {error}
        </div>
      ) : (
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
          <h3>API Status:</h3>
          <pre>{JSON.stringify(apiStatus, null, 2)}</pre>
        </div>
      )}
      
      <div style={{ marginTop: '30px' }}>
        <h3>Test Job Fetch</h3>
        <p>Enter a job ID to test:</p>
        <input 
          type="text" 
          value={jobId}
          onChange={e => setJobId(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button 
          onClick={fetchJob}
          style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Fetch Job
        </button>
      </div>
    </div>
  );
};

export default ApiTester;
