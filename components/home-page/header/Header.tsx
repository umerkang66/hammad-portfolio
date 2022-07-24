import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
  return (
    <section className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <h1 className="heading-primary u-margin-bottom-small">
            Hi, I am Hammad Kakli, an amazon enthusiast.
          </h1>

          <p
            className={
              styles.header__paragraph + ' paragraph' + ' u-margin-bottom-small'
            }
          >
            Experienced Professional Freelancer with a demonstrated history of
            working in the E-Commerce/internet industry.
          </p>

          <p
            className={
              styles.header__paragraph +
              ' ' +
              'paragraph' +
              ' u-margin-bottom-medium'
            }
          >
            I am an Analyst, programmer, troublemaker, executive, revisionist,
            sales guy, data analyst, system administrator, product owner,
            evangelist and biker. And I probably forgot a few.
          </p>

          <Link href="#">
            <a className="btn btn--blue">More Info</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
