import React from 'react';
import styles from './LandingServiceBlock.module.css';

const LandingServiceBlock = ({ num, title, text }) => {
  return (
    <div className={styles.service}>
      <p className={styles.num}>{num}</p>
      <div className={styles.textcontainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default LandingServiceBlock;
