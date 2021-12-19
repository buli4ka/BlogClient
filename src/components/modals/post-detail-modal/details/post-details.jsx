import React from 'react';

import styles from './post-details.module.css';

import noImage from 'assets/icons/NoImage.png';
import Gallery from 'components-ui/gallery/gallery';
const PostDetails = (props) => {
  const { id, author, createdAt, postComments, postLikes, text, title, updatedAt, imageUrls } = props.post;

  return (
    <div>
      <div className={styles.author}>
        <img src={author.iconUrl ?? noImage} />
        <span>
          {author.username}
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.gallery}>
          <Gallery images={imageUrls} />
        </div>
        <div className={styles.info}>

          <span className={styles.title}>{title}</span>
          <div>
            <span>
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
