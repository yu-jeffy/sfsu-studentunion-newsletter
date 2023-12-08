import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import { format } from 'date-fns';
import styles from './articles.module.css';

const Articles = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter((post) => {
    const searchContent = `${post.title} ${post.author} ${post.date} ${post.excerpt}`.toLowerCase();
    return searchContent.includes(searchTerm.toLowerCase());
  });

  return (
    <Layout>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search articles..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles.postsFeed}>
        {filteredPosts.map((post, index) => (
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

export default Articles;