import { useState } from "react";
import React from "react";
import "./LoginPage.css";
import axios from 'axios'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = () => {
    console.log("Google Login clicked");
    // Add your Google authentication logic here
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_BASE_URL}/api/users/login`,
      data: {
            "username": email,
            "password": password
      }
    })
      .then(response => console.log(response.data))
      .catch(error => {
        if (error.response) {
          console.error('Server responded with:', error.response.status);
        } else if (error.request) {
          console.error('No response received');
        } else {
          console.error('Error:', error.message);
        }
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <button className="google-login-button" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>
        <div className="signup-prompt">
          No account?{" "}
          <a href="/signup" className="signup-link">
            Click here to sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
