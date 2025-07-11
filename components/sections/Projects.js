// components/sections/Projects.js
import styles from '@/styles/Projects.module.css';
import Card from '../UI/Card';

const projects = [
  {
    title: 'GrowSafe',
    description: 'A crop management platform that detects diseases and suggests fertilizers using ML.',
    image: '/images/projects/project1.jpg',
    link: 'https://github.com/PavanKHegde/GrowSafe-Models'
  },
  {
    title: 'Email Marketing App',
    description: 'Built dynamic campaigns, template managers, and Analystics integrations in ReactJS,Node.js',
    image: '/images/projects/project2.jpg',
    link: 'https://github.com/iOSApprikart/HustleBot-Backend'
  },
  {
    title: 'Spare Parts Ordering Application',
    description: 'Built an e-commerce website for ordering two-wheeler and four-wheeler parts using Django, JavaScript, HTML, and CSS.',
    image: '/images/projects/project3.jpg',
    link: 'https://github.com/PavanKHegde/Spare-Parts-Management-System'
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map(project => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
