import React, { useMemo, useState } from 'react';

import styles from './auth-page.module.css';
import Login from './components/login/login';
import Registration from './components/registration/registration';

const ACTION = [
  { label: 'Login', component: Login },
  { label: 'Registration', component: Registration },

];

const AuthPage = () => {
  const [action, setAction] = useState('Login');
  const ActionComponent = useMemo(() => ACTION.find(({ label })=>label===action).component, [action]);

  return (
    <div className={styles.container}>
      <h1
        className={styles.header}
        onClick={()=>setAction(action==='Login' ? 'Registration': 'Login')}
      >
        {action}
      </h1>
      <div className={styles.components}>
        <ActionComponent />
      </div>

    </div>
  );
};

export default AuthPage;
