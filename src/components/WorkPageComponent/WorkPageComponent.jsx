import React from 'react';
import styles from './WorkPageComponent.module.css';
import { Link } from 'react-router-dom';

const WorkPageComponent = ({ title, span, img, location, month, year, slug }) => {
  console.log(slug);
  return (
    <div>
      <h2 className={styles.title}>
        {title} <span className={styles.titlespan}>{span}</span>
      </h2>
      <Link to={`/${slug}`}>
        <img className={styles.img} src={img} alt={`${title} ${span}`} />
      </Link>
      <p className={styles.location}>{location}</p>
      <date className={styles.date}>{month + ' ' + year}</date>
    </div>
  );
};

export default WorkPageComponent;
