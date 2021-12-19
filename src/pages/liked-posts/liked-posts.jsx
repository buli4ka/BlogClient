import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import PostList from 'components/post-list/post-list';
import { useGetPreviewsByIdQuery } from 'api/post-api';
import Loader from 'components-ui/loader/loader';

const LikedPosts = () => {
  const userId = useParams().id;
  const history = useHistory();

  const { data: posts, isFetching, isError,
  } = useGetPreviewsByIdQuery(userId);

  useEffect(() => {
    if (isError) history.replace('/');
  }, [isError, history]);

  if (isFetching)
    return <Loader />;
  console.log(posts);

  return (
    <div>
      <PostList posts={posts} title="Liked Posts" />
    </div>
  );
};

export default LikedPosts;
