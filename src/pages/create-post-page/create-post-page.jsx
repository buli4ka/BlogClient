import React, { useState } from 'react';

import styles from './create-post-page.module.css';

import MultipleImageInput from 'components-ui/multiple-image-input/multiple-image-input';
import Input from 'components-ui/input/input';
import Textarea from 'components-ui/textarea/textarea';


const CreatePostPage = () => {
  const [post, setPost]=useState({});

  const handleChange = ({ target: { value, name } }) => setPost({ ...post, [name]: value });
  const addImages = (images)=>{
    setPost({ ...post, ['images']: images });
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
        {/*<Button disabled={isLoading} onClick={Add}>Add post</Button>*/}
      </form>
    </div>
  );
};

export default CreatePostPage;
