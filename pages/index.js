import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import { format } from 'date-fns';
import styles from './index.module.css';
import Head from 'next/head';


const Home = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>SFSU Student Union Newsletter</title>
      </Head>
      <header className={styles.headerSection}>
        <div className={styles.topHeader}>
          <h1 className={styles.topHeaderTitle}>Student Union Newsletter</h1>
        </div>

        {/* Container for horizontally organized content */}
        <div className={styles.headerContentContainer}>
          <div className={styles.headerContent}>
            <div className={styles.headerCopy}>
              <h2>Welcome to Our Newsletter</h2>
              <p>Stay updated with our latest articles and join the conversation.</p>
            </div>
            <div className={styles.headerImage}>
              <img src="/images/walkout.jpeg" alt="Header Image" />
            </div>
          </div>
        </div>
      </header>

      {/* Blog posts feed */}
      <div className={styles.postsFeed}>
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('blogs'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('blogs', filename),
      'utf-8'
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
      content,
    };
  });

  // Sort posts by date
  posts.sort((a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

  return {
    props: {
      posts: posts.map((post) => ({
        slug: post.slug,
        title: post.frontmatter.title,
        date: format(new Date(post.frontmatter.date), 'MMMM d, yyyy'),
        excerpt: post.frontmatter.excerpt,
        author: post.frontmatter.author,
      })),
    },
  };
};

export default Home;

