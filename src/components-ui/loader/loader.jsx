/* eslint-disable no-magic-numbers */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './loader.module.css';

const Loader = props => {
  const left = `calc(50% - ${props.width / 2}px)`;
  const top = `calc(50% - ${props.height / 2}px)`;


  return (
    <div className={styles.cover}>
      <div data-testid="loader" className={styles.loader} style={{ top, left }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${props.width}px`}
          height={`${props.height}px`}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            strokeWidth="10"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            >
            </animateTransform>
          </circle>
        </svg>
      </div>
    </div>
  );
};

Loader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  loader: PropTypes.string,
};

Loader.defaultProps = {
  width: 50,
  height: 50,
  loader: 'loader',
};

export default React.memo(Loader);
