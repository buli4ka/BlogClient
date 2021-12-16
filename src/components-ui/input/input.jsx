import React, { forwardRef, memo } from 'react';
import classnames from 'classnames';

import styles from './input.module.css';

const Input = forwardRef(({
  disabled = false,
  type = 'text',
  value = '',
  onChange,
  onBlur,
  error = false,
  className = '',
  placeholder = '',
  name='',
  testId = 'input',
  autoFocus=false,
}, ref) => {

  return (
    <input
      ref={ref}
      data-testid={testId}
      placeholder={placeholder}
      type={type}
      value={value}
      name={name}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      autoFocus={autoFocus}
      className={classnames(styles.input, { [styles.error]: error }, className)}
    />
  );
});


export default memo(Input);
