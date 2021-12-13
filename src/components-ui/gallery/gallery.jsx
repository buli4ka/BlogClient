import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Magnifier from 'react-magnifier';
import { CarouselProvider,
  Slider,
  Slide,
  Image,
  Dot,
} from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

import styles from './gallery.module.css';

import { ReactComponent as ZoomIcon } from 'assets/icons/zoom.svg';
import { ReactComponent as CrossIcon } from 'assets/icons/x.svg';
import Button from 'components-ui/button/button';

function ZoomButton({ images, zoomable, zoomEnabled, onClick }) {
  if (images.length === 0 || !zoomable) {
    return null;
  }

  if (zoomEnabled === false) {
    return (
      <Button testId="zoom-enable-btn" secondary className={styles.button} renderIcon={() => <ZoomIcon className={styles.buttonIcon} />} title="View close up" onClick={onClick} />
    );
  }

  return (
    <Button testId="zoom-disable-btn" secondary className={styles.button} renderIcon={() => <CrossIcon className={styles.buttonIcon} />} title="Exit close up mode" onClick={onClick} />
  );
}

function Images({ zoomEnabled, images }) {
  const params = zoomEnabled ? '?dpr=1' : '?w=800&h=1200';
  const Item = zoomEnabled ? Magnifier : Image;
  const magnifierProps = zoomEnabled ? { mgWidth: 200, mgHeight: 200, mgShape: 'square', zoomFactor: 1, height: 'auto', widht: '100%' } : {};

  return images.map((image, index) => (
    <Slide key={image} index={index}>
      <Item src={image + params} className={styles.image} {...magnifierProps} />
    </Slide>
  ));
}

function SliderImages({ images }) {
  return images.map((image, index) => (
    <Dot key={image} slide={index} className={styles.thumbnail}>
      <Image className={styles.thumb} src={image + '?w=180&h=270'} />
    </Dot>
  ));
}

export default function Gallery(props) {
  const { images, zoomable } = props;
  const [zoomEnabled, setZoomEnabled] = useState(false);
  const toggleZoom = () => setZoomEnabled(prev => !prev);

  return (
    <CarouselProvider
      totalSlides={Object.values(images).length}
      naturalSlideHeight={900}
      naturalSlideWidth={700}
      className={styles.container}
    >
      <div className={styles.carousel}>
        <div className={styles.dots}>
          <SliderImages images={images} />
        </div>
        <Slider className={styles.image}>
          <Images images={images} zoomEnabled={zoomEnabled} />
        </Slider>
      </div>
      <ZoomButton onClick={toggleZoom} images={images} zoomEnabled={zoomEnabled} zoomable={zoomable} />
    </CarouselProvider>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  zoomable: PropTypes.bool,
};

Gallery.defaultProps = {
  images: [],
  zoomable: false,
};
