import React from 'react';
import styles from './FrontPageLanding.module.css';
import { landingavatar, landinglarge } from '../../../public/img';
import RoundButton from '../RoundButton/RoundButton';

const FrontPageLanding = () => {
  return (
    <section className={styles.landing}>
      <div className={styles.avatarcontainer}>
        <div className={styles.avatar}>
          <img src={landingavatar} alt="" />
          <p>Hi, I&apos;m Alfonso</p>
          <RoundButton link={'/contact'} size={'.9rem'} widthb={'6rem'}>
            Work With Me
          </RoundButton>
        </div>
        <div className={styles.textcontainer}>
          <h1 className={styles.title}>Alfonso Martín</h1>
          <p className={styles.role}>
            Photographer <br />
            <span>& Visual Artist</span>
          </p>
        </div>
      </div>
      <div className={styles.landingimgcontainer}>
        <img src={landinglarge} alt="" />
        <div className={styles.arrow}>
          <div className={styles.line}></div>
          <div className={styles.arrowdown}></div>
        </div>
      </div>
    </section>
  );
};

export default FrontPageLanding;
