import React from 'react';
import '../Login/login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to your account</p>
        <form className="login-form">
          <input type="text" placeholder="Username" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button className="login-button" type="submit">Login</button>
        </form>
        <div className="login-footer">
          <p>Don't have an account? <a href="#register" className="login-link">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
