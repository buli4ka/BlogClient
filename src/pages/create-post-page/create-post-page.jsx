import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import Loader from '../../components-ui/loader/loader';

import styles from './create-post-page.module.css';

import { createPost, updatePost } from 'store/post-slice';
import MultipleImageInput from 'components-ui/multiple-image-input/multiple-image-input';
import Input from 'components-ui/input/input';
import Textarea from 'components-ui/textarea/textarea';
import Button from 'components-ui/button/button';
import { ROUTES } from 'constants/routes';
import { useGetPostByIdQuery } from 'api/post-api';


const CreatePostPage = () => {
  const { state: locationPost } = useLocation();
  const { data: postToUpdate, isFetching, isError, isSuccess } = useGetPostByIdQuery(locationPost?.postId, { skip: !locationPost?.postId });
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
  const UpdatePost = async ()=>{
    await dispatch(updatePost(post, postImages));

    history.push(ROUTES.PROFILE);
  };

  useEffect(() => {
    if (isError) history.replace('/');
    if (isSuccess) setPost(postToUpdate);
  }, [isError, history, isSuccess, postToUpdate]);

  if (isFetching)
    return <Loader />;

  return (
    <div>
      <form className={styles.form}>
        <MultipleImageInput
          imagePreviews={post.imageUrls}
          onChange={addImages}
          accept="image/jpeg,image/png,image/jpg"
        />
        <div className={styles.textInput}>
          <Input
            name="title"
            value={post?.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <Textarea
            name="text"
            value={post?.text}
            onChange={handleChange}
            placeholder="Text"
          />
        </div>
        <Button onClick={locationPost?.postId ? UpdatePost : AddPost} title={`${locationPost?.postId ? 'Update' : 'Add'} post`} />
      </form>
    </div>
  );
};

export default CreatePostPage;
