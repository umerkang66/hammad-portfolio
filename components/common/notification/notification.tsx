import { FC, ReactElement, useEffect } from 'react';
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
  const emoji = type === 'success' ? '🚀' : '';

  useEffect(() => {
    const timer = setTimeout(() => {
      showNotification(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div
      className={`${styles.notification} ${
        type === 'success'
          ? styles.notification__success
          : styles.notification__error
      }`}
    >
      <p className={styles.notification__text}>
        {emoji} {' ' + text}{' '}
      </p>

      <span
        onClick={() => showNotification(false)}
        className={styles.notification__cross}
      >
        X
      </span>
    </div>
  );
};

export default Notification;
