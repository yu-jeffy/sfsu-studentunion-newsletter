import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/images/su_logo.png"
              width={50} // The width of the image in pixels at 1x scaling
              height={50} // The height of the image in pixels at 1x scaling
              alt="SU Logo"
            />
          </Link>
        </div>
        <Link href="/">
          <h1 className={styles.title}>
            Student Union <span className={styles.break}>@ SFSU</span>
          </h1>
        </Link>
      </div>
      <nav className={styles.navContainer}>
        <div className={styles.hamburgerContainer}>
          <button className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <ul className={`${styles.navigation} ${isOpen ? styles.open : ''}`}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/articles">
              Articles
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;