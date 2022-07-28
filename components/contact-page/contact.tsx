import { FC, FormEvent, ReactElement, useState } from 'react';
import Notification from '../common/notification/notification';
import styles from './contact.module.scss';

const ContactComponent: FC = (): ReactElement => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [status, setStatus] = useState<'success' | 'error'>('success');
  const [statusMessage, setStatusMessage] = useState('');

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      let msg = 'ERR:';
      if (!name) msg += ' NAME,';
      if (!email) msg += ' EMAIL,';
      if (!message) msg += ' MESSAGE';
      msg += ' is not defined';

      setShowNotification(true);
      setStatus('error');
      setStatusMessage(msg);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const body = await res.json();
      if (!res.ok) {
        throw new Error(body.message);
      }

      setLoading(false);
      setShowNotification(true);
      setStatus('success');
      setStatusMessage('Message is sent successfully');
    } catch (err: any) {
      setLoading(false);
      setShowNotification(true);
      setStatus('error');
      console.log(err.message);
      setStatusMessage("Couldn't send your message");
    }
  };

  return (
    <div className={styles.contact}>
      <div className="container">
        <div className={styles.contact__content}>
          <div className={styles.contact__left}>
            <h2 className="heading-secondary heading-secondary__underline u-margin-bottom-medium">
              Contact Me
            </h2>

            <form className={styles.form} onSubmit={onFormSubmit}>
              <input
                className={`${styles.form__input} ${styles.form__input_name}`}
                type="text"
                id="your-name"
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                className={`${styles.form__input} ${styles.form__input_email}`}
                type="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <textarea
                className={`${styles.form__input} ${styles.form__input_message} u-margin-bottom-medium`}
                id="message"
                placeholder="Your Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />

              <button
                className={`btn btn--primary ${styles.form__button}`}
                type="submit"
              >
                Send
                <div className={styles.form__button_text}></div>
                {loading ? <div className="loader" /> : null}
              </button>
            </form>

            {showNotification ? (
              <Notification
                showNotification={setShowNotification}
                type={status}
                text={statusMessage}
              />
            ) : null}
          </div>

          <div className={styles.contact__right}>
            <h2 className="heading-secondary heading-secondary__underline u-margin-bottom-medium">
              Contact Information
            </h2>

            <div className={styles.contact__right_info}>
              <h3
                className={`heading-tertiary ${styles.contact__right_heading}`}
                style={{ marginRight: '45px' }}
              >
                Email:
              </h3>
              <p className={`${styles.contact__right_paragraph} paragraph`}>
                hammadkakli@gmail.com
              </p>
            </div>

            <div className={styles.contact__right_info}>
              <h3
                className={`heading-tertiary ${styles.contact__right_heading}`}
                style={{ marginRight: '33px' }}
              >
                Phone:
              </h3>
              <p className="paragraph">+923217796479</p>
            </div>

            <div className={styles.contact__right_info}>
              <h3
                className={`heading-tertiary ${styles.contact__right_heading}`}
              >
                Address:
              </h3>
              <p className="paragraph">
                Plot No 9, Sadaat Avenue Moulana Shoukat Ali Road Near Jinnah
                Hospital Lahore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;