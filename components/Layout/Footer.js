// components/Layout/Footer.js
export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem 1rem',
      fontSize: '0.9rem',
      color: '#94a3b8'
    }}>
      © {new Date().getFullYear()} Pavan Hegde. All rights reserved.
    </footer>
  );
}
