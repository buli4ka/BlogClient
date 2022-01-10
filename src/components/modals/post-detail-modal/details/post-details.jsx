import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './post-details.module.css';

import noImage from 'assets/icons/NoImage.png';
import Gallery from 'components-ui/gallery/gallery';
import { ROUTES } from 'constants/routes';
import { normalizeDate } from 'utils/normalize-date';
import Button from 'components-ui/button/button';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { addLikeToPost } from 'store/post-slice';
import Slideshow from 'components-ui/slideshow/slideshow';

const PostDetails = (props) => {
  const { id, author, createdAt, postComments, postLikes, text, title, updatedAt, imageUrls } = props.post;
  const history = useHistory();
  const dispatch = useDispatch();

  const addLike = async ()=>{
    await dispatch(addLikeToPost(id));
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
        <div className={styles.gallery}>
          <Slideshow images={imageUrls} />
        </div>
        <div className={styles.info}>

          <span className={styles.title}>{title}</span>
          <div>
            <span>
              {text}
            </span>
            <Button
              renderIcon={() => <HeartIcon />}
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
      </div>
    </div>
  );
};

export default PostDetails;
