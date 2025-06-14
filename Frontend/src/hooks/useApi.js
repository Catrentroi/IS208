import { useState, useEffect, useCallback } from 'react';

/**
 * A custom hook for handling API requests with loading, error, and data states
 * @param {Function} apiFunction - The API function to call
 * @param {Array} dependencies - Dependencies for the useEffect hook
 * @param {Boolean} immediate - Whether to call the API immediately or manually
 * @param {Array} params - Initial parameters to pass to the API function
 * @returns {Object} - { data, loading, error, execute }
 */
const useApi = (apiFunction, dependencies = [], immediate = true, ...params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...args) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  useEffect(() => {
    if (immediate) {
      execute(...params);
    }
  }, [execute, immediate, ...dependencies]);

  return { data, loading, error, execute };
};

export default useApi;
