import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/su_logo.png"
          width={50} // The width of the image in pixels at 1x scaling
          height={50} // The height of the image in pixels at 1x scaling
          alt="SU Logo"
        />
      </div>
      <nav>
        <ul className={styles.navigation}>
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