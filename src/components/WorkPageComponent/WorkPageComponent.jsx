import React from 'react';
import styles from './WorkPageComponent.module.css';

const WorkPageComponent = ({ title, span, img, location, date }) => {
  return (
    <div>
      <h2 className={styles.title}>
        {title} <span className={styles.titlespan}>{span}</span>
      </h2>
      <img className={styles.img} src={img} alt={`${title} ${span}`} />
      <p className={styles.location}>{location}</p>
      <date className={styles.date}>{date}</date>
    </div>
  );
};

export default WorkPageComponent;
