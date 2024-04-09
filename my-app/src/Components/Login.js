import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    userid: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Add loading state
  const [loginError, setLoginError] = useState(false); // Add login error state

  const navigate = useNavigate(); // Get the navigate function using useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    // Regular expression for basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = {};
    if (!formData.userid) {
      validationErrors.userid = "UserID is required";
    } else if (!validateEmail(formData.userid)) {
      validationErrors.userid = "Invalid email format";
    }
    if (!formData.password) validationErrors.password = "Password is required";
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const [useridResponse, passwordResponse] = await Promise.all([
          axios.get(`http://localhost:8000/login/userid/${formData.userid}`),
          axios.get(
            `http://localhost:8000/login/password/${formData.password}`
          ),
        ]);

        if (
          useridResponse.data.length > 0 &&
          passwordResponse.data.length > 0
        ) {
          console.log("Login successful");
          setLoginError(false);

          const userType = useridResponse.data[0].usertype; // Get the user type

          if (userType === "Admin") {
            navigate("/Hompage");
            setLoading(false);
            return;
          } else {
            navigate("/Stdhome");
            setLoading(false);
            return;
          }

          // Redirect the user to another page after successful login
          // navigate('/AnotherPage');
        } else {
          console.error("Login failed");
          setLoginError(true);
        }
      } catch (error) {
        console.error("Login failed", error.response.data);
        setLoginError(true);
      }
    }
    setLoading(false);
  };

  return (
    <div className="login-body">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userid">UserID (Email)</label>
            <input
              type="text"
              id="userid"
              name="userid"
              value={formData.userid}
              onChange={handleChange}
            />
            {errors.userid && <span className="error">{errors.userid}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          {loginError && (
            <div className="error">
              Login failed. Please check your credentials.
            </div>
          )}
          {/* Display login error message if loginError state is true */}
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>
          <p>
            Don't have account? <Link to="/RegistrationForm">Signup</Link>/
          </p>
          {/* Disable button and show loading text if loading state is true */}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
