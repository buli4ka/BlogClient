import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './add-comment.module.css';

import { addCommentToPost } from 'store/post-slice';
import Input from 'components-ui/input/input';
import Button from 'components-ui/button/button';

const AddComment = ({ postId, commentId, text, isUpdate }) => {
  const [comment, setComment] = useState({ postId, text, mainCommentId: commentId });
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => setComment({ ...comment, [name]: value });

  const addComment = async ()=>{
    await dispatch(addCommentToPost(comment, isUpdate));
    setComment({ postId, text: '', mainCommentId: commentId });
  };

  return (
    <form className={styles.userInput}>
      <Input
        name="text"
        value={comment?.text}
        onChange={handleChange}
        placeholder="Add your comment"
      />
      <Button onClick={addComment} title="Submit" />
    </form>
  );
};

export default AddComment;
