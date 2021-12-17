import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ProfileUserInfo from 'components/profile-user-info/ profile-user-info';
import PostList from 'components/post-list/post-list';
import { userSelector } from 'store/user-slice';
import { useGetUserByIdQuery } from 'api/user-api';
import Loader from 'components-ui/loader';

const ProfilePage = () => {
  const user = useSelector(userSelector).user;
  const history = useHistory();
  const { data: userData, isFetching, isSuccess, isError } = useGetUserByIdQuery(user.id);

  useEffect(() => {
    if (isError) history.replace('/');
  }, [isError, history]);

  if (isFetching)
    return <Loader />;
  if (isSuccess)
    return (
      <div>
        <ProfileUserInfo user={userData} />
        <PostList posts={userData.posts} title="Posts" />
      </div>
    );
};

export default ProfilePage;
