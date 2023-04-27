import React from 'react';
import styles from './RoundButton.module.css';
import { Link } from 'react-router-dom';

const RoundButton = ({ link, children, size, widthb }) => {
  return (
    <Link className={styles.button} style={{ width: widthb }} to={link}>
      <p style={{ fontSize: size }}>{children}</p>
    </Link>
  );
};

export default RoundButton;
