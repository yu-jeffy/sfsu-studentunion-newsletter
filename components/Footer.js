import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <Link className={styles.contactLink} href="https://www.instagram.com/sfsustudentunion">Instagram</Link>
        <span> | </span>
        <Link className={styles.contactLink} href="https://discord.gg/Xcn9JBczXB">Discord</Link>
      </p>
      <p>&copy; {new Date().getFullYear()} Student Union @ SFSU. All rights reserved.</p>
    </footer>
  );
};

export default Footer;