import styles from './ShareButtons.module.css';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className={styles.shareButtons}>
      <div>
        {/* Facebook Share Button */}
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        {/* Twitter Share Button */}
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        {/* LinkedIn Share Button (if needed) */}
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        {/* Add more share buttons as needed */}
      </div>
    </div>
  );
};

export default ShareButtons;