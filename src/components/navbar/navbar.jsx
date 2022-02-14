import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './navbar.module.css';

import { changeTheme, selectTheme } from 'store/theme-slice';
import { logout } from 'store/user-slice';
import Button from 'components-ui/button/button';
import { ReactComponent as UserIcon } from 'assets/icons/user-icon.svg';
import { ReactComponent as LogoutIcon } from 'assets/icons/logout.svg';
import { ReactComponent as SunIcon } from 'assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from 'assets/icons/moon.svg';
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';
import { ReactComponent as CreatePost } from 'assets/icons/craete-post.svg';
import { ReactComponent as ChatIcon } from 'assets/icons/chat.svg';
import { ROUTES } from 'constants/routes';


const Navbar = (user) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(logout());
    history.push(ROUTES.MAIN);
    window.location.reload();

  };

  return (
    <nav className={styles.nav}>
      <Button
        className={styles.logoButton} renderIcon={() => <LogoIcon />} onClick={() => history.push(ROUTES.MAIN)}
      />

      {user.user
        ? (
          <>
            <Button className={styles.navButton} renderIcon={() => <LogoutIcon />} onClick={logoutHandler} title="Logout" />
            <Button className={styles.navButton} renderIcon={() => <UserIcon />} onClick={() => history.push(ROUTES.PROFILE)} title="Profile" />
            <Button className={styles.navButton} renderIcon={() => <ChatIcon />} onClick={()=>history.push(ROUTES.CHAT)} title="Chat" />
            <Button className={styles.navButton} renderIcon={() => <CreatePost />} onClick={()=>history.push(ROUTES.CREATE_POST)} title="Create post" />

          </>
        )

        :<Button className={styles.navButton} renderIcon={() => <UserIcon />} onClick={()=>history.push(ROUTES.AUTH)} title="Authenticate" />}
      <Button className={styles.navButton} renderIcon={() => theme ? <MoonIcon /> : <SunIcon />} title={theme?'Light':'Dark'} onClick={()=> dispatch(changeTheme(!theme))} />


    </nav>
  );
};

export default Navbar;
