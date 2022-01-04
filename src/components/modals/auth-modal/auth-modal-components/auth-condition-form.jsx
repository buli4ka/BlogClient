import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login, register } from '../../../../store/user-slice';
import Textarea from '../../../../components-ui/textarea/textarea';
import UserIconInput from '../../../../components-ui/user-icon-input/user-icon-input';
import Checkbox from '../../../../components-ui/checkbox/checkbox';

import styles from './auth-condition-form.module.css';

import Input from 'components-ui/input/input';
import Button from 'components-ui/button/button';


const AuthConditionForm = ({ condition }) => {
  const [user, setUser] = useState({});
  const [userIcon, setUserIcon] = useState();
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => setUser({ ...user, [name]: value });

  const changeIcon = (icon) => {
    setUserIcon(icon);
  };

  const validationHandler = async e => {
    e.preventDefault();
    condition
      ?
      await dispatch(login(user))
      :
      await dispatch(register(user, userIcon));
  };

  const Login = (
    <>
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
    </>
  );
  const Register = (
    <>
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
      {Login}
      <Checkbox
        name="isPrivate"
        onChange={handleChange}
        text="Is private account"
        value={user.isPrivate}
      />
    </>
  );

  return (
    <form className={styles.form} onSubmit={validationHandler}>
      {condition ? Login : Register}
      <Button className={styles.submitButton} title="Submit" type="submit" />
    </form>
  );
};

export default AuthConditionForm;
