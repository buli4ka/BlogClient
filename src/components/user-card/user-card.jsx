import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './user-card.module.css';

import noImage from 'assets/icons/NoImage34.png';
import { ROUTES } from 'constants/routes';


const UserCard = ({ user }) => {
  const history = useHistory();

  return (
    <div className={styles.userInfo} onClick={()=>history.push(ROUTES.PROFILE+user.id)}>
      <div className={styles.userIcon}>
        <img src={user.iconUrl ?? noImage} alt="Icon" />
      </div>
      <div className={styles.username}>
        <span>
          {user.username}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
