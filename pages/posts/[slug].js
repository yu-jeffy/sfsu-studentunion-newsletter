import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Layout from '../../components/Layout';
import styles from './post.module.css';
import ShareButtons from '../../components/ShareButtons';


const PostPage = ({ frontmatter, content, slug }) => {
  const htmlContent = marked(content);
  // Construct the full URL for the post using the slug
  // Replace `your-domain.com` with your actual domain
  const fullUrl = `https://sfsu-studentunion-newsletter.vercel.app/posts/${slug}`;

  return (
    <Layout>
      <article className={styles.post}>
        <h1>{frontmatter.title}</h1>
        <p className={styles.author}>By {frontmatter.author}</p>
        <div className={styles.meta}>Posted on {frontmatter.date}</div>
        {/* Share buttons component */}
        <ShareButtons url={fullUrl} title={frontmatter.title} />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </Layout>
  );
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('blogs'));

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(
        path.join('blogs', slug + '.md'),
        'utf-8'
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        props: {
            frontmatter,
            content,
            slug,
        },
    };
};

export default PostPage;