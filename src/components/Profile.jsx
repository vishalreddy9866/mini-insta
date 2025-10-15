import { useParams, Link } from 'react-router-dom';
import Feed from './Feed';
import { useState } from 'react';

export default function Profile({ posts, setPosts }) {
  const { handle } = useParams();
  const [copied, setCopied] = useState(false);

  const filtered = posts.filter(
    (p) => p.author.toLowerCase() === handle.toLowerCase()
  );

  // Robust copy helper: native Clipboard API + fallback
  async function copyToClipboard(text) {
    try {
      if (navigator.clipboard && window.isSecureContext !== false) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers / odd contexts
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.top = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // As a last resort, show the URL so the user can copy manually
      alert(`Profile link: ${text}`);
    }
  }

  function onCopyClick() {
    const url = `${window.location.origin}/u/${handle}`;
    copyToClipboard(url);
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onCopyClick();
    }
  }

  return (
    <section>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '12px',
        }}
      >
        {/* Click / Enter / Space to copy link */}
        <h2
          role="button"
          tabIndex={0}
          onClick={onCopyClick}
          onKeyDown={onKeyDown}
          title="Click to copy profile link"
          style={{ cursor: 'pointer', userSelect: 'none', margin: 0 }}
        >
          @{handle}{' '}
          {copied && (
            <span style={{ fontSize: '0.8em', color: 'gray' }}>✓ copied</span>
          )}
        </h2>

        <Link
          to="/"
          style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}
        >
          ← Home
        </Link>
      </header>

      {filtered.length ? (
        <Feed posts={filtered} setPosts={setPosts} />
      ) : (
        <p style={{ opacity: 0.7 }}>No posts yet.</p>
      )}
    </section>
  );
}
