import React, { useState } from 'react';
import "../style/Login.css";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    name: '',
    country: 'India'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.userId.trim() || !formData.password.trim() || 
        !formData.confirmPassword.trim() || !formData.name.trim()) {
      setError('All fields are required');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful signup
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true });
        }, 1000);
      });

      if (response.success) {
        setSuccess(true);
        // Redirect to login page after successful signup
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className='body'>
      <form className='form' onSubmit={handleSubmit}>
        {error && <div className='error-message'>{error}</div>}
        {success && <div className='success-message'>Signup successful! Redirecting to login...</div>}

        <label className='label'>User ID</label>
        <input
          type="text"
          name="userId"
          className='input'
          value={formData.userId}
          onChange={handleChange}
          required
        />
        <label className='label'>Password</label>
        <input
          type="password"
          name="password"
          className='input'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label className='label'>Confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          className='input'
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <label className='label'>Name</label>
        <input
          type="text"
          name="name"
          className='input'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label className='label'>Country</label>
        <select
          name="country"
          className='input'
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
        <input type="submit" value="Submit" className='button' disabled={success} />
        <a href="/" className='link'>Already have an account? Login</a>
      </form>
    </div>
  );
}

export default Signup;