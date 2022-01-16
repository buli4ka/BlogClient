import React, { useState } from 'react';

import styles from './comment-list.module.css';
import Comment from './comment/comment';
import AddComment from './add-comment/add-comment';

import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow-up.svg';

const CommentList = ({ comments, postId, user }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={()=>setIsCollapsed(!isCollapsed)}>
        <h2>Comments</h2>
        {isCollapsed ? <ArrowUp /> : <Arrow />}
      </div>
      {user && (
        <AddComment postId={postId} />
      )}

      {isCollapsed && comments.map((comment, key)=>
        (<Comment key={key} comment={comment} currentUser={user} postId={postId} />),
      )}
    </div>
  );
};

export default CommentList;
