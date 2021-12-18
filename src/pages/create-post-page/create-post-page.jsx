import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './create-post-page.module.css';

import { createPost } from 'store/post-slice';
import MultipleImageInput from 'components-ui/multiple-image-input/multiple-image-input';
import Input from 'components-ui/input/input';
import Textarea from 'components-ui/textarea/textarea';
import Button from 'components-ui/button/button';
import { ROUTES } from 'constants/routes';


const CreatePostPage = () => {
  const [post, setPost] = useState({});
  const [postImages, setPostImages] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = ({ target: { value, name } }) => setPost({ ...post, [name]: value });
  const addImages = (images) => {
    setPostImages(images);
  };
  const AddPost = async () => {
    await dispatch(createPost(post, postImages));

    history.push(ROUTES.PROFILE);
  };

  return (
    <div>
      <form className={styles.form}>
        <MultipleImageInput
          onChange={addImages}
          accept="image/jpeg,image/png,image/jpg"
        />
        <div className={styles.textInput}>
          <Input
            name="title"
            value={post.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <Textarea
            name="text"
            value={post.text}
            onChange={handleChange}
            placeholder="Text"
          />
        </div>
        <Button onClick={AddPost} title="Add post" />
      </form>
    </div>
  );
};

export default CreatePostPage;
