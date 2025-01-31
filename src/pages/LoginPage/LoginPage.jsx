import React, { useState } from "react";
import styles from "./LoginPage.module.css"; // Ensure you have styles for better UI
import { Link, useNavigate } from "react-router-dom";
import { SiBuildkite } from "react-icons/si";
import axios from "axios";

const LoginPage = () => {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Default role is "User"
  const [error, setError] = useState(""); // State to handle error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error

    try {
        const response = await axios.post("http://localhost:3000/api/users/login", {
            name,
            password,
        });

        const { token, name: userName, email, role ,_id : id } = response.data;

        // Debug logs
        console.log("Login Response:", response.data);

        // Store in local storage
        localStorage.setItem("authToken", token);
        localStorage.setItem('_id',id);
        localStorage.setItem("userName", userName);
        localStorage.setItem("userRole", role);
        localStorage.setItem("loggedIn", true);


        console.log("User Role Stored:", role);

        // Navigate based on role
        if (role === "Admin") {
            console.log("Navigating to Admin Dashboard");
            navigate("/admin");
        } else if (role === "User") {
            console.log("Navigating to User Dashboard");
            navigate("/user");
        } else {
            console.error("Unknown role detected:", role);
            setError("Unknown role. Please contact support.");
        }
    } catch (error) {
        console.error("Login Error:", error);
        if (error.response && error.response.data.message) {
            setError(error.response.data.message);
        } else {
            setError("Something went wrong. Please try again later.");
        }
    }
};


  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.inputGroupheading}>
          <SiBuildkite className={styles.icons} />
          <span>
            Dev<span className="gradient-text">Cave</span>
          </span>
        </div>

        <h2 className={styles.heading}>Login</h2>

        {/* Error Message */}
        {error && <div className={styles.error}>{error}</div>}

        {/* Role Selection
        <div className={styles.role}>
          <label>
            <input
              type="radio"
              name="role"
              value="Admin"
              checked={role === "Admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            Admin
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="User"
              checked={role === "User"}
              onChange={(e) => setRole(e.target.value)}
            />
            User
          </label>
        </div> */}

        {/* Username Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            type="text"
            id="username"
            className={styles.input}
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Password Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.loginButton}>
          Login
        </button>

        {/* Links */}
        <div className={styles.inputGroup}>
          <br />
          <p>
            New user? <Link to="/register">Register</Link>
          </p>
          <p>
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
