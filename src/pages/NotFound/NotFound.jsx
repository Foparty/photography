import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <h2>Sorry, the page that you are looking for does not exist</h2>
    </div>
  );
};

export default NotFound;
