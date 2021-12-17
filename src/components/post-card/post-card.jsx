import React from 'react';

import styles from './post-card.module.css';

import Button from 'components-ui/button/button';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as CommentIcon } from 'assets/icons/comment.svg';
import { normalizeDate } from 'utils/normalize-date';

const PostCard = ({ post }) => {

  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={post.previewImage}
        alt="Post"
      />
      <div className={styles.container}>
        <h4>
          <b>{post.title}</b>
        </h4>
        <p className={styles.text}>{post.text}</p>
        <div>
          <Button
            className={styles.quantityButton} renderIcon={() => <HeartIcon />}
            title={''+post.quantityOfLikes}
          />
          <Button
            className={styles.quantityButton} renderIcon={() => <CommentIcon />}
            title={''+post.quantityOfComments}
          />
        </div>
        <span className={styles.createdSpan}>{normalizeDate(post.createdAt)}</span>

      </div>
    </div>
  );
};

export default PostCard;
