import React, { useEffect, useState } from 'react';

import styles from './multiple-image-input.module.css';


const MultipleImageInput = ({ onChange, imagePreviews }) => {
  const [preview, setPreview] = useState( []);
  const fileobj= [];

  useEffect(()=>{
    if (imagePreviews)
      setPreview(imagePreviews);
  }, [imagePreviews]);


  const changedHandler = event => {
    let newPrevs = [];

    let files = event.target.files;

    fileobj.push(files);
    let reader;

    for (let i = 0; i < fileobj[0].length; i++) {
      reader = new FileReader();
      reader.readAsDataURL(fileobj[0][i]);
      reader.onload = event => {
        newPrevs.push(event.target.result);

        setPreview([...new Set(newPrevs)]); // spread into a new array to trigger rerender

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
