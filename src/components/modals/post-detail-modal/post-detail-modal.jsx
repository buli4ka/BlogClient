import React from 'react';

import styles from './post-detail-modal.module.css';
import PostDetails from './details/post-details';

import { useGetPostByIdQuery } from 'api/post-api';
import Loader from 'components-ui/loader';

const PostDetailModal = ({ postId }) => {
  const {
    data: post,
    isLoading,
  } = useGetPostByIdQuery(postId);

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}
      {!isLoading && (
        <PostDetails post={post} />)}
    </div>
  );
};

export default PostDetailModal;
