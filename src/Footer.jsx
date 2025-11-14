import React from 'react';

function Footer() {
  const styles = {
    footer: {
      background: 'white',
      borderTop: '1px solid #f1f5f9',
      padding: '2.5rem',
      marginTop: '5rem'
    },
    footerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      textAlign: 'center'
    },
    footerText: {
      color: '#334155',
      fontSize: '0.9375rem',
      margin: '0 0 0.5rem 0',
      fontWeight: '400'
    },
    footerCopy: {
      color: '#94a3b8',
      fontSize: '0.875rem',
      margin: 0
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p style={styles.footerText}>
          Created by <strong>Oreratile Ranwashe</strong>
        </p>
        <p style={styles.footerCopy}>© 2025 BlogSphere. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;