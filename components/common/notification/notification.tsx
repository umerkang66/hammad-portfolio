import { FC, ReactElement } from 'react';
import styles from './notification.module.scss';

interface NotificationProps {
  text: string;
  type: 'success' | 'error';
  showNotification(toShow: boolean): void;
}

const Notification: FC<NotificationProps> = ({
  text,
  type,
  showNotification,
}): ReactElement => {
  const emoji = type === 'success' ? '🚀🚀🚀' : '';

  return (
    <div
      className={`${styles.notification} ${
        type === 'success'
          ? styles.notification__success
          : styles.notification__error
      }`}
    >
      <p>
        {emoji} {' ' + text}{' '}
        <span
          onClick={() => showNotification(false)}
          className={styles.notification__cross}
        >
          X
        </span>
      </p>
    </div>
  );
};

export default Notification;
