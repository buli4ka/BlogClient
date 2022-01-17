import React from 'react';

import PostCard from '../post-card/post-card';

import styles from './post-list.module.css';


const PostList = ({ posts, title, isReload=false }) => {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>
        Posts not found!
      </h1>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        {title}
      </h1>
      <div className={styles.content}>
        {posts.map(post => {
          return (<PostCard key={post.id} post={post} isReload={isReload} />);

        })}

      </div>
    </div>
  );
};

export default PostList;
