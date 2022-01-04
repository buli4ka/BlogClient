import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './profile-image.module.css';

import noImage from 'assets/icons/NoImage.png';
import Button from 'components-ui/button/button';
import { ROUTES } from 'constants/routes';

const ProfileImage = ({ icon, id, quantityOfSubscribers, quantityOfSubscribed }) => {
  const history = useHistory();

  return (
    <div className={styles.avatarInfo}>
      <div className={styles.imgWrap}>
        <img src={icon ?? noImage} alt="Icon" />
      </div>
      <div className={styles.subs}>
        <Button
          onClick={() => history.push(ROUTES.SUBS+id)}
          title={`Subscribers ${quantityOfSubscribers}`}
        />
        <Button
          onClick={() => history.push(ROUTES.SUBSD+id)}
          title={`Subscribed ${quantityOfSubscribed}`}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
