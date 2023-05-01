import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className={styles.mainblock}>
        <div className={styles.left}>
          <h2>Alfonso Martín</h2>
          <small>photograph & visual artist</small>
        </div>
        <div className={styles.right}>
          <div className={styles.column}>
            <h3>Menu</h3>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/work'}>Projects</Link>
              </li>
              <li>
                <Link to={'/exhibitions'}>Exhibitions</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Info</h3>
            <ul>
              <li>Styleguide</li>
              <li>Licensing</li>
              <li>Changelog</li>
            </ul>
          </div>
        </div>
      </div>
      <section className={styles.footer}>
        <div className={styles.copy}>
          <span>
            &copy; Made by{' '}
            <a href="http://www.alfonsomartingarcia.com" target="_blank" rel="noreferrer">
              Alfonso Martín
            </a>
          </span>
          <span>
            Design by{' '}
            <a href="https://templates.gola.io" target="_blank" rel="noreferrer">
              Pawel Gola
            </a>
          </span>
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
    </>
  );
};

export default Footer;
