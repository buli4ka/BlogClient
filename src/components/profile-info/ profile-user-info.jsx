import React from 'react';
import { useHistory } from 'react-router-dom';

import UserInfo from '../user-info/user-info';

import styles from './profile-user-info.module.css';

import UserIconInput from 'components-ui/user-icon-input/user-icon-input';
import Button from 'components-ui/button/button';
import { ROUTES } from 'constants/routes';

const ProfileUserInfo = ({ user }) => {
  const history = useHistory();

  const openLikedPosts = ()=>{
    history.push(ROUTES.LIKED_POSTS+user.id);
  };

  return (
    <div className={styles.profileInfo}>
      <div className={styles.avatarInfo}>
        <UserIconInput
          iconPreview={user?.iconUrl}
          name="image"
          disabled
          accept="image/jpeg,image/png,image/jpg"
        />
        <div className={styles.subs}>
          <Button onClick={() => history.push(ROUTES.SUBS+user.id)} title={`Subscribers ${user.quantityOfSubscribers}`} />
          <Button onClick={() => history.push(ROUTES.SUBSD+user.id)} title={`Subscribed ${user.quantityOfSubscribed}`} />
        </div>
      </div>
      <div>
        <UserInfo user={user} />
        <Button
          className={styles.likedPostsButton}
          title="Liked posts"
          onClick={openLikedPosts}
        />
      </div>
    </div>
  );
};

export default ProfileUserInfo;
