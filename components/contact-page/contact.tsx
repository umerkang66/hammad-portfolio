import { FC, FormEvent, ReactElement, useState } from 'react';
import Notification from '../common/notification/notification';
import styles from './contact.module.scss';

const ContactComponent: FC = (): ReactElement => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [status, setStatus] = useState<'success' | 'error'>('success');
  const [statusMessage, setStatusMessage] = useState('');

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorProps = [];

    if (!name || !email || !message.trim() || !city || !contactNumber) {
      if (!name) errorProps.push('name');
      if (!email) errorProps.push('email');
      if (!city) errorProps.push('city');
      if (!contactNumber) errorProps.push('contact number');
      if (!message.trim()) errorProps.push('message');

      let msg = 'ERR: ';
      msg += errorProps.join(', ');
      msg += ' is not defined';

      setShowNotification(true);
      setStatus('error');
      setStatusMessage(msg);
      return;
    }

    try {
      // reset the notification state.
      setShowNotification(false);
      setLoading(true);
      setStatusMessage('');
      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          city,
          contactNumber,
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
                autoComplete="off"
              />
              <input
                className={`${styles.form__input} ${styles.form__input_email}`}
                type="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="off"
              />
              <input
                className={`${styles.form__input} ${styles.form__input_city}`}
                type="text"
                id="city"
                placeholder="Your City"
                value={city}
                onChange={e => setCity(e.target.value)}
                autoComplete="off"
              />
              <input
                className={`${styles.form__input} ${styles.form__input_number}`}
                type="text"
                id="number"
                placeholder="Your Contact Number"
                value={contactNumber}
                onChange={e => setContactNumber(e.target.value)}
                autoComplete="off"
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

              {showNotification ? (
                <Notification
                  showNotification={setShowNotification}
                  type={status}
                  text={statusMessage}
                />
              ) : null}
            </form>
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
              <p className="paragraph">(+92) 321 7796479</p>
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
