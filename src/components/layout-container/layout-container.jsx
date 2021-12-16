import React from 'react';

import styles from './layout-container.module.css';

const LayoutContainer = ({ children, theme, testId = 'layout-container' }) => {
  const darkTheme = ` body{ 
        background-color:#19181f!important; 
        color: #F0EAD6!important;
    }
  `;

  return (
    <div className={styles.container} data-testid={testId}>
      <style>
        {theme ? darkTheme : null}
      </style>
      {children}
    </div>
  );
};

export default LayoutContainer;
