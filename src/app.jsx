import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Router from './router';
import { checkToken, userSelector } from './store/user-slice';
import Loader from './components-ui/loader';

function App() {
  const { user, isRenewing, error } = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => dispatch(checkToken()), [dispatch]);

  if (isRenewing) {
    return <Loader testId="loader" />;
  }

  return <Router user={user} error={error} />;

}

export default App;
