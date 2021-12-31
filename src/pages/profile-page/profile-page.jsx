import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import ProfileUserInfo from 'components/profile-info/ profile-user-info';
import PostList from 'components/post-list/post-list';
import { userSelector } from 'store/user-slice';
import { useGetUserByIdQuery } from 'api/user-api';
import Loader from 'components-ui/loader';
import ProfileAuthorInfo from 'components/profile-info/profile-author-info';

const ProfilePage = () => {
  const user = useSelector(userSelector).user;
  const authorId = useParams().id;
  const history = useHistory();
  const { data: userData, isFetching, isSuccess, isError } = useGetUserByIdQuery(authorId ?? user.id) ;

  useEffect(() => {
    if (isError) history.replace('/');
  }, [isError, history]);

  if (isFetching || !isSuccess)
    return <Loader />;

  return (
    <div>
      {authorId === user.id || authorId===undefined ? <ProfileUserInfo user={userData} />:<ProfileAuthorInfo author={userData} />}
      <PostList posts={userData?.posts} title="Posts" />
    </div>
  );
};

export default ProfilePage;
