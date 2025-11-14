import React, { useState } from 'react';
import { styles as sharedStyles } from './Styles.js';

const API_URL = 'http://localhost:5000/api';

function AuthForm({ type, onSuccess, onSwitch }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const endpoint = type === 'login' ? '/auth/login' : '/auth/signup';
      const body = type === 'login' 
        ? { email: formData.email, password: formData.password }
        : formData;

      const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'An error occurred');
        return;
      }

      if (type === 'login') {
        onSuccess(data.user);
      } else {
        alert('Account created successfully! Please login.');
        onSuccess();
      }
    } catch (err) {
      setError('Unable to connect to server. Please make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    authCard: {
      ...sharedStyles.card,
      maxWidth: '420px',
      width: '100%'
    },
    authHeader: {
      marginBottom: '2rem',
      textAlign: 'center'
    },
    authIconContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.5rem'
    },
    authTitle: {
      fontSize: '1.875rem',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '0.5rem',
      letterSpacing: '-0.025em'
    },
    authSubtitle: {
      color: '#64748b',
      fontSize: '0.9375rem',
      lineHeight: '1.5'
    },
    form: {
      marginTop: '2rem'
    },
    divider: {
      position: 'relative',
      textAlign: 'center',
      margin: '1.5rem 0',
      borderTop: '1px solid #e5e7eb'
    },
    dividerText: {
      position: 'relative',
      top: '-0.6rem',
      background: 'white',
      padding: '0 0.75rem',
      color: '#94a3b8',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    switchText: {
      textAlign: 'center',
      marginTop: '1.5rem',
      color: '#64748b',
      fontSize: '0.875rem'
    },
    link: {
      color: '#6366f1',
      cursor: 'pointer',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'color 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  };

  return (
    <div style={sharedStyles.formContainer}>
      <div style={styles.authCard}>
        <div style={styles.authHeader}>
          <div style={styles.authIconContainer}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="12" fill="url(#authGradient)"/>
              <path d="M24 28c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM24 30c-5.3 0-16 2.7-16 8v2h32v-2c0-5.3-10.7-8-16-8z" fill="white"/>
              <defs>
                <linearGradient id="authGradient" x1="0" y1="0" x2="48" y2="48">
                  <stop offset="0%" stopColor="#6366f1"/>
                  <stop offset="100%" stopColor="#8b5cf6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 style={styles.authTitle}>
            {type === 'login' ? 'Welcome back' : 'Create your account'}
          </h2>
          <p style={styles.authSubtitle}>
            {type === 'login' 
              ? 'Enter your credentials to access your account' 
              : 'Start your journey with us today'}
          </p>
        </div>
        
        {error && (
          <div style={sharedStyles.error}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
            </svg>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} style={styles.form}>
          {type === 'signup' && (
            <div style={sharedStyles.inputGroup}>
              <label style={sharedStyles.label}>Username</label>
              <input
                style={sharedStyles.input}
                type="text"
                placeholder="johndoe"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                onFocus={(e) => e.currentTarget.style.borderColor = '#6366f1'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                required
              />
            </div>
          )}
          
          <div style={sharedStyles.inputGroup}>
            <label style={sharedStyles.label}>Email</label>
            <input
              style={sharedStyles.input}
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              onFocus={(e) => e.currentTarget.style.borderColor = '#6366f1'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              required
            />
          </div>
          
          <div style={sharedStyles.inputGroup}>
            <label style={sharedStyles.label}>Password</label>
            <input
              style={sharedStyles.input}
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              onFocus={(e) => e.currentTarget.style.borderColor = '#6366f1'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              required
            />
          </div>
          
          <button type="submit" style={sharedStyles.btnFull} disabled={loading}>
            {loading ? 'Processing...' : type === 'login' ? 'Sign in to your account' : 'Create account'}
          </button>
        </form>
        
        <div style={styles.divider}>
          <span style={styles.dividerText}>or</span>
        </div>
        
        <p style={styles.switchText}>
          {type === 'login' ? "Don't have an account? " : "Already have an account? "}
          <span style={styles.link} onClick={onSwitch}>
            {type === 'login' ? 'Sign up for free' : 'Sign in'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;