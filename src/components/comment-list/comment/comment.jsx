import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './comment.module.css';

import AddComment from 'components/comment-list/add-comment/add-comment';
import { deletePostComment } from 'store/post-slice';
import { normalizeDate } from 'utils/normalize-date';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow-up.svg';
import { ROUTES } from 'constants/routes';
import noImage from 'assets/icons/NoImage.png';
import Button from 'components-ui/button/button';
import { ReactComponent as ClosedBinIcon } from 'assets/icons/closed-bin.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';
import { ReactComponent as ReplyIcon } from 'assets/icons/reply-arrow.svg';


const Comment = ({ comment, currentUser, isSubComment, postId }) => {
  const { id, user, text, postSubComments, createdAt, updatedAt } = comment;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isReply, setIsReply] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();


  const history = useHistory();

  const removeComment = async () => {
    await dispatch(deletePostComment(id));
  };
  const editComment = () => {
    setIsEdit(!isEdit);
    setIsReply(false);
  };
  const replyComment = () => {
    setIsReply(!isReply);
    setIsEdit(false);
  };

  return (
    <div className={styles.comment}>
      {user && (
        <div className={styles.user}>
          <div className={styles.author} onClick={() => history.push(ROUTES.PROFILE + user.id)}>
            <img src={user.iconUrl ?? noImage} alt="Icon" />
            <span>
              {user.username}
            </span>
          </div>

          <div>
            {!isSubComment && (
              <Button
                className={styles.changeButton}
                renderIcon={() => <ReplyIcon />}
                onClick={replyComment}
              />
            )}
            {(currentUser?.id === user.id) && (
              <>
                <Button
                  className={styles.changeButton}
                  renderIcon={() => <EditIcon />}
                  onClick={editComment}
                />
                {/*<Button*/}
                {/*  className={styles.changeButton}*/}
                {/*  renderIcon={() => <ClosedBinIcon />}*/}
                {/*  onClick={removeComment}*/}
                {/*/>*/}
              </>
            )}


          </div>


        </div>
      )}
      <div className={styles.commentContent}>
        <span>{text}</span>
        <div className={styles.date}>
          <span>
            {normalizeDate(createdAt)}
          </span>
          <span>
            {normalizeDate(updatedAt, false)}
          </span>
        </div>
      </div>
      {isReply && <AddComment postId={postId} commentId={id} />}
      {isEdit && <AddComment postId={postId} commentId={id} text={text} isUpdate />}

      {postSubComments.length > 0 && (
        <div className={styles.collapsed} onClick={()=>setIsCollapsed(!isCollapsed)}>
          <span>Replies</span>
          {isCollapsed ? <ArrowUp /> : <Arrow />}
        </div>
      )}
      {isCollapsed && postSubComments.map((subComment, key)=>(
        <div key={key}>
          <Comment postId={postId} comment={subComment} currentUser={currentUser} isSubComment />
        </div>
      ))}

    </div>
  );
};

export default Comment;
