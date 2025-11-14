import React, { useState, useEffect } from 'react';

function Header({ user, onLogout, setView }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    header: {
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'saturate(180%) blur(20px)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    headerScrolled: {
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
    },
    headerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 2.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      cursor: 'pointer'
    },
    logoSvg: {
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    logo: {
      margin: 0,
      fontSize: '1.375rem',
      fontWeight: '700',
      color: '#0f172a',
      letterSpacing: '-0.025em'
    },
    nav: {
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'center'
    },
    userBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.625rem',
      padding: '0.375rem 0.875rem 0.375rem 0.375rem',
      background: '#f8fafc',
      borderRadius: '9999px',
      border: '1px solid #f1f5f9'
    },
    avatar: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: '0.875rem'
    },
    username: {
      fontWeight: '600',
      color: '#334155',
      fontSize: '0.875rem'
    },
    btnPrimary: {
      padding: '0.625rem 1.25rem',
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '600',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.375rem',
      boxShadow: '0 4px 12px -4px rgba(99, 102, 241, 0.3)'
    },
    btnIcon: {
      fontSize: '1rem'
    },
    btnSecondary: {
      padding: '0.625rem 1.25rem',
      background: 'white',
      color: '#64748b',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '600',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  };

  return (
    <header style={{...styles.header, ...(scrolled && styles.headerScrolled)}}>
      <style>
        {`
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(10px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={styles.headerContent}>
        <div style={styles.logoContainer} onClick={() => setView('home')}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={styles.logoSvg}>
            <rect width="32" height="32" rx="8" fill="url(#gradient)"/>
            <path d="M9 12h14M9 16h14M9 20h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                <stop offset="0%" stopColor="#6366f1"/>
                <stop offset="100%" stopColor="#8b5cf6"/>
              </linearGradient>
            </defs>
          </svg>
          <h1 style={styles.logo}>BlogSphere</h1>
        </div>
        <nav style={styles.nav}>
          {user ? (
            <>
              <div style={styles.userBadge}>
                <div style={styles.avatar}>{user.username[0].toUpperCase()}</div>
                <span style={styles.username}>{user.username}</span>
              </div>
              <button 
                style={styles.btnPrimary} 
                onClick={() => setView('create')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(99, 102, 241, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px -4px rgba(99, 102, 241, 0.3)';
                }}
              >
                <span style={styles.btnIcon}>✍</span> New Post
              </button>
              <button 
                style={styles.btnSecondary} 
                onClick={onLogout}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button 
                style={styles.btnSecondary} 
                onClick={() => setView('login')}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
              >
                Sign In
              </button>
              <button 
                style={styles.btnPrimary} 
                onClick={() => setView('signup')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(99, 102, 241, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px -4px rgba(99, 102, 241, 0.3)';
                }}
              >
                Get Started
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;