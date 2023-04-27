import React from 'react';
import styles from './ExhibitionsBlock.module.css';
import { Link } from 'react-router-dom';
import { BsArrowUpRight } from 'react-icons/bs';

const ExhibitionsBlock = ({ img, details, title, span, text, link, date }) => {
  return (
    <div className={styles.block}>
      <img src={img} alt={title} className={styles.img} />
      <div className={styles.content}>
        <p className={styles.details}>
          <span>{details.location}</span>
          <span>{details.building}</span>
          <span>{details.year}</span>
        </p>
        <h2 className={styles.title}>
          {title}
          <span className={styles.span}>{span}</span>
        </h2>
        <p className={styles.text}>{text}</p>
      </div>
      <Link className={styles.link} to={link}>
        Buy Ticket
        <BsArrowUpRight />
      </Link>
      <div className={styles.datecontainer}>
        <p className={styles.month}>{date.month}</p>
        <p className={styles.date}>{date.date}</p>
      </div>
    </div>
  );
};

export default ExhibitionsBlock;
