import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { changeTheme, selectTheme } from '../../store/theme-slice';
import { MODAL_SIZES, MODALS } from '../../constants/modals';

import styles from './navbar.module.css';

import { logout } from 'store/user-slice';
import Button from 'components-ui/button/button';
import { ReactComponent as UserIcon } from 'assets/icons/user-icon.svg';
import { ReactComponent as SunIcon } from 'assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from 'assets/icons/moon.svg';
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';
import useModal from 'hooks/use-modal';
import { ROUTES } from 'constants/routes';


const Navbar = (user) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const history = useHistory();
  const [authenticateModal] = useModal(MODALS.AUTHENTICATE, {
    size: MODAL_SIZES.LARGE,
  });

  const logoutHandler = () => {
    dispatch(changeTheme(!theme));
    if (history) {
      history.push(ROUTES.MAIN);
    }
  };

  return (
    <nav className={styles.nav}>
      <Button
        className={styles.logoButton} renderIcon={() => <LogoIcon />} onClick={() => history ? history.push(ROUTES.MAIN):null}
      />

      {user.user
        ? <Button className={styles.navButton} renderIcon={() => <UserIcon />} onClick={()=>dispatch(logout())} title="Logout" />

        :
        <Button className={styles.navButton} renderIcon={() => <UserIcon />} onClick={()=>authenticateModal()} title="Authenticate" />}
      <Button className={styles.navButton} renderIcon={() => theme ? <MoonIcon /> : <SunIcon />} title={theme?'Light':'Dark'} onClick={logoutHandler} />


    </nav>
  );
};

export default Navbar;
