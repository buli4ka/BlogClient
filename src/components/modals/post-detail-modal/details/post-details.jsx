import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './post-details.module.css';

import CommentList from 'components/comment-list/comment-list';
import noImage from 'assets/icons/NoImage.png';
import { ROUTES } from 'constants/routes';
import { normalizeDate } from 'utils/normalize-date';
import Button from 'components-ui/button/button';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { addLikeToPost } from 'store/post-slice';
import Slideshow from 'components-ui/slideshow/slideshow';
import { ReactComponent as HeartRedIcon } from 'assets/icons/heart-red.svg';
import { userSelector } from 'store/user-slice';

const PostDetails = (props) => {
  const { id, author, createdAt, postComments, postLikes, text, title, updatedAt, imageUrls } = props.post;
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector(userSelector).user;

  const addLike = async ()=>{
    await dispatch(addLikeToPost(id));
  };
  const renderIcon = ()=>{
    for (let i in postLikes){
      if (postLikes[i].userId=== currentUser?.id)
        return <HeartRedIcon />;
    }

    return <HeartIcon />;
  };

  return (
    <div>
      <div className={styles.author} onClick={() => history.push(ROUTES.PROFILE + author.id)}>
        <img src={author.iconUrl ?? noImage} alt="Icon" />
        <span>
          {author.username}
        </span>
      </div>
      <div className={styles.container}>
        <span className={styles.title}>{title}</span>

        <div className={styles.gallery}>
          <Slideshow images={imageUrls} />
        </div>
        <div className={styles.info}>

          <div>
            <span>
              {text}
            </span>
            <Button
              renderIcon={renderIcon}
              title={''+postLikes.length}
              onClick={addLike}
            />
            <div className={styles.date}>
              <span>
                {normalizeDate(createdAt)}
              </span>
              <span>
                {normalizeDate(updatedAt, false)}
              </span>
            </div>
          </div>
        </div>
        <CommentList comments={postComments} postId={id} user={currentUser} />
      </div>
    </div>
  );
};

export default PostDetails;
