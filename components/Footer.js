import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Student Union @ SFSU. All rights reserved.</p>
    </footer>
  );
};

export default Footer;