import React, { useState } from 'react';

import styles from './user-icon-input.module.css';

import noImage from 'assets/icons/NoImage.png';

const UserIconInput = ({ name, value, onChange, accept, disabled, iconPreview }) => {
  const [preview, setPreview] = useState(iconPreview??noImage);

  const filesChangeHandler = event => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () => {
      setPreview(reader.result);
      onChange(file);
    };
    reader.readAsDataURL(file);

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
        disabled={disabled}
      />
    </label>
  );
};

export default UserIconInput;
