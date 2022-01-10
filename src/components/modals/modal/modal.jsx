import React from 'react';
import classnames from 'classnames';

import styles from './modal.module.css';

import { MODAL_SIZES } from 'constants/modals';


const Modal = ({ children, theme, size= MODAL_SIZES.MEDIUM, closeModal }) => {
  return (
    <div
      data-testid="modal"
      className={styles.container}
    >
      <div
        data-testid="modal-overlay"
        className={styles.overlay}
        onClick={closeModal}
      />
      <div className={classnames(styles.content, {
        [styles[size]]: size,
        [styles.contentColor]: theme,

      })}
      >
        {children}
      </div>
    </div>
  );
};

export default React.memo(Modal);
