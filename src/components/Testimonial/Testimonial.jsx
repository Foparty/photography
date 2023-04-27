import React from 'react';
import styles from './Testimonial.module.css';

const Testimonial = ({ img, title, testimonial, data }) => {
  return (
    <div className={styles.testimonial}>
      <img src={img} alt={data.name} className={styles.img} />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {testimonial.map((item, index) => (
          <p className={styles.text} key={index}>
            {item}
          </p>
        ))}
        <div className={styles.info}>
          <span>{data.name}</span>
          <span>{data.location}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
