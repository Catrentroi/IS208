# API Integration Guide

This document provides information on how the frontend communicates with the backend API in this application.

## API Configuration

The API integration is set up in the `src/api` directory with the following structure:

- `config.js` - Base axios configuration with interceptors for authentication
- `index.js` - Exports all service modules
- Service modules:
  - `authService.js` - Authentication related API calls
  - `userService.js` - User management API calls
  - `jobService.js` - Job listings and management API calls
  - `candidateService.js` - Candidate profile and management API calls
  - `applicationService.js` - Job application API calls
  - `interviewService.js` - Interview scheduling and management API calls

## Authentication

The API uses JWT (JSON Web Token) for authentication. When a user logs in, the token is stored in localStorage and automatically included in all subsequent API requests through the axios interceptor.

### Login Example

```javascript
import { authService } from '../api';

// Inside a component or function
const login = async (email, password) => {
  try {
    const response = await authService.login(email, password);
    // Handle successful login
    return response;
  } catch (error) {
    // Handle login error
    console.error('Login failed:', error);
  }
};
```

## API Hook

A custom hook `useApi` is provided in `src/hooks/useApi.js` to simplify API calls. It handles loading states, error handling, and data management.

### Usage Example

```javascript
import useApi from '../hooks/useApi';
import { jobService } from '../api';

// Inside a component
const { data, loading, error, execute } = useApi(jobService.getAllJobs);

// To manually trigger the API call with parameters
execute({ location: 'Remote' });
```

## CORS Configuration

The backend is configured to accept cross-origin requests from the frontend using the `cors` package. This is essential for local development where the frontend and backend run on different ports.

## Environment Configuration

The API base URL is configured in `src/api/config.js`. For different environments, you should modify this file or use environment variables.

## Protected Routes

Routes that require authentication are protected on both the frontend and backend:

1. Backend: Uses middleware to check JWT token
2. Frontend: Uses a `ProtectedRoute` component that checks for the presence of a token

## Error Handling

API errors are handled in two ways:

1. Global: The axios interceptor in `config.js` handles global errors like 401 (Unauthorized)
2. Local: Each API call should be wrapped in try/catch blocks for specific error handling

## Development Workflow

1. Start the backend server: `cd backend && npm run dev`
2. Start the frontend: `cd Frontend && npm run dev`
3. The frontend will connect to the backend API running on port 5000
