import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './navbar.module.css';

import { login, register } from 'store/user-slice';
import Button from 'components-ui/button/button';
import { ReactComponent as UserIcon } from 'assets/icons/user-icon.svg';

const Navbar = (user) => {
  const dispatch = useDispatch();

  const validationHandler = (userData, isLogin) => {
    isLogin ? dispatch(login(userData)) : dispatch(register(userData));
  };
  const logoutHandler = ()=>{};
  const u={
    'firstName': 'string',
    'email': 'stringstring',
    'lastName': 'stringstring',
    'username': 'stringstring',
    'hashedPassword': 'string',
    'biography': 'string',
    'isPrivate': true,
  };

  console.log(user);

  return (
    <nav className={styles.nav}>
      <Button className={styles.navButton} renderIcon={()=> <UserIcon className={styles.buttonIcon} />} title="Authenticate" onClick={() => validationHandler(u, false)} />
    </nav>
  );
};

export default Navbar;
