'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '@/styles/Header.module.css';
import Navigation from './Navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/">Pavan.dev</Link>
      </div>
      <nav className={styles.desktopNav}>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#resume">Resume</Link>
        <Link href="#contact">Contact</Link>
      </nav>
      <Navigation />
    </header>
  );
}
