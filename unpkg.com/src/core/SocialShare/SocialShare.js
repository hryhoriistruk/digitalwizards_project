import React from 'react';
import PropTypes from 'prop-types';

const SocialShare = ({ url, title, socialMedia }) => {
  const shareUrl = (platform) => {
    let shareLink = '';
    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}&title=${title}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
        break;
      case 'pinterest':
        shareLink = `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`;
        break;
      default:
        break;
    }
    window.open(shareLink, '_blank');
  };

  return (
    <div className="social-share">
      {socialMedia.map((platform, index) => (
        <button key={index} className={`social-share-button ${platform}`} onClick={() => shareUrl(platform)}>
          <i className={`fab fa-${platform}`} />
        </button>
      ))}
    </div>
  );
};

SocialShare.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  socialMedia: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SocialShare;