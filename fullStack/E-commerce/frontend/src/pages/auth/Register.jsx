import React, { useState, useContext } from 'react';
import { register } from "../../api/user.api.js";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Auth.css";

const Register = () => {
    const navigate = useNavigate();
    const { login: authLogin } = useContext(AuthContext);
    const [form, setForm] = useState({ username: "", password: "", email: "" });
    const [error, setError] = useState("");


    // handle submit
    const handleSubmit = async (e) => {
        console.log("handle submit clicked!!!");
        e.preventDefault();
        setError("");
        try {
            console.log(form);
            const response = await register(form);

            // Update AuthContext with user data
            authLogin(response);

            navigate("/profile");
        } catch (err) {
            setError(err.message || "Registration failed");
        }

    }


    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h2>Create Account</h2>
                    <p>Join us and start your journey</p>
                </div>

                {error && <div className="error-message">{typeof error === 'string' ? error : "Registration failed"}</div>}

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className="auth-input"
                            placeholder="JohnDoe"
                            value={form.username} // Fixed: was form.userName in original (undefined in state init)
                            onChange={e => setForm({ ...form, username: e.target.value })}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="auth-input"
                            placeholder="name@example.com"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="auth-input"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={e => setForm({ ...form, password: e.target.value })}
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button">Register</button>
                </form>

                <div className="auth-footer">
                    Already have an account?
                    <Link to="/login" className="auth-link">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default Register