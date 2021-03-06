import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './post-card.module.css';

import { ROUTES } from 'constants/routes';
import Button from 'components-ui/button/button';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as HeartRedIcon } from 'assets/icons/heart-red.svg';
import { ReactComponent as ClosedBinIcon } from 'assets/icons/closed-bin.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';
import { normalizeDate } from 'utils/normalize-date';
import noImage from 'assets/icons/NoImage34.png';
import useModal from 'hooks/use-modal';
import { MODAL_SIZES, MODALS } from 'constants/modals';
import { addLikeToPost, deletePost } from 'store/post-slice';
import { userSelector } from 'store/user-slice';

const PostCard = ({ post, isReload }) => {
  const { id, previewImage, authorId, text, title, createdAt, postLikes } = post;
  const currentUser = useSelector(userSelector).user;
  const dispatch = useDispatch();
  const history = useHistory();

  const [postModal] = useModal(MODALS.POST, {
    size: MODAL_SIZES.LARGE,
  });

  const addLike = async ()=>{
    await dispatch(addLikeToPost(id));
    if (isReload){
      window.location.reload();
    }
  };

  const removePost = async ()=>{
    await dispatch(deletePost(id));
  };

  const editPost = () => {
    history.push(ROUTES.CREATE_POST, { postId: id });
  };
  const renderIcon = ()=>{
    for (let i in postLikes){
      if (postLikes[i].userId=== currentUser?.id)
        return <HeartRedIcon />;
    }

    return <HeartIcon />;
  };

  return (
    <div className={styles.card}>

      <img
        onClick={()=>postModal({ postId: id })}
        className={styles.img}
        src={previewImage?? noImage}
        alt="Post"
      />
      {(currentUser?.id === authorId) && (
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
          <b>{title}</b>
        </h4>
        <p className={styles.text}>{text}</p>
        <div className={styles.quantityButtons}>
          <Button
            renderIcon={renderIcon}
            title={''+postLikes.length}
            onClick={addLike}
          />
          {/*<Button*/}
          {/*  renderIcon={() => <CommentIcon />}*/}
          {/*  title={''+post.quantityOfComments}*/}
          {/*/>*/}
        </div>
        <span className={styles.createdSpan}>{normalizeDate(createdAt)}</span>

      </div>
    </div>
  );
};

export default PostCard;
