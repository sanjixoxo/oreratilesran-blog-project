import React from 'react';

const API_URL = 'http://localhost:5000/api';

function PostList({ posts, loading, onSelectPost, onEditPost, user }) {
  const handleDelete = async (postId) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      const res = await fetch(`${API_URL}/posts/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ authorId: user.id })
      });

      if (res.ok) {
        window.location.reload();
      }
    } catch (err) {
      alert('Failed to delete post');
    }
  };

  const styles = {
    postList: {
      marginTop: '2rem'
    },
    hero: {
      textAlign: 'center',
      padding: '5rem 2rem 4rem',
      marginBottom: '4rem',
      maxWidth: '800px',
      margin: '0 auto 4rem'
    },
    heroTitle: {
      fontSize: '3.75rem',
      fontWeight: '800',
      color: '#0f172a',
      marginBottom: '1.25rem',
      letterSpacing: '-0.04em',
      lineHeight: '1.1'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#64748b',
      fontWeight: '400',
      lineHeight: '1.6',
      maxWidth: '650px',
      margin: '0 auto'
    },
    emptyState: {
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'white',
      borderRadius: '1.25rem',
      maxWidth: '500px',
      margin: '0 auto',
      border: '1px solid #f1f5f9'
    },
    loader: {
      width: '40px',
      height: '40px',
      border: '3px solid #f1f5f9',
      borderTop: '3px solid #6366f1',
      borderRadius: '50%',
      margin: '0 auto 1.5rem',
      animation: 'spin 0.8s linear infinite'
    },
    emptyIcon: {
      marginBottom: '1.5rem'
    },
    emptyTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '0.5rem',
      letterSpacing: '-0.025em'
    },
    emptyText: {
      color: '#64748b',
      fontSize: '0.9375rem',
      lineHeight: '1.6'
    },
    postsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
      gap: '2rem',
      padding: '1rem 0'
    },
    postCard: {
      background: 'white',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      border: '1px solid #f1f5f9'
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: '220px',
      overflow: 'hidden',
      background: '#f8fafc'
    },
    postImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    placeholderImage: {
      width: '100%',
      height: '220px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    postContent: {
      padding: '1.75rem'
    },
    postMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem'
    },
    authorInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: '0.875rem'
    },
    miniAvatar: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: '0.8125rem',
      flexShrink: 0
    },
    authorName: {
      fontWeight: '600',
      color: '#0f172a',
      fontSize: '0.875rem'
    },
    date: {
      color: '#94a3b8',
      fontSize: '0.8125rem',
      fontWeight: '400',
      marginTop: '2px'
    },
    postTitle: {
      margin: '0 0 0.5rem 0',
      color: '#0f172a',
      fontSize: '1.375rem',
      fontWeight: '700',
      lineHeight: '1.3',
      letterSpacing: '-0.015em'
    },
    postSubtitle: {
      margin: '0 0 0.75rem 0',
      color: '#64748b',
      fontSize: '0.9375rem',
      fontWeight: '400',
      lineHeight: '1.5'
    },
    postExcerpt: {
      color: '#64748b',
      lineHeight: '1.6',
      marginBottom: '1.25rem',
      fontSize: '0.9375rem'
    },
    ownerActions: {
      display: 'flex',
      gap: '0.5rem',
      paddingTop: '1rem',
      borderTop: '1px solid #f1f5f9'
    },
    btnIconBtn: {
      width: '36px',
      height: '36px',
      background: '#f8fafc',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#64748b'
    },
    btnDelete: {
      background: '#fef2f2',
      borderColor: '#fecaca',
      color: '#dc2626'
    }
  };

  return (
    <div style={styles.postList}>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Discover stories, thinking, and expertise</h1>
        <p style={styles.heroSubtitle}>Read and share ideas from independent writers and experts on any topic</p>
      </div>
      
      {loading ? (
        <div style={styles.emptyState}>
          <div style={styles.loader}></div>
          <p style={styles.emptyText}>Loading posts...</p>
        </div>
      ) : posts.length === 0 ? (
        <div style={styles.emptyState}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={styles.emptyIcon}>
            <rect width="64" height="64" rx="16" fill="#f8fafc"/>
            <path d="M20 24h24M20 32h24M20 40h16" stroke="#6366f1" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <h3 style={styles.emptyTitle}>No posts yet</h3>
          <p style={styles.emptyText}>Be the first to share your story with the world</p>
        </div>
      ) : (
        <div style={styles.postsGrid}>
          {posts.map(post => (
            <article 
              key={post.id} 
              style={styles.postCard}
              onClick={() => onSelectPost(post)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 24px -12px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
              }}
            >
              {post.image ? (
                <div style={styles.imageContainer}>
                  <img 
                    src={`http://localhost:5000${post.image}`} 
                    alt={post.title}
                    style={styles.postImage}
                  />
                </div>
              ) : (
                <div style={styles.placeholderImage}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="12" fill="url(#cardGradient)"/>
                    <path d="M16 20h16M16 24h16M16 28h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="cardGradient" x1="0" y1="0" x2="48" y2="48">
                        <stop offset="0%" stopColor="#6366f1"/>
                        <stop offset="100%" stopColor="#8b5cf6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
              
              <div style={styles.postContent}>
                <div style={styles.postMeta}>
                  <div style={styles.authorInfo}>
                    <div style={styles.miniAvatar}>
                      {post.authorName[0].toUpperCase()}
                    </div>
                    <div>
                      <div style={styles.authorName}>{post.authorName}</div>
                      <div style={styles.date}>
                        {new Date(post.createdAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 style={styles.postTitle}>{post.title}</h3>
                {post.subtitle && (
                  <p style={styles.postSubtitle}>{post.subtitle}</p>
                )}
                <p style={styles.postExcerpt}>
                  {post.content.substring(0, 150)}...
                </p>
                
                {user && user.id === post.authorId && (
                  <div style={styles.ownerActions} onClick={(e) => e.stopPropagation()}>
                    <button 
                      style={styles.btnIconBtn} 
                      onClick={() => onEditPost(post)}
                      title="Edit post"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                      </svg>
                    </button>
                    <button 
                      style={{...styles.btnIconBtn, ...styles.btnDelete}} 
                      onClick={() => handleDelete(post.id)}
                      title="Delete post"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;