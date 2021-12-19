import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import LikedPosts from 'pages/liked-posts/liked-posts';
import CreatePostPage from 'pages/create-post-page/create-post-page';
import Navbar from 'components/navbar/navbar';
import { ROUTES } from 'constants/routes';
import MainPage from 'pages/main-page/main-page';
import ProfilePage from 'pages/profile-page/profile-page';
import LayoutContainer from 'components/layout-container/layout-container';
import RootModal from 'components/modals/root-modal/root-modal';
import RootNotification from 'components/root-notification/root-notification';
import AuthorProfilePage from 'pages/author-profile-page/author-profile-page';

export default function Router({ user, error, theme }) {
  const ProtectedRoutes = (
    <Switch>
      <Route from={ROUTES.MAIN} exact component={MainPage} />
      <Route from={ROUTES.PROFILE} exact component={ProfilePage} />
      <Route from={ROUTES.PROFILE + ':id'} exact component={AuthorProfilePage} />
      <Route from={ROUTES.CREATE_POST} exact component={CreatePostPage} />
      <Route from={ROUTES.LIKED_POSTS+':id'} exact component={LikedPosts} />


      <Redirect to={ROUTES.MAIN} />

    </Switch>
  );

  const AuthorizationRoutes = (
    <Switch>
      <Route from={ROUTES.MAIN} exact component={MainPage} />
      <Route from={ROUTES.PROFILE + ':id'} exact component={AuthorProfilePage} />
      <Redirect to={ROUTES.MAIN} />
    </Switch>
  );

  return (
    <>
      <BrowserRouter>
        <Navbar user={user} />
        <LayoutContainer theme={theme}>
          {user ? ProtectedRoutes : AuthorizationRoutes}
          <RootModal />
        </LayoutContainer>
      </BrowserRouter>
      <RootNotification />
    </>
  );

}
