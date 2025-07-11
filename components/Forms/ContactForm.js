'use client';

import { useState } from 'react';
import styles from '@/styles/Contact.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const res = await fetch('https://formspree.io/f/xjkrnajg', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: new FormData(form),
    });

    if (res.ok) {
      form.reset();
      setStatus('✅ Proposal sent successfully!');
    } else {
      setStatus('❌ Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input name="name" type="text" placeholder="Your Name or Company" required />
      <input name="email" type="email" placeholder="Your Email Address" required />
      <textarea name="message" placeholder="Tell me about your project, role, or idea..." rows="6" required></textarea>
      <button type="submit">Send Proposal</button>
      {status && <p className={styles.status}>{status}</p>}
    </form>
  );
}
