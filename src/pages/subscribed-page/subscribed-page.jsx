import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useGetSubscribedQuery } from 'api/user-api';
import Loader from 'components-ui/loader/loader';
import UserList from 'components/user-list/user-list';
import { showErrorNotification } from 'store/notification-slice';

const SubscribedPage = () => {
  const authorId = useParams().id;
  const history = useHistory();
  const { data, isFetching, isSuccess, isError, error } = useGetSubscribedQuery(authorId) ;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      dispatch(showErrorNotification(error.data.message));
      history.goBack();
    }

  }, [isError, history, dispatch, error?.data?.message]);

  if (isFetching)
    return <Loader />;

  return (
    <div>
      {(isSuccess && data) && <UserList users={data} title="User subscribed" />}
    </div>
  );
};

export default SubscribedPage;
