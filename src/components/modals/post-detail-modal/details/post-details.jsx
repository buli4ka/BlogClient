import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './post-details.module.css';

import noImage from 'assets/icons/NoImage.png';
import Gallery from 'components-ui/gallery/gallery';
import { ROUTES } from 'constants/routes';
const PostDetails = (props) => {
  const { id, author, createdAt, postComments, postLikes, text, title, updatedAt, imageUrls } = props.post;
  const history = useHistory();

  return (
    <div>
      <div className={styles.author} onClick={()=>history.push(ROUTES.PROFILE+author.id)}>
        <img src={author.iconUrl ?? noImage} alt="Icon" />
        <span>
          {author.username}
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.gallery}>
          <Gallery images={imageUrls} />
        </div>
        <div className={styles.info}>

          <span className={styles.title}>{title}</span>
          <div>
            <span>
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
