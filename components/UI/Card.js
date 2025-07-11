// components/UI/Card.js
import Image from 'next/image';
import Button from './Button';
import styles from '@/styles/Projects.module.css';

export default function Card({ title, description, image, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className={styles.image}
        />
      </div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button href={link}>View Project</Button>
      </div>
    </div>
  );
}
