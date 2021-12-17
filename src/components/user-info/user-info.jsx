import React, { useState } from 'react';

import styles from './user-info.module.css';

import Input from 'components-ui/input/input';
import Button from 'components-ui/button/button';

const UserInfo = ({ user }) => {

  return (
    <div className={styles.userInfo}>
      <span>
        {`Firstname - ${user.firstName}`}
      </span>
      <span>
        {`Lastname - ${user.lastName}`}
      </span>
      <span>
        {`Username - ${user.username}`}
      </span>

      <span>
        {`Biography - ${user.biography}`}
      </span>


    </div>
  );
};

export default UserInfo;
