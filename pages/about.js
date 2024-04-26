import Layout from '../components/Layout';
import styles from './about.module.css';
import Head from 'next/head';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About - SFSU Student Union</title>
      </Head>
      <div className={styles.about}>
        <h1>About Us</h1>
        <p>Welcome to the Student Union at San Francisco State University! We are a vibrant community of student leaders dedicated to advocating for the rights and interests of our fellow students. As your representatives, we work tirelessly to ensure that your voice is heard both on and off campus.</p>

        <h2>Our Mission</h2>
        <p>Our mission is to empower students, represent your concerns, and provide support on issues that matter to you. Whether it’s addressing academic policies, improving student services, or advocating for campus improvements, we are committed to making SFSU a better place for all.</p>

        <h2>Our Advocacy</h2>
        <p>We are at the forefront of significant movements, not just within the university but also in broader societal issues. We stand in solidarity with faculty and various campus initiatives, supporting efforts such as teacher strikes for equitable compensation, resisting tuition increases, and participating in local and global concerns, including peaceful protests and more. Our activism is aimed at creating a just and equitable society for everyone.</p>

        <h2>Get Involved</h2>
        <p>If you're passionate about making a difference and want to be part of our dynamic team, we encourage you to get involved. Join us to help shape the future of SFSU and ensure that our university is responsive to the needs of its students.</p>

      </div>
    </Layout>
  );
};

export default About;
