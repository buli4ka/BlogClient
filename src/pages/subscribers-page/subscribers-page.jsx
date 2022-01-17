import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useGetSubscribersQuery } from 'api/user-api';
import Loader from 'components-ui/loader/loader';
import UserList from 'components/user-list/user-list';
import { showErrorNotification } from 'store/notification-slice';

const SubscribersPage = () => {
  const authorId = useParams().id;
  const history = useHistory();
  const { data, isFetching, isSuccess, isError, error } = useGetSubscribersQuery(authorId) ;

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      dispatch(showErrorNotification(error.data.message));
      history.replace('/');
    }

  }, [isError, history, dispatch, error?.data?.message]);

  if (isFetching)
    return <Loader />;

  return (
    <div>
      {isSuccess && <UserList users={data} title="User subscribers" />}
    </div>
  );
};

export default SubscribersPage;
