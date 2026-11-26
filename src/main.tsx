import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { auth } from '@appdeploy/client';
import App from './App';
import './index.css';

function AuthGate() {
  const [user, setUser] = useState<{ userId: string; email?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [signingIn, setSigningIn] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let mounted = true;
    auth.getUser()
      .then(current => { if (mounted) setUser(current); })
      .catch(() => { if (mounted) setMessage('We could not restore your sign-in. Please try again.'); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, []);

  async function signIn() {
    setSigningIn(true);
    setMessage('');
    try {
      await auth.signInWithRedirect({ scope: 'openid email profile offline_access' });
    } catch {
      setMessage('Sign-in could not start. Please check your connection and try again.');
      setSigningIn(false);
    }
  }

  async function signOut() {
    await auth.signOut();
    setUser(null);
  }

  if (loading) {
    return <div className="bb-account-screen"><div className="bb-account-card"><img src="/resources/bio-bunny-sunny-logo.jpg" alt="Bio Bunny" /><h1>Opening your garden…</h1><p>Checking your guardian sign-in.</p></div></div>;
  }

  if (!user) {
    return (
      <div className="bb-account-screen">
        <section className="bb-account-card">
          <img src="/resources/bio-bunny-sunny-logo.jpg" alt="Bio Bunny sunny mascot" />
          <span className="bb-account-kicker">WELCOME TO BIO BUNNY</span>
          <h1>A safe little space to grow curiosity.</h1>
          <p>A parent or guardian signs in first. Then learners can use a nickname and choose their class.</p>
          <div className="bb-ad-safety-note"><strong>Ad status:</strong> No ads or ad-tracking scripts are active. Bio Bunny will remain ad-free for learners until child-safety and publisher requirements are reviewed.</div>
          <button className="primary-btn bb-create-profile" onClick={signIn} disabled={signingIn}>{signingIn ? 'Opening secure sign-in…' : 'Parent / guardian sign in with email'} </button>
          {message && <p className="bb-profile-error">{message}</p>}
          <small className="bb-guardian-note">Children do not need their own email address or full name to use a learner profile.</small>
        </section>
      </div>
    );
  }

  return <><App guardianUserId={user.userId} guardianEmail={user.email} /><button className="bb-signout" onClick={signOut}>Guardian sign out</button></>;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthGate />
  </StrictMode>
);
