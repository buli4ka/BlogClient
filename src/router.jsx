import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import MainPage from './pages/MainPage/MainPage';
import Profile from './pages/ProfilePage/Profile';

export default function Router({ user, error }) {
  const ProtectedRoutes = (
    <Switch>
      <Route
        from={ROUTES.MAIN}
        render={MainPage}
        exact
      />
      <Route
        from={ROUTES.PROFILE}
        render={Profile}
        exact
      />

    </Switch>
  );
  const AuthorizationRoutes = (
    <Switch>
      <Route
        from={ROUTES.MAIN}
        render={MainPage}
        exact
      />

    </Switch>
  );

}
