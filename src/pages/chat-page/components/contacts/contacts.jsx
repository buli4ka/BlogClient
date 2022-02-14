import React, { useState } from 'react';

import styles from './contacts.module.css';

import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg';
import Input from 'components-ui/input/input';

const Contacts = () => {
  const [contact, setContact] = useState('');
  const handleChange = ({ target: { value } }) => setContact(value);

  return (
    <div className={styles.contactsComponent}>
      <div className={styles.search}>
        <div className={styles.iconContainer}><SearchIcon /></div>
        <Input
          name="title"
          value={contact}
          onChange={handleChange}
          placeholder="Title"
        />
      </div>

      <div className={styles.contactsList}>

      </div>

    </div>
  );
};

export default Contacts;
