import { useState, useEffect } from 'react';
import { seedPosts } from './data/posts';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Composer from './components/Composer';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import myAvatar from './assets/vishal.jpg';


const me = {
  handle: 'vishal',
  avatar: myAvatar,
};

export default function App() {
  
  // Initialize posts from localStorage (persistence)
  const [posts, setPosts] = useState(() => {
    try {
      const raw = localStorage.getItem('mini-insta-posts');
      return raw ? JSON.parse(raw) : seedPosts;
    } catch {
      return seedPosts;
    }
  });

  // Save posts whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('mini-insta-posts', JSON.stringify(posts));
    } catch {}
  }, [posts]);

  return (
    <>
      <Navbar title="SLU-Stagram" />
      <main className="container" style={{ maxWidth: 680, margin: '0 auto' }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Composer me={me} setPosts={setPosts} />
                <Feed posts={posts} setPosts={setPosts} />
              </>
            }
          />
          <Route
            path="/u/:handle"
            element={<Profile posts={posts} setPosts={setPosts} />}
          />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </main>
    </>
  );
}
