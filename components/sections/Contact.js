// components/sections/Contact.js
import SectionTitle from '../UI/SectionTitle';
import ContactForm from '../Forms/ContactForm';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <SectionTitle title="Hire Me" subtitle="Let's work together on your next project." />
      <ContactForm />
    </section>
  );
}
