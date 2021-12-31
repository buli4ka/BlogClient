import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

import styles from './post-card.module.css';

import Button from 'components-ui/button/button';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as ClosedBinIcon } from 'assets/icons/closed-bin.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';
import { normalizeDate } from 'utils/normalize-date';
import noImage from 'assets/icons/NoImage34.png';
import useModal from 'hooks/use-modal';
import { MODAL_SIZES, MODALS } from 'constants/modals';
import { addLikeToPost, deletePost } from 'store/post-slice';
import { userSelector } from 'store/user-slice';

const PostCard = ({ post }) => {
  const currentUser = useSelector(userSelector).user;
  const dispatch = useDispatch();
  const history = useHistory();

  const [postModal] = useModal(MODALS.POST, {
    size: MODAL_SIZES.LARGE,
  });

  const addLike = async ()=>{
    await dispatch(addLikeToPost(post.id));
    window.location.reload();
  };

  const removePost = async ()=>{
    await dispatch(deletePost(post.id));
    window.location.reload();
  };

  const editPost = () => {
    history.push(ROUTES.CREATE_POST, { postId: post?.id });
  };

  return (
    <div className={styles.card}>

      <img
        onClick={()=>postModal({ postId: post.id })}
        className={styles.img}
        src={post.previewImage?? noImage}
        alt="Post"
      />
      {(currentUser?.id === post.authorId) && (
        <>
          <Button
            className={styles.bin}
            renderIcon={() => <ClosedBinIcon />}
            onClick={removePost}
          />
          <Button
            className={styles.bin}
            renderIcon={() => <EditIcon />}
            onClick={editPost}
          />
        </>
      )}
      <div className={styles.container}>
        <h4>
          <b>{post.title}</b>
        </h4>
        <p className={styles.text}>{post.text}</p>
        <div className={styles.quantityButtons}>
          <Button
            renderIcon={() => <HeartIcon />}
            title={''+post.quantityOfLikes}
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
