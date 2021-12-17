import React from 'react';

import styles from './user-icon-input.module.css';

const UserIconInput = ({ name, value, onChange, accept, image, disabled }) => {

  const filesChangeHandler = event => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () => {
      onChange(reader.result, file);
    };
    reader.readAsDataURL(file);

  };


  return (
    <label htmlFor="photo-upload" className={styles.fileUpload}>
      <div className={styles.imgWrap}>
        <img htmlFor="photo-upload" src={image} />
      </div>
      <input
        id="photo-upload"
        type="file"
        name={name}
        value={value}
        onChange={filesChangeHandler}
        accept={accept}
        disabled={disabled}
      />
    </label>
  );
};

export default UserIconInput;
