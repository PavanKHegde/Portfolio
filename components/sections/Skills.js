// components/sections/Skills.js
import styles from '@/styles/Skills.module.css';
import Image from 'next/image';

const skills = [
  { name: 'Java', icon: '/images/icons/java.svg' },
  { name: 'Python', icon: '/images/icons/python.svg' },
  { name: 'JavaScript', icon: '/images/icons/javascript.svg' },
  { name: 'Node.js', icon: '/images/icons/nodejs.svg' },
  { name: 'Express.js', icon: '/images/icons/express.svg' },
  { name: 'Django', icon: '/images/icons/django.svg' },
  { name: 'HTML', icon: '/images/icons/html.svg' },
  { name: 'CSS', icon: '/images/icons/css.svg' },
  { name: 'React', icon: '/images/icons/react.svg' },
  { name: 'Database', icon: '/images/icons/sql.svg' },
  { name: 'Next.js', icon: '/images/icons/nextjs.svg' },

];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <h2>Skills</h2>
      <div className={styles.grid}>
        {skills.map(skill => (
          <div className={styles.skill} key={skill.name}>
            <Image src={skill.icon} alt={skill.name} width={48} height={48} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
