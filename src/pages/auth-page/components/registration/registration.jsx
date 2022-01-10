import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './registration.module.css';

import UserIconInput from 'components-ui/user-icon-input/user-icon-input';
import Textarea from 'components-ui/textarea/textarea';
import Checkbox from 'components-ui/checkbox/checkbox';
import { register } from 'store/user-slice';
import { ROUTES } from 'constants/routes';
import Input from 'components-ui/input/input';
import Button from 'components-ui/button/button';

const Registration = () => {
  const [user, setUser] = useState({});
  const [userIcon, setUserIcon] = useState();

  const history = useHistory();
  const dispatch = useDispatch();

  const changeIcon = (icon) => {
    setUserIcon(icon);
  };
  const handleChange = ({ target: { value, name } }) => setUser({ ...user, [name]: value });

  const validationHandler = async e => {
    e.preventDefault();

    let result = await dispatch(register(user, userIcon));

    if (result)
      return;
    history.push(ROUTES.MAIN);
  };

  return (
    <form className={styles.form} onSubmit={validationHandler}>
      <div className={styles.userIcon}>
        <UserIconInput
          iconPreview={user.iconUrl}
          onChange={changeIcon}
          name="image"
          accept="image/jpeg,image/png,image/jpg, image/gif"
        />
      </div>
      <Input
        className={styles.userInput} name="firstName"
        value={user.firstName}
        onChange={handleChange}
        placeholder="FirstName"
      />
      <Input
        className={styles.userInput} name="lastName"
        value={user.lastName}
        onChange={handleChange}
        placeholder="LastName"
      />
      <Input
        className={styles.userInput} name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <Textarea
        className={styles.userInput} name="biography"
        value={user.biography}
        onChange={handleChange}
        placeholder="Biography"
      />
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
      <Checkbox
        name="isPrivate"
        onChange={handleChange}
        text="Is private account"
        value={user.isPrivate}
      />
      <Button className={styles.submitButton} title="Submit" type="submit" />

    </form>
  );
};

export default Registration;
