import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import UpdateModalContainer from './update-modal-container/update-modal-container';

import { userSelector } from 'store/user-slice';
import { useGetUserByIdQuery } from 'api/user-api';
import Loader from 'components-ui/loader/loader';

const UpdateUserModal = () => {
  const currentUser = useSelector(userSelector).user;
  const { data: userToUpdate, isFetching, isSuccess, isError } = useGetUserByIdQuery(currentUser?.id);
  const history = useHistory();

  useEffect(() => {
    if (isError) history.replace('/');
  }, [isError, history, isSuccess, userToUpdate]);

  if (isFetching || !isSuccess)
    return <Loader />;

  if (isSuccess)
    return (
      <div>
        <div><h1>Update user</h1></div>
        <UpdateModalContainer userToUpdate={userToUpdate} />
      </div>
    );
};

export default UpdateUserModal;
