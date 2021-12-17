import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import UserInfo from '../user-info/user-info';

import styles from './profile-user-info.module.css';

import noImage from 'assets/icons/NoImage.png';
import UserIconInput from 'components-ui/user-icon-input/user-icon-input';
import Input from 'components-ui/input/input';
import Button from 'components-ui/button/button';
import { ROUTES } from 'constants/routes';
const ProfileUserInfo = ({ user }) => {
  const history = useHistory();
  const [imagePreview, setImagePreview] = useState( user.iconUrl ?? noImage);

  const filesChangeHandler = (preview, updatedFile)=>{
    setImagePreview(preview);
  };

  return (
    <div className={styles.profileInfo}>
      <div className={styles.avatarInfo}>
        <UserIconInput
          image={imagePreview}
          name="image"
          accept="image/jpeg,image/png,image/jpg"
          onChange={filesChangeHandler}
        />
        <div className={styles.subs}>
          <Button onClick={() => history.push(ROUTES.SUBS)} title={`Subscribers ${user.quantityOfSubscribers}`} />
          <Button onClick={() => history.push(ROUTES.SUBSD)} title={`Subscribed ${user.quantityOfSubscribed}`} />
        </div>
      </div>


      <UserInfo user={user} />


    </div>
  );
};

export default ProfileUserInfo;
