import React from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';

import styles from './root-notification.module.css';
import Icon from './components/icon/icon';

import LayoutContainer from 'components/layout-container/layout-container';
import { getNotificationSelector } from 'store/notification-slice';
import { TYPES } from 'constants/notifications';


const notificationRoot = document.createElement('div');

notificationRoot.setAttribute('id', 'notification-root');
document.body.appendChild(notificationRoot);

const RootNotification = ({ testId = 'root-notification' }) => {
  const { type, isShow, message } = useSelector(getNotificationSelector);

  if (!isShow) return null;

  return ReactDOM.createPortal(
    <div
      data-testid={testId}
      className={
        classnames(styles.container,
          {
            [styles.error]: type === TYPES.ERROR,
            [styles.warning]: type === TYPES.WARNING,
            [styles.success]: type === TYPES.SUCCESS,
          },
        )
      }
    >
      <LayoutContainer>
        <div className={styles.info} data-testid="notificationBanner">
          <span>
            <Icon type={type} />
          </span>
          <h2 className={styles.message}>{message}</h2>
        </div>
      </LayoutContainer>
    </div>,
    notificationRoot);
};

export default RootNotification;
