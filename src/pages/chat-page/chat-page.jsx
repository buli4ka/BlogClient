import React from 'react';

import styles from './chat-page.module.css';
import Contacts from './components/contacts/contacts';

const ChatPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contacts}>
        <Contacts />
      </div>

      <div className={styles.chat}>

      </div>

    </div>
  );
};

export default ChatPage;
