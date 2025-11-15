import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import AuthForm from './Authform.jsx';
import PostForm from './PostForm.jsx';
import PostList from './Postlist.jsx';
import PostDetail from './Postdetail.jsx';
import Footer from './Footer.jsx';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('home');
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${API_URL}/posts`);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setView('home');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    }}>
      <Header user={user} onLogout={handleLogout} setView={setView} />
      
      <main style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '3rem 2.5rem'
      }}>
        {view === 'home' && (
          <PostList 
            posts={posts}
            loading={loading}
            onSelectPost={(post) => {
              setSelectedPost(post);
              setView('detail');
            }}
            onEditPost={(post) => {
              setSelectedPost(post);
              setView('edit');
            }}
            user={user}
          />
        )}
        
        {view === 'login' && (
          <AuthForm 
            type="login" 
            onSuccess={(userData) => {
              setUser(userData);
              setView('home');
            }}
            onSwitch={() => setView('signup')}
          />
        )}
        
        {view === 'signup' && (
          <AuthForm 
            type="signup" 
            onSuccess={() => setView('login')}
            onSwitch={() => setView('login')}
          />
        )}
        
        {view === 'create' && user && (
          <PostForm 
            user={user}
            onSuccess={() => {
              fetchPosts();
              setView('home');
            }}
            onCancel={() => setView('home')}
          />
        )}
        
        {view === 'edit' && user && selectedPost && (
          <PostForm 
            user={user}
            post={selectedPost}
            onSuccess={() => {
              fetchPosts();
              setView('home');
              setSelectedPost(null);
            }}
            onCancel={() => {
              setView('home');
              setSelectedPost(null);
            }}
          />
        )}
        
        {view === 'detail' && selectedPost && (
          <PostDetail 
            post={selectedPost}
            onBack={() => {
              setView('home');
              setSelectedPost(null);
            }}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;