import Layout from '../components/Layout';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contact}>
        <h1>Contact Us</h1>
        <p>If you have any questions or just want to get in touch, feel free to contact us:</p>
        <ul>
          <li>Email: contact@example.com</li>
          <li>Instagram: @ Here</li>
          <li>Discord: Link Here</li>
          <li>Contact: Text</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Contact;