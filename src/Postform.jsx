import React, { useState } from 'react';
import { styles as sharedStyles } from './Styles.js';

const API_URL = 'http://localhost:5000/api';

function PostForm({ user, post, onSuccess, onCancel }) {
  const [formData, setFormData] = useState({
    title: post?.title || '',
    subtitle: post?.subtitle || '',
    content: post?.content || ''
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(post?.image ? `http://localhost:5000${post.image}` : null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  //testing before backend deployment

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('title', formData.title);
    data.append('subtitle', formData.subtitle);
    data.append('content', formData.content);
    data.append('authorId', user.id);
    if (image) data.append('image', image);

    try {
      const url = post 
        ? `${API_URL}/posts/${post.id}`
        : `${API_URL}/posts`;
      
      const res = await fetch(url, {
        method: post ? 'PUT' : 'POST',
        body: data
      });

      if (res.ok) {
        onSuccess();
      } else {
        alert('Failed to save post');
      }
    } catch (err) {
      alert('Unable to connect to server. Please make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    postFormCard: {
      ...sharedStyles.card,
      maxWidth: '800px',
      width: '100%'
    },
    formHeader: {
      marginBottom: '2.5rem'
    },
    formTitle: {
      fontSize: '1.875rem',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '0.5rem',
      letterSpacing: '-0.025em'
    },
    formSubtitle: {
      color: '#64748b',
      fontSize: '0.9375rem'
    },
    form: {
      marginTop: '2rem'
    },
    buttonGroup: {
      display: 'flex',
      gap: '0.75rem',
      marginTop: '2rem'
    },
    fileInputWrapper: {
      marginTop: '0.5rem'
    },
    fileLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '1rem',
      background: '#f8fafc',
      border: '2px dashed #e5e7eb',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: '0.9375rem',
      fontWeight: '500',
      color: '#64748b'
    },
    previewContainer: {
      marginTop: '1rem',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      border: '1px solid #e5e7eb'
    },
    previewImg: {
      width: '100%',
      height: 'auto',
      maxHeight: '240px',
      objectFit: 'cover'
    }
  };

  return (
    <div style={sharedStyles.formContainer}>
      <div style={styles.postFormCard}>
        <div style={styles.formHeader}>
          <h2 style={styles.formTitle}>
            {post ? 'Edit your post' : 'Create a new post'}
          </h2>
          <p style={styles.formSubtitle}>
            {post ? 'Make changes to your post' : 'Share your thoughts with the world'}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={sharedStyles.inputGroup}>
            <label style={sharedStyles.label}>Title</label>
            <input
              style={sharedStyles.input}
              type="text"
              placeholder="Give your post a compelling title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              onFocus={(e) => e.currentTarget.style.borderColor = '#6366f1'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              required
            />
          </div>
          
          <div style={sharedStyles.inputGroup}>
            <label style={sharedStyles.label}>
              Subtitle <span style={sharedStyles.optional}>(optional)</span>
            </label>
            <input
              style={sharedStyles.input}
              type="text"
              placeholder="Add a brief description"
              value={formData.subtitle}
              onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
              onFocus={(e) => e.currentTarget.style.borderColor = '#6366f1'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
            />
          </div>
          
          <div style={sharedStyles.inputGroup}>
            <label style={sharedStyles.label}>Content</label>
            <textarea
              style={{...sharedStyles.input, ...sharedStyles.textarea}}
              placeholder="Write your story..."
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              onFocus={(e) => e.currentTarget.style.borderColor = '#6366f1'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              required
            />
          </div>
          
          <div style={sharedStyles.inputGroup}>
            <label style={sharedStyles.label}>
              Cover Image <span style={sharedStyles.optional}>(optional)</span>
            </label>
            <div style={styles.fileInputWrapper}>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{display: 'none'}}
              />
              <label htmlFor="file-upload" style={styles.fileLabel}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                </svg>
                <span>{image ? image.name : 'Choose an image'}</span>
              </label>
            </div>
            
            {preview && (
              <div style={styles.previewContainer}>
                <img src={preview} alt="Preview" style={styles.previewImg} />
              </div>
            )}
          </div>
          
          <div style={styles.buttonGroup}>
            <button 
              type="button" 
              style={sharedStyles.btnCancel} 
              onClick={onCancel}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
            >
              Cancel
            </button>
            <button type="submit" style={sharedStyles.btnSubmit} disabled={loading}>
              {loading ? 'Publishing...' : post ? 'Update post' : 'Publish post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostForm;


