import React from 'react';

import styles from './layout-container.module.css';

const LayoutContainer = ({ children, testId = 'layout-container' }) => {
  return <div className={styles.container} data-testid={testId}>{children}</div>;
};

export default LayoutContainer;
