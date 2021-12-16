import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import PostList from 'components/post-list/post-list';
import Loader from 'components-ui/loader';
import { useGetAllPostsQuery } from 'api/post-api';

const MainPage = () => {
  const history = useHistory();
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllPostsQuery();


  useEffect(() => {
    if (isError) history.replace('/');
  }, [isError, history]);

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    content = <PostList posts={posts} title="Posts" />;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default MainPage;
