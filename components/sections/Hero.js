// components/sections/Hero.js
'use client';

import styles from '@/styles/Hero.module.css';
import Image from 'next/image';
import SocialLinks from '../UI/SocialLinks';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay} />
      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={styles.left}
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          
          <h1 className={styles.heading}>
  Hi, I'm <span>Pavan Hegde</span>
</h1>
<h2 className={styles.subheading}>Backend-Focused Software Developer</h2>
<p className={styles.description}>
  I have hands-on experience in building backend systems using Node.js, Express, PostgreSQL, Django, and RESTful APIs, along with a solid understanding of frontend development to deliver full-stack web solutions.
</p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Pavan Hegde"
            width={400}
            height={400}
            className={styles.profileImage}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
                                  