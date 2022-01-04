import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ProfileImage from 'components/profile-image/profile-image';
import styles from 'pages/profile-page/profile-info/profile-user-info.module.css';
import Button from 'components-ui/button/button';
import UserInfo from 'components/user-info/user-info';
import { isSubscribed, subscribe } from 'store/user-slice';

const ProfileAuthorInfo = ({ author, currentUser }) => {
  const [isSubscribeTitle, setIsSubscribeTitle] = useState(false);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( async ()=>{
    setIsSubscribeTitle(await dispatch(isSubscribed(author.id)));

  }, [dispatch, author.id, isSubscribeTitle, setIsSubscribeTitle]);

  const subscribeHandler = async ()=>{
    await dispatch(subscribe(author.id));
  };

  return (
    <div className={styles.profileInfo}>
      <ProfileImage
        id={author.id}
        icon={author.iconUrl}
        quantityOfSubscribers={author.quantityOfSubscribers}
        quantityOfSubscribed={author.quantityOfSubscribed}
      />
      <div>
        <UserInfo user={author} />
        {currentUser && (
          <Button
            className={styles.likedPostsButton}
            title={isSubscribeTitle ? 'Unsubscribe' : 'Subscribe'}
            onClick={subscribeHandler}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileAuthorInfo;
