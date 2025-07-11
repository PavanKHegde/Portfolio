// components/UI/SocialLinks.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const links = [
  { href: 'https://www.linkedin.com/in/pavankhegde/', icon: '/icons/linkedin.svg', alt: 'LinkedIn' },
  { href: 'https://github.com/PavanKHegde', icon: '/icons/github.svg', alt: 'GitHub' },
  { href: 'mailto:pavanhegde777@gmail.com', icon: '/icons/email.svg', alt: 'Email' },
];

export default function SocialLinks() {
  return (
    <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
      {links.map((link, i) => (
        <motion.div
          key={link.href}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link href={link.href} target="_blank">
            <Image src={link.icon} alt={link.alt} width={28} height={28} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
