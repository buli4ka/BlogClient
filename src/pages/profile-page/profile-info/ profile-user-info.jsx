import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './profile-user-info.module.css';

import UserInfo from 'components/user-info/user-info';
import ProfileImage from 'components/profile-image/profile-image';
import Button from 'components-ui/button/button';
import { ROUTES } from 'constants/routes';
import useModal from 'hooks/use-modal';
import { MODAL_SIZES, MODALS } from 'constants/modals';

const ProfileUserInfo = ({ user }) => {
  const history = useHistory();
  const [updateModal] = useModal(MODALS.UPDATE, {
    size: MODAL_SIZES.LARGE,
  });

  const openLikedPosts = ()=>{
    history.push(ROUTES.LIKED_POSTS+user.id);
  };

  return (
    <div className={styles.profileInfo}>
      <ProfileImage
        id={user.id}
        icon={user.iconUrl}
        quantityOfSubscribers={user.quantityOfSubscribers}
        quantityOfSubscribed={user.quantityOfSubscribed}
      />
      <div>
        <UserInfo user={user} />
        <Button
          className={styles.likedPostsButton}
          title="Liked posts"
          onClick={openLikedPosts}
        />
        <Button
          className={styles.likedPostsButton}
          title="Update"
          onClick={()=>updateModal()}
        />
      </div>
    </div>
  );
};

export default ProfileUserInfo;
