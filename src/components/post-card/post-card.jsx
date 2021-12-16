import React from 'react';

import styles from './post-card.module.css';

import { normalizeDate } from 'utils/normalize-date';
const PostCard = ({ post }) => {

  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        // onClick={() => history.push(`/detail/${post.id}`)}
        src={post.previewImage}
        alt="Post"
      />
      <div className={styles.container}>
        <h4>
          <b>{post.title}</b>
        </h4>
        <p className={styles.text}>{post.text}</p>
        <span>{normalizeDate(post.createdAt)}</span>
      </div>
    </div>
  );
};

export default PostCard;
