// Shared styles configuration for the modern, clean blog design
export const styles = {
  // Input styles
  inputGroup: {
    marginBottom: '1.25rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#334155',
    fontWeight: '600',
    fontSize: '0.875rem'
  },
  optional: {
    fontWeight: '400',
    color: '#94a3b8'
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    fontSize: '0.9375rem',
    boxSizing: 'border-box',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    outline: 'none',
    background: 'white',
    color: '#0f172a'
  },
  textarea: {
    minHeight: '200px',
    resize: 'vertical',
    fontFamily: 'inherit',
    lineHeight: '1.6'
  },

  // Button styles
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
  },
  btnFull: {
    width: '100%',
    padding: '0.875rem',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontSize: '0.9375rem',
    fontWeight: '600',
    boxShadow: '0 4px 12px -4px rgba(99, 102, 241, 0.4)',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    marginTop: '0.5rem'
  },
  btnCancel: {
    flex: 1,
    padding: '0.875rem',
    background: 'white',
    color: '#64748b',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontSize: '0.9375rem',
    fontWeight: '600',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  btnSubmit: {
    flex: 1,
    padding: '0.875rem',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontSize: '0.9375rem',
    fontWeight: '600',
    boxShadow: '0 4px 12px -4px rgba(99, 102, 241, 0.4)',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
  },

  // Card styles
  card: {
    background: 'white',
    padding: '3rem',
    borderRadius: '1.25rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    border: '1px solid #f1f5f9'
  },

  // Avatar styles
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

  // Error styles
  error: {
    padding: '0.875rem',
    background: '#fef2f2',
    color: '#dc2626',
    borderRadius: '0.5rem',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: '1px solid #fee2e2'
  },

  // Form container
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh',
    padding: '2rem'
  }
};