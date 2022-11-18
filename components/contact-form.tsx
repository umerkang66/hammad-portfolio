import { FC, ReactElement, useState } from 'react';
import Notification from './common/notification';
import styles from './contact-form.module.scss';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  name: string;
  email: string;
  city: string;
  contactNumber: string;
  message: string;
}

const ContactForm: FC = (): ReactElement => {
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  }>({ type: 'success', message: '' });

  const onFormSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    try {
      // reset the notification state.
      setShowNotification(false);
      setLoading(true);
      setStatus({ type: 'success', message: '' });

      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          city: values.city,
          contactNumber: values.contactNumber,
        }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.message);

      formikHelpers.resetForm();
      setLoading(false);
      setShowNotification(true);
      setStatus({ type: 'success', message: 'Message is sent successfully' });
    } catch (err: any) {
      setLoading(false);
      setShowNotification(true);
      setStatus({ type: 'error', message: "Couldn't send your message" });
      console.log(err.message);
    }
  };

  const formInitialValues: FormValues = {
    name: '',
    email: '',
    city: '',
    contactNumber: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email format'),
    city: Yup.string().required('City is required'),
    contactNumber: Yup.string().required('Contact number is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <div className={styles.contact}>
      <div className="container">
        <div className={styles.contact__content}>
          <div className={styles.contact__left}>
            <h2 className="heading-secondary heading-secondary__underline u-margin-bottom-medium">
              Contact Me
            </h2>

            <Formik
              initialValues={formInitialValues}
              onSubmit={onFormSubmit}
              validationSchema={validationSchema}
            >
              <Form className={styles.form}>
                <Field
                  className={`${styles.form__input} ${styles.form__input_name}`}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  autoComplete="off"
                />
                <div className={styles.error}>
                  <ErrorMessage name="name" />
                </div>

                <Field
                  className={`${styles.form__input} ${styles.form__input_email}`}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  autoComplete="off"
                />
                <div className={styles.error}>
                  <ErrorMessage name="email" />
                </div>

                <Field
                  className={`${styles.form__input} ${styles.form__input_city}`}
                  type="text"
                  id="city"
                  placeholder="Your City"
                  name="city"
                  autoComplete="off"
                />
                <div className={styles.error}>
                  <ErrorMessage name="city" />
                </div>

                <Field
                  className={`${styles.form__input} ${styles.form__input_number}`}
                  type="text"
                  id="contact-number"
                  placeholder="Your Contact Number"
                  name="contactNumber"
                  autoComplete="off"
                />
                <div className={styles.error}>
                  <ErrorMessage name="contactNumber" />
                </div>

                <Field
                  as="textarea"
                  className={`${styles.form__input} ${styles.form__input_message}`}
                  id="message"
                  placeholder="Your Message"
                  name="message"
                />
                <div className={styles.error}>
                  <ErrorMessage name="message" />
                </div>

                <button
                  className={`btn btn--primary ${styles.form__button}`}
                  type="submit"
                  disabled={loading}
                >
                  Send
                  <div className={styles.form__button_text}></div>
                  {loading ? <div className="loader" /> : null}
                </button>

                {showNotification ? (
                  <Notification
                    showNotification={setShowNotification}
                    type={status.type}
                    text={status.message}
                  />
                ) : null}
              </Form>
            </Formik>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
