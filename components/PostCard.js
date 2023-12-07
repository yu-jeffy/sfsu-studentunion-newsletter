import Link from 'next/link';
import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  // Assuming post has id, title, excerpt, and image properties
  return (
    <div className={styles.card}>
      <img src={post.image} alt={post.title} className={styles.image} />
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <Link href={`/posts/${post.id}`}>
        <a>Read More</a>
      </Link>
    </div>
  );
};

export default PostCard;