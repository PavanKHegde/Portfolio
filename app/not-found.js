// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: '1rem'
    }}>
      <h1>404 – Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link href="/">
        <button>Go Back Home</button>
      </Link>
    </div>
  );
}
