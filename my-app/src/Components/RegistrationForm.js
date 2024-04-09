import React, { useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    userid: '',
    password: '',
    usertype: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';
    if (name === 'userid' && !isValidEmail(value)) {
      error = 'Please enter a valid email address';
    }
    setErrors({ ...errors, [name]: error });
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    const validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.userid || !isValidEmail(formData.userid)) {
      validationErrors.userid = 'Please enter a valid email address';
    }
    if (!formData.password) validationErrors.password = 'Password is required';
    if (!formData.usertype) validationErrors.usertype = 'User type is required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8000/login/add', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Registration successful', response.data);
        // Optionally, you can redirect the user to another page after successful registration
      } catch (error) {
        console.error('Registration failed', error.response.data);
      }
    }
  };

  return (
    <div className="register">
      <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="userid">UserID (Email)</label>
          <input type="text" id="userid" name="userid" value={formData.userid} onChange={handleChange} />
          {errors.userid && <span className="error">{errors.userid}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="usertype">User Type</label>
          <input type="text" id="usertype" name="usertype" value={formData.usertype} onChange={handleChange} />
          {errors.usertype && <span className="error">{errors.usertype}</span>}
        </div>
        <button type="submit">Register</button>
        <p>
              Don't have account? <Link to="/Login">Login</Link>
              /</p>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
