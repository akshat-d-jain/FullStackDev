import React, { useState } from 'react';
import "../style/Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: '',
    password: ''
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
    if (!formData.userId.trim() || !formData.password.trim()) {
      setError('All fields are required');
      return;
    }

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful login
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true });
        }, 1000);
      });

      if (response.success) {
        setSuccess(true);
        // Redirect to dashboard or home page after successful login
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className='body'>
      <form className='form' onSubmit={handleSubmit}>
        {error && <div className='error-message'>{error}</div>}
        {success && <div className='success-message'>Login successful! Redirecting...</div>}
        
        <label className='label'>User Id</label> 
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
        <input 
          type="submit" 
          value="Log In" 
          className='button'
          disabled={success} 
        />
        <a href="/signup" className='link'>Don't have an account? Sign up</a>
      </form>      
    </div>
  );
}

export default Login;