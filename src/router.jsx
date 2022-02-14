import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import SubscribersPage from 'pages/subscribers-page/subscribers-page';
import AuthPage from 'pages/auth-page/auth-page';
import ChatPage from 'pages/chat-page/chat-page';
import LikedPosts from 'pages/liked-posts/liked-posts';
import CreatePostPage from 'pages/create-post-page/create-post-page';
import Navbar from 'components/navbar/navbar';
import { ROUTES } from 'constants/routes';
import MainPage from 'pages/main-page/main-page';
import ProfilePage from 'pages/profile-page/profile-page';
import LayoutContainer from 'components/layout-container/layout-container';
import RootModal from 'components/modals/root-modal/root-modal';
import RootNotification from 'components/root-notification/root-notification';
import SubscribedPage from 'pages/subscribed-page/subscribed-page';

export default function Router({ user, theme }) {
  const ProtectedRoutes = (
    <Switch>
      <Route from={ROUTES.MAIN} exact component={MainPage} />
      <Route from={ROUTES.PROFILE} exact component={ProfilePage} />
      <Route from={ROUTES.PROFILE + ':id'} exact component={ProfilePage} />
      <Route from={ROUTES.CREATE_POST} exact component={CreatePostPage} />
      <Route from={ROUTES.LIKED_POSTS+':id'} exact component={LikedPosts} />
      <Route from={ROUTES.SUBS + ':id'} exact component={SubscribersPage} />
      <Route from={ROUTES.SUBSD + ':id'} exact component={SubscribedPage} />
      <Route from={ROUTES.CHAT} exact component={ChatPage} />


      <Redirect to={ROUTES.MAIN} />

    </Switch>
  );

  const AuthorizationRoutes = (
    <Switch>
      <Route from={ROUTES.MAIN} exact component={MainPage} />
      <Route from={ROUTES.AUTH} exact component={AuthPage} />

      <Route from={ROUTES.PROFILE + ':id'} exact component={ProfilePage} />
      <Route from={ROUTES.SUBS + ':id'} exact component={SubscribersPage} />
      <Route from={ROUTES.SUBSD + ':id'} exact component={SubscribedPage} />

      <Redirect to={ROUTES.MAIN} />
    </Switch>
  );

  return (
    <>
      <BrowserRouter>
        <Navbar user={user} />
        <LayoutContainer theme={theme}>
          {user ? ProtectedRoutes : AuthorizationRoutes}
          <RootModal theme={theme} />
        </LayoutContainer>
      </BrowserRouter>
      <RootNotification />
    </>
  );

}
