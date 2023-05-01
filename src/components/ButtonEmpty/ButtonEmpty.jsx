import React from 'react';
import styles from './ButtonEmpty.module.css';

const ButtonEmpty = ({ text }) => {
  return (
    <button className={styles.button}>
      <span>{text}</span>
      <div className={styles.arrowcontainer}>
        <div className={styles.arrowline}></div>
        <div className={styles.arrow}></div>
      </div>
    </button>
  );
};

export default ButtonEmpty;
