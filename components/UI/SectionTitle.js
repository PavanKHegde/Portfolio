// components/UI/SectionTitle.js
import styles from '@/styles/SectionTitle.module.css';

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
