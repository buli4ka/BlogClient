import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './post-card.module.css';

import Button from 'components-ui/button/button';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as RedHeartIcon } from 'assets/icons/heart-red.svg';
import { normalizeDate } from 'utils/normalize-date';
import noImage from 'assets/icons/NoImage34.png';
import useModal from 'hooks/use-modal';
import { MODAL_SIZES, MODALS } from 'constants/modals';
import { addLikeToPost } from 'store/post-slice';

const PostCard = ({ post }) => {
  // const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const [postModal] = useModal(MODALS.POST, {
    size: MODAL_SIZES.LARGE,
  });

  const addLike = async ()=>{
    await dispatch(addLikeToPost(post.id));
    window.location.reload();
  };

  return (
    <div className={styles.card}>
      <img
        onClick={()=>postModal({ postId: post.id })}
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
            title={post.quantityOfLikes}
            onClick={addLike}
          />
          {/*<Button*/}
          {/*  renderIcon={() => <CommentIcon />}*/}
          {/*  title={''+post.quantityOfComments}*/}
          {/*/>*/}
        </div>
        <span className={styles.createdSpan}>{normalizeDate(post.createdAt)}</span>

      </div>
    </div>
  );
};

export default PostCard;
