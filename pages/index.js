import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import {format} from 'date-fns';

const Home = ({ posts }) => {
  return (
    <Layout>
      <div>
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