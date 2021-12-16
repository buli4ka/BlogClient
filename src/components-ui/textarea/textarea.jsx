import React, { forwardRef, memo } from 'react';
import classnames from 'classnames';

import styles from './textarea.module.css';

const Textarea = forwardRef(({
  disabled = false,
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
    <textarea
      ref={ref}
      data-testid={testId}
      placeholder={placeholder}
      value={value}
      name={name}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      autoFocus={autoFocus}
      className={classnames(styles.textarea, { [styles.error]: error }, className)}
    />
  );
});


export default memo(Textarea);
