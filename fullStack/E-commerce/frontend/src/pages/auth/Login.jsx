import React, { useState, useContext } from 'react';
import { login } from "../../api/user.api.js";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login: authLogin } = useContext(AuthContext);

  //handle submit login
  const submit = async e => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      console.log("creating object from fields", { password, email });
      const response = await login({ password, email });

      // Update AuthContext with user data
      authLogin(response);

      // Role-based navigation
      if (response.role === "admin") {
        navigate('/admin');
      } else if (response.role === "seller") {
        navigate('/seller');
      } else {
        navigate('/profile');
      }
    } catch (err) {
      console.log("error", err);
      setError(err.message || "Invalid email or password");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Enter your credentials to access your account</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form className="auth-form" onSubmit={submit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="auth-input"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="auth-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">Sign In</button>
        </form>

        <div className="auth-footer">
          Don't have an account?
          <Link to="/register" className="auth-link">Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;