import React from 'react';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LoginPage = () => {
  return (
    <div className="login-page">
      <Header />
      <div className="login-container">
        <div className="login-content">
          <h1>Welcome Back</h1>
          <p>Log in to access your job applications, interviews, and more.</p>
          <LoginForm />
          <div className="register-link">
            <p>Don't have an account? <a href="/register">Register here</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
