import React from 'react';
import { useHistory } from 'react-router-dom';

import UserInfo from '../user-info/user-info';

import styles from './profile-user-info.module.css';

import noImage from 'assets/icons/NoImage.png';
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
      <div className={styles.avatarInfo}>
        <div className={styles.imgWrap}>
          <img src={user?.iconUrl ?? noImage} alt="Icon" />
        </div>
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
