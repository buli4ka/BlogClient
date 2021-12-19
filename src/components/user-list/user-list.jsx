import React from 'react';

import styles from './user-list.module.css';

import UserCard from 'components/user-card/user-card';

const UserList = ({ users, title }) => {
  if (!users.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>
        Users not found!
      </h1>
    );
  }

  return (
    <div className={styles.component}>
      <h1 style={{ textAlign: 'center' }}>
        {title}
      </h1>
      <div className={styles.content}>
        {users.map(user => {
          return (<UserCard key={user.id} user={user} />);

        })}

      </div>
    </div>
  );
};

export default UserList;
