import Link from 'next/link';
import styles from './hero.module.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__content_left}>
            <h1 className="heading-primary u-margin-bottom-small">
              Hi, I am Hammad Kakli, an amazon enthusiast
            </h1>

            <p
              className={
                styles.hero__paragraph + ' paragraph' + ' u-margin-bottom-small'
              }
            >
              Amazon Account Manager || PPC Expert || PL Wholesale Dropshipping
              Expert || Amazon Evangelist Consultant and Trainer.
            </p>

            <p
              className={
                styles.hero__paragraph +
                ' ' +
                'paragraph' +
                ' u-margin-bottom-medium'
              }
            >
              Experienced Professional Freelancer with a demonstrated history of
              working in the E-Commerce/internet industry.
            </p>

            <div className={styles.hero__buttons}>
              <Link href="/about">
                <a className="btn btn--primary">
                  More About Me <span className="btn__arrow">&rarr;</span>
                </a>
              </Link>
              <Link href="/contact">
                <a className="btn btn--secondary">
                  Contact Me <span className="btn__arrow">&rarr;</span>
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.hero__content_right}>
            <Image
              alt="hammad kakli"
              className={styles.hero__image}
              src="/images/hammad.png"
              height={373}
              width={392}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
