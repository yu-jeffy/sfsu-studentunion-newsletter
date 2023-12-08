import Layout from '../components/Layout';
import styles from './about.module.css';

const About = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <h1>About Us</h1>
        <p>
          Welcome to our blog! We are passionate about sharing knowledge and insights on various topics. Our team is dedicated to providing you with engaging content that informs, inspires, and entertains.
        </p>
        <p>
          Whether you're looking for the latest trends, expert opinions, or just a good read, we've got you covered. Thank you for visiting, and we hope you enjoy what you find here.
        </p>
      </div>
    </Layout>
  );
};

export default About;
