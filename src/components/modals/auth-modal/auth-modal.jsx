import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './auth-modal.module.css';
import AuthConditionForm from './auth-modal-components/auth-condition-form';
const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true);

  const authChoice = (e, action)=>{
    e.preventDefault();
    setIsLogin(action);
  };

  return (
    <div className={styles.container}>
      <div className={styles.authSelectors}>
        <button className={classnames({ [styles.authSelectorPressed]: isLogin })} onClick={(e) => authChoice(e, true)}>Login</button>
        <button className={classnames({ [styles.authSelectorPressed]: !isLogin })} onClick={(e) => authChoice(e, false)}>Registration</button>
      </div>
      <AuthConditionForm condition={isLogin} />
    </div>
  );
};

export default AuthModal;
