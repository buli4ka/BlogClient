import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './user-card.module.css';

import noImage from 'assets/icons/NoImage34.png';
import { ROUTES } from 'constants/routes';


const UserCard = ({ user }) => {
  const history = useHistory();

  console.log(user);

  return (
    <div className={styles.author} onClick={()=>history.push(ROUTES.PROFILE+user.id)}>
      <img src={user.iconUrl ?? noImage} />
      <span>
        {user.username}
      </span>
    </div>
  );
};

export default UserCard;
