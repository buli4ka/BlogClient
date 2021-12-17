import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Router from './router';
import { checkToken, userSelector } from './store/user-slice';
import Loader from './components-ui/loader';
import Navbar from './components/navbar/navbar';
import { selectTheme } from './store/theme-slice';

function App() {
  const { user, isRenewing, error } = useSelector(userSelector);
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  // useEffect(() => dispatch(checkToken()), [dispatch]);

  if (isRenewing) {
    return <Loader testId="loader" />;
  }

  return (
    <Router user={user} error={error} theme={theme} />
  );

}

export default App;
