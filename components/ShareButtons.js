import {
    FacebookShareButton,
    TwitterShareButton,
    InstagramShareButton,
  } from 'react-share';
  import { FacebookIcon, TwitterIcon, InstagramIcon } from 'react-share';
  import styles from './ShareButtons.module.css'; // You will create this CSS module later
  
  const ShareButtons = ({ post }) => {
    // Assuming post has url, title properties
    return (
      <div className={styles.shareButtons}>
        <FacebookShareButton url={post.url} quote={post.title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={post.url} title={post.title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        {/* Instagram does not provide a direct sharing API */}
      </div>
    );
  };
  
  export default ShareButtons;