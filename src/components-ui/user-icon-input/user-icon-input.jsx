import React, { useState } from 'react';

import styles from './user-icon-input.module.css';

import noImage from 'assets/icons/NoImage.png';

const UserIconInput = ({ name, value, onChange, accept, iconPreview }) => {
  const [preview, setPreview] = useState(iconPreview??noImage);

  const filesChangeHandler = event => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.readAsDataURL(file);
    reader.onload = event => {
      setPreview(event.target.result);

    };

    onChange(file);
  };


  return (
    <label htmlFor="photo-upload" className={styles.fileUpload}>
      <div className={styles.imgWrap}>
        <img src={preview} alt="Icon" />
      </div>
      <input
        id="photo-upload"
        type="file"
        name={name}
        value={value}
        onChange={filesChangeHandler}
        accept={accept}
      />
    </label>
  );
};

export default UserIconInput;
