import React from 'react';

import styles from './user-info.module.css';


const UserInfo = ({ user }) => {

  return (
    <div className={styles.userInfo}>
      <div>
        <span className={styles.key}>Firstname - </span>
        <span className={styles.value}>{user.firstName}</span>
      </div>

      <div>
        <span className={styles.key}>Lastname - </span>
        <span className={styles.value}>{user.lastName}</span>
      </div>
      <div>
        <span className={styles.key}>Username - </span>
        <span className={styles.value}>{user.username}</span>
      </div>

      <div className={styles.biography}>
        <span className={styles.key}>Biography - </span>
        <span className={styles.value}>{user.biography}</span>
      </div>


    </div>
  );
};

export default UserInfo;
