import React, { useState } from 'react';

import styles from './checkbox.module.css';
const Checkbox = ({ text, name, onChange, isPrivate }) => {
  const [isChecked, setIsChecked] = useState(isPrivate ?? false);

  const check = (e)=>{
    setIsChecked(!isChecked);
    // eslint-disable-next-line no-param-reassign
    e.target.value = !isChecked;
    onChange(e);

  };

  return (
    <>
      <input
        type="checkbox"
        className={styles.customCheckbox}
        id="isPrivate"
        name={name}
        value={isChecked}
        checked={isChecked}
        onChange={check}
      />
      <label htmlFor="isPrivate">{text}</label>
    </>
  );
};

export default Checkbox;
