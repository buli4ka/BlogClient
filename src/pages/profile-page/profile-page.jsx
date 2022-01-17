import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import ProfileUserInfo from 'pages/profile-page/profile-info/ profile-user-info';
import PostList from 'components/post-list/post-list';
import { userSelector } from 'store/user-slice';
import { useGetAuthorByIdQuery } from 'api/user-api';
import Loader from 'components-ui/loader';
import ProfileAuthorInfo from 'pages/profile-page/profile-info/profile-author-info';

const ProfilePage = () => {
  const user = useSelector(userSelector).user;
  const authorId = useParams().id;
  const history = useHistory();
  const { data: userData, isFetching, isSuccess, isError } = useGetAuthorByIdQuery(authorId ?? user?.id) ;

  useEffect(() => {
    if (isError) history.replace('/');
  }, [isError, history]);

  if (isFetching || !isSuccess)
    return <Loader />;

  return (
    <div>
      {authorId === user?.id || authorId===undefined ? <ProfileUserInfo user={userData} />:<ProfileAuthorInfo author={userData} currentUser={user} />}
      <PostList posts={userData?.posts} title="Posts" isReload />
    </div>
  );
};

export default ProfilePage;
