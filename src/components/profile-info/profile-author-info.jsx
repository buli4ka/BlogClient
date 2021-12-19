import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from 'components/profile-info/profile-user-info.module.css';
import UserIconInput from 'components-ui/user-icon-input/user-icon-input';
import Button from 'components-ui/button/button';
import { ROUTES } from 'constants/routes';
import UserInfo from 'components/user-info/user-info';
import noImage from 'assets/icons/NoImage.png';
import { isSubscribed, subscribe } from 'store/user-slice';

const ProfileAuthorInfo = ({ author }) => {
  const [isSubscribeTitle, setIsSubscribeTitle] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [imagePreview, setImagePreview] = useState(author.iconUrl ?? noImage);
  const filesChangeHandler = (preview, updatedFile) => {
    setImagePreview(preview);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( async ()=>{
    setIsSubscribeTitle(await dispatch(isSubscribed(author.id)));

  }, [dispatch, author.id, isSubscribeTitle, setIsSubscribeTitle]);

  const subscribeHandler = async ()=>{
    await dispatch(subscribe(author.id));
    window.location.reload();
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
          <Button
            onClick={() => history.push(ROUTES.SUBS+author.id)}
            title={`Subscribers ${author.quantityOfSubscribers}`}
          />
          <Button
            onClick={() => history.push(ROUTES.SUBSD+author.id)}
            title={`Subscribed ${author.quantityOfSubscribed}`}
          />
        </div>
      </div>
      <div>
        <UserInfo user={author} />
        <Button
          className={styles.likedPostsButton}
          title={isSubscribeTitle ? 'Unsubscribe' : 'Subscribe'}
          onClick={subscribeHandler}
        />
      </div>
    </div>
  );
};

export default ProfileAuthorInfo;
