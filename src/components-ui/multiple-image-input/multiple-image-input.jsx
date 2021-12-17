import React, { useState } from 'react';

import styles from './multiple-image-input.module.css';

import noImage from 'assets/icons/NoImage.png';

const MultipleImageInput = ({ onChange, disabled }) => {
  const [preview, setPreview] = useState([]);
  const fileobj= [];

  const changedHandler = event => {
    let files = event.target.files;

    fileobj.push(files);
    let reader;

    for (let i = 0; i < fileobj[0].length; i++) {
      reader = new FileReader();
      reader.readAsDataURL(fileobj[0][i]);
      reader.onload = event => {
        preview.push(event.target.result); // update the array instead of replacing the entire value of preview

        setPreview([...new Set(preview)]); // spread into a new array to trigger rerender
      };
    }
    onChange(files);
  };

  return (
    <div className={styles.inputField}>
      <input
        type="file"
        name="file"
        multiple
        onChange={changedHandler}
      />

      <div className={styles.imagesField}>
        {(preview || []).map((url, index) => (
          <img src={url} alt="..." key={index} style={{ height: '200px', width: '200px' }} />
        ))}
      </div>

    </div>
  );
};

export default MultipleImageInput;
