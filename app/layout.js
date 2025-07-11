// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pavan Hegde | Portfolio',
  description: 'Full Stack Developer | Next.js | React | Node.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Manual Favicon Links */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_files/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_files/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_files/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon_files/favicon.ico" />
        <link rel="manifest" href="/favicon_files/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
