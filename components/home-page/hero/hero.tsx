import Link from 'next/link';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__content_left}>
            <h1 className="heading-primary u-margin-bottom-small">
              Hi, I am Hammad Kakli, an amazon enthusiast.
            </h1>

            <p
              className={
                styles.hero__paragraph + ' paragraph' + ' u-margin-bottom-small'
              }
            >
              Experienced Professional Freelancer with a demonstrated history of
              working in the E-Commerce/internet industry.
            </p>

            <p
              className={
                styles.hero__paragraph +
                ' ' +
                'paragraph' +
                ' u-margin-bottom-medium'
              }
            >
              I am an Analyst, programmer, troublemaker, executive, revisionist,
              sales guy, data analyst, system administrator, product owner,
              evangelist and biker. And I probably forgot a few.
            </p>

            <div className={styles.hero__buttons}>
              <Link href="#">
                <a className="btn btn--blue">
                  More Info <span className="btn__arrow">&rarr;</span>
                </a>
              </Link>
              <Link href="#">
                <a className="btn btn--white">
                  Contact Me <span className="btn__arrow">&rarr;</span>
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.hero__content_right}>
            <img
              className={styles.hero__image}
              src="/images/hammad.png"
              height={600}
              width={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
