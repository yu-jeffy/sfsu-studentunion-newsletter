import Link from 'next/link';
import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  // Assuming post has slug, title, excerpt, and date properties
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}><Link href={`/posts/${post.slug}`}>{post.title}</Link></h3>
        <p className={styles.author}>{post.author}</p>
        <p className={styles.date}>{post.date}</p>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <Link className={styles.readMore} href={`/posts/${post.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;