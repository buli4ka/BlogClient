import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useGetSubscribedQuery } from 'api/user-api';
import Loader from 'components-ui/loader/loader';
import UserList from 'components/user-list/user-list';

const SubscribedPage = () => {
  const authorId = useParams().id;
  const history = useHistory();
  const { data, isFetching, isSuccess, isError } = useGetSubscribedQuery(authorId) ;

  useEffect(() => {
    if (isError) history.replace('/');
  }, [isError, history]);

  if (isFetching)
    return <Loader />;


  if (isSuccess)
    return (
      <div>
        <UserList users={data} title="User subscribed" />
      </div>
    );
};

export default SubscribedPage;
