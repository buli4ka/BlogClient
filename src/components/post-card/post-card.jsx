import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './post-card.module.css';

import Button from 'components-ui/button/button';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as CommentIcon } from 'assets/icons/comment.svg';
import { normalizeDate } from 'utils/normalize-date';
import noImage from 'assets/icons/NoImage34.png';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();

    // const showPostDetail = ()=> dispatch()
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={post.previewImage?? noImage}
        alt="Post"
      />
      <div className={styles.container}>
        <h4>
          <b>{post.title}</b>
        </h4>
        <p className={styles.text}>{post.text}</p>
        <div className={styles.quantityButtons}>
          <Button
            renderIcon={() => <HeartIcon />}
            title={''+post.quantityOfLikes}
          />
          <Button
            renderIcon={() => <CommentIcon />}
            title={''+post.quantityOfComments}
          />
        </div>
        <span className={styles.createdSpan}>{normalizeDate(post.createdAt)}</span>

      </div>
    </div>
  );
};

export default PostCard;
