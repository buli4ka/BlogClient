import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/navbar';

import { ROUTES } from 'constants/routes';
import MainPage from 'pages/MainPage/MainPage';
import Profile from 'pages/ProfilePage/Profile';
import LayoutContainer from 'components/layout-container/layout-container';
import RootModal from 'components/modals/root-modal/root-modal';
import RootNotification from 'components/root-notification/root-notification';

export default function Router({ user }) {
  const ProtectedRoutes = (
    <Switch>
      <Route from={ROUTES.MAIN} render={MainPage} exact />
      <Route from={ROUTES.PROFILE} render={Profile} exact />
      <Redirect to="/" />

    </Switch>
  );

  const AuthorizationRoutes = (
    <Switch>
      <Route from={ROUTES.MAIN} render={MainPage} exact />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <BrowserRouter>
      {/*<LayoutContainer>*/}
      {user ? ProtectedRoutes : AuthorizationRoutes}
      {/*<RootModal />*/}
      {/*</LayoutContainer>*/}
    </BrowserRouter>
  );

}
