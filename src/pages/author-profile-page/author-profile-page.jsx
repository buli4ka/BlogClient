import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileAuthorInfo from 'components/profile-info/profile-author-info';
import { useGetAuthorByIdQuery } from 'api/user-api';
import Loader from 'components-ui/loader/loader';
import PostList from 'components/post-list/post-list';
import { userSelector } from 'store/user-slice';

const AuthorProfilePage = () => {

  const authorId = useParams().id;
  const history = useHistory();
  const { data: userData, isFetching, isSuccess, isError } = useGetAuthorByIdQuery(authorId);

  useEffect(() => {
    if (isError) history.replace('/');
  }, [isError, history]);

  if (isFetching)
    return <Loader />;
  if (isSuccess)
    return (
      <div>
        <ProfileAuthorInfo author={userData} />
        <PostList posts={userData.posts} title="Posts" />
      </div>
    );
};

export default AuthorProfilePage;
