import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import MainPage from 'pages/main-page/main-page';
import Profile from 'pages/ProfilePage/Profile';
import LayoutContainer from 'components/layout-container/layout-container';
import RootModal from 'components/modals/root-modal/root-modal';
import RootNotification from 'components/root-notification/root-notification';

export default function Router({ user, error, theme }) {
  const ProtectedRoutes = (
    <Switch>
      <Route from={ROUTES.MAIN} component={MainPage} exact />
      <Route from={ROUTES.PROFILE} component={Profile} exact />
      <Redirect to={ROUTES.MAIN} />

    </Switch>
  );

  const AuthorizationRoutes = (
    <Switch>
      <Route from={ROUTES.MAIN} component={MainPage} exact />
      <Redirect to={ROUTES.MAIN} />
    </Switch>
  );

  return (
    <>
      <BrowserRouter>
        <LayoutContainer theme={theme}>
          {user ? ProtectedRoutes : AuthorizationRoutes}
          <RootModal />
        </LayoutContainer>
      </BrowserRouter>
      <RootNotification />
    </>
  );

}
