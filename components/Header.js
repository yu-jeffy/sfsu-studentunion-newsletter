import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/su_logo.png"
          width={100} // The width of the image in pixels at 1x scaling
          height={100} // The height of the image in pixels at 1x scaling
          alt="SU Logo"
          layout="responsive" // This will make the image responsive
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