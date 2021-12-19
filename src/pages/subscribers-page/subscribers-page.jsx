import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useGetSubscribersQuery } from 'api/user-api';
import Loader from 'components-ui/loader/loader';
import UserList from 'components/user-list/user-list';

const SubscribersPage = () => {
  const authorId = useParams().id;
  const history = useHistory();
  const { data, isFetching, isSuccess, isError } = useGetSubscribersQuery(authorId) ;

  useEffect(() => {
    if (isError) history.replace('/');
  }, [isError, history]);

  if (isFetching)
    return <Loader />;

  if (isSuccess)
    return (
      <div>
        <UserList users={data} title="User subscribers" />
      </div>
    );
};

export default SubscribersPage;
