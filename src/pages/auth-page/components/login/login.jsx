import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './login.module.css';

import { ROUTES } from 'constants/routes';
import Input from 'components-ui/input/input';
import Button from 'components-ui/button/button';
import { login } from 'store/user-slice';


const Login = () => {
  const [user, setUser] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => setUser({ ...user, [name]: value });

  const validationHandler = async e => {
    e.preventDefault();

    let result = await dispatch(login(user));

    if (result)
      return;
    history.push(ROUTES.MAIN);

  };

  return (
    <form className={styles.form} onSubmit={validationHandler}>
      <Input
        className={styles.userInput} name="username"
        value={user.username}
        onChange={handleChange}
        type="text" placeholder="Username"
      />
      <Input
        className={styles.userInput} name="hashedPassword"
        value={user.hashedPassword}
        onChange={handleChange}
        type="password" placeholder="Password"
      />
      <Button className={styles.submitButton} title="Submit" type="submit" />

    </form>
  );
};

export default Login;
