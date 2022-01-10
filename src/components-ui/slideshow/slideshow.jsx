import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './slideshow.module.css';
const Slideshow = ({ images=[] }) => {

  const [slideIndex, setSlideIndex] = useState(0);

  const showSlides = (n)=>{
    if (slideIndex+n >= images.length){
      return setSlideIndex(0);
    }
    if (slideIndex+n < 0 ){
      return setSlideIndex(images.length-1);
    }
    setSlideIndex(slideIndex+n);
  };

  return (
    <div className={styles.slideshowContainer}>
      <div className={classnames(styles.mySlides, styles.fade)}>
        <div className={styles.numberText}>{`${slideIndex+1}/${images.length}`}</div>
        <img src={images[slideIndex]} alt="Slide" />
      </div>
      {images.length > 1 && (
        <>
          <a className={styles.prev} onClick={()=>showSlides(-1)}>&#10094;</a>
          <a className={styles.next} onClick={()=>showSlides(1)}>&#10095;</a>
        </>
      )}
    </div>
  );
};

export default Slideshow;
