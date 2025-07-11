'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.mobileNav}>
      <button className={styles.toggle} onClick={() => setOpen(!open)}>
        ☰
      </button>
      {open && (
        <div className={styles.dropdown}>
          <Link href="#about" onClick={() => setOpen(false)}>About</Link>
          <Link href="#skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="#resume" onClick={() => setOpen(false)}>Resume</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}
