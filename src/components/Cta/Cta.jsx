import React from 'react';
import styles from './Cta.module.css';
import RoundButton from '../RoundButton/RoundButton';

const Cta = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.button}>
        <RoundButton link={'/#'} size={'1rem'} widthb={'10rem'}>
          Get In Touch
        </RoundButton>
      </div>
      <div className={styles.text}>
        <h2>Let&apos;s work</h2>
        <p>Togheter</p>
      </div>
    </section>
  );
};

export default Cta;
