import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.copy}>
        <span>
          &copy; Made by{' '}
          <a href="http://www.alfonsomartingarcia.com" target="_blank" rel="noreferrer">
            Alfonso Martín
          </a>
        </span>
        <span>Powered by his brain</span>
      </div>
      <div className={styles.social}>
        <span>
          <a href="#">Twitter</a>
        </span>
        <span>
          <a href="#">Instagram</a>
        </span>
        <span>
          <a href="#">Facebook</a>
        </span>
      </div>
    </section>
  );
};

export default Footer;
