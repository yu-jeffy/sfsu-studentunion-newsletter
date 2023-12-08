import Layout from '../components/Layout';
import styles from './contact.module.css';
import Link from 'next/link';

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contact}>
        <h1>Contact Us</h1>
        <p>If you have any questions or want to get involved, feel free to contact us:</p>
        <ul>
          <li>Instagram: @<Link className={styles.contactLink} href="https://www.instagram.com/sfsustudentunion">sfsustudentunion</Link></li>
          <li>Discord: <Link className={styles.contactLink} href="https://discord.gg/Xcn9JBczXB">Join Our Discord Server</Link></li>
        </ul>
      </div>
    </Layout>
  );
};

export default Contact;