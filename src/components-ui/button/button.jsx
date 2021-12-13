import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './button.module.css';

const Button = ({ title, type, onClick, className, testId, disabled, secondary, renderIcon }) => {
  const icon = useMemo(() => renderIcon(), [renderIcon]);

  const classNameList = classnames(styles.button, {
    [styles.secondary]: secondary === true,
    [styles.buttonWithIcon]: icon !== null,
    [className]: className !== '',
  });

  return (
    <button type={type} data-testid={testId} onClick={onClick} className={classNameList} disabled={disabled}>
      {renderIcon()}
      <span>{title}</span>
    </button>
  );
};

Button.propTypes = {
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  testId: PropTypes.string,
  renderIcon: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  title: '',
  type: 'button',
  onClick: () => null,
  className: '',
  testId: 'button',
  renderIcon: () => null,
  secondary: false,
};

export default React.memo(Button);
