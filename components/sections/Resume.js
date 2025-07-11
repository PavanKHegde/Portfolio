// components/sections/Resume.js
import styles from '@/styles/Resume.module.css';

export default function Resume() {
  return (
    <section className={styles.resume} id="resume">
      <h2>Resume</h2>
      <p>You can view or download my resume below:</p>
      <a href="/files/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
        View / Download Resume
      </a>
    </section>
  );
}
