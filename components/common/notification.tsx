import { FC, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import styles from './notification.module.scss';

interface Props {
  text: string;
  type: 'success' | 'error';
  showNotification(toShow: boolean): void;
}

const Notification: FC<Props> = ({
  text,
  type,
  showNotification,
}): ReactElement => {
  const emoji = type === 'success' ? '🚀' : '';
  const JSX = (
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

  // this "notification" element is present in _app.tsx
  return ReactDOM.createPortal(
    JSX,
    document.getElementById('notification') as HTMLElement
  );
};

export default Notification;
