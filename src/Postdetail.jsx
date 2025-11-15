/*import React from 'react';

function PostDetail({ post, onBack }) {
  const styles = {
    detailContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem'
    },
    backBtn: {
      padding: '0.625rem 1.25rem',
      background: 'white',
      color: '#64748b',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      marginBottom: '2rem',
      fontSize: '0.875rem',
      fontWeight: '600',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center'
    },
    article: {
      background: 'white',
      borderRadius: '1.25rem',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      border: '1px solid #f1f5f9'
    },
    detailImageContainer: {
      width: '100%',
      maxHeight: '480px',
      overflow: 'hidden',
      background: '#f8fafc'
    },
    detailImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    articleContent: {
      padding: '3rem'
    },
    detailMeta: {
      paddingBottom: '2rem',
      marginBottom: '2rem',
      borderBottom: '1px solid #f1f5f9'
    },
    authorInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    detailAvatar: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: '1.125rem',
      flexShrink: 0
    },
    detailAuthorName: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#0f172a'
    },
    publishDate: {
      fontSize: '0.875rem',
      color: '#94a3b8',
      marginTop: '0.25rem'
    },
    detailTitle: {
      margin: '0 0 1rem 0',
      color: '#0f172a',
      fontSize: '2.75rem',
      fontWeight: '800',
      lineHeight: '1.15',
      letterSpacing: '-0.03em'
    },
    detailSubtitle: {
      margin: '0 0 2rem 0',
      color: '#64748b',
      fontSize: '1.375rem',
      fontWeight: '400',
      lineHeight: '1.5'
    },
    detailContent: {
      lineHeight: '1.75',
      fontSize: '1.0625rem',
      color: '#334155'
    },
    paragraph: {
      marginBottom: '1.5rem',
      lineHeight: '1.75'
    }
  };

  return (
    <div style={styles.detailContainer}>
      <button 
        style={styles.backBtn} 
        onClick={onBack}
        onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{marginRight: '8px'}}>
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        Back to posts
      </button>
      
      <article style={styles.article}>
        {post.image && (
          <div style={styles.detailImageContainer}>
            <img 
              src={`http://localhost:5000${post.image}`} 
              alt={post.title}
              style={styles.detailImage}
            />
          </div>
        )}
        
        <div style={styles.articleContent}>
          <div style={styles.detailMeta}>
            <div style={styles.authorInfo}>
              <div style={styles.detailAvatar}>
                {post.authorName[0].toUpperCase()}
              </div>
              <div>
                <div style={styles.detailAuthorName}>{post.authorName}</div>
                <div style={styles.publishDate}>
                  {new Date(post.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric',
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            </div>
          </div>
          
          <h1 style={styles.detailTitle}>{post.title}</h1>
          {post.subtitle && (
            <h2 style={styles.detailSubtitle}>{post.subtitle}</h2>
          )}
          
          <div style={styles.detailContent}>
            {post.content.split('\n').map((para, i) => (
              para.trim() && <p key={i} style={styles.paragraph}>{para}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default PostDetail;*/
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = 'https://oreratile-backend-4.onrender.com/api/posts';

function PostDetail({ onBack }) {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const styles = {
    detailContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem'
    },
    backBtn: {
      padding: '0.625rem 1.25rem',
      background: 'white',
      color: '#64748b',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      marginBottom: '2rem',
      fontSize: '0.875rem',
      fontWeight: '600',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center'
    },
    article: {
      background: 'white',
      borderRadius: '1.25rem',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      border: '1px solid #f1f5f9'
    },
    detailImageContainer: {
      width: '100%',
      maxHeight: '480px',
      overflow: 'hidden',
      background: '#f8fafc'
    },
    detailImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    articleContent: {
      padding: '3rem'
    },
    detailMeta: {
      paddingBottom: '2rem',
      marginBottom: '2rem',
      borderBottom: '1px solid #f1f5f9'
    },
    authorInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    detailAvatar: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: '1.125rem',
      flexShrink: 0
    },
    detailAuthorName: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#0f172a'
    },
    publishDate: {
      fontSize: '0.875rem',
      color: '#94a3b8',
      marginTop: '0.25rem'
    },
    detailTitle: {
      margin: '0 0 1rem 0',
      color: '#0f172a',
      fontSize: '2.75rem',
      fontWeight: '800',
      lineHeight: '1.15',
      letterSpacing: '-0.03em'
    },
    detailSubtitle: {
      margin: '0 0 2rem 0',
      color: '#64748b',
      fontSize: '1.375rem',
      fontWeight: '400',
      lineHeight: '1.5'
    },
    detailContent: {
      lineHeight: '1.75',
      fontSize: '1.0625rem',
      color: '#334155'
    },
    paragraph: {
      marginBottom: '1.5rem',
      lineHeight: '1.75'
    },
    loader: {
      textAlign: 'center',
      padding: '4rem',
      fontSize: '1.25rem',
      color: '#64748b'
    }
  };

  if (loading) return <div style={styles.loader}>Loading post...</div>;
  if (!post) return <div style={styles.loader}>Post not found.</div>;

  return (
    <div style={styles.detailContainer}>
      <button
        style={styles.backBtn}
        onClick={onBack}
        onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '8px' }}>
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg>
        Back to posts
      </button>

      <article style={styles.article}>
        {post.image && (
          <div style={styles.detailImageContainer}>
            <img
              src={`https://oreratile-backend-4.onrender.com${post.image}`}
              alt={post.title}
              style={styles.detailImage}
            />
          </div>
        )}

        <div style={styles.articleContent}>
          <div style={styles.detailMeta}>
            <div style={styles.authorInfo}>
              <div style={styles.detailAvatar}>
                {post.authorName[0].toUpperCase()}
              </div>
              <div>
                <div style={styles.detailAuthorName}>{post.authorName}</div>
                <div style={styles.publishDate}>
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>
          </div>

          <h1 style={styles.detailTitle}>{post.title}</h1>
          {post.subtitle && <h2 style={styles.detailSubtitle}>{post.subtitle}</h2>}

          <div style={styles.detailContent}>
            {post.content.split('\n').map((para, i) =>
              para.trim() && <p key={i} style={styles.paragraph}>{para}</p>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

export default PostDetail;
