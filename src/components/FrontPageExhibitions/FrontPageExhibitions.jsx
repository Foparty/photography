import React from 'react';
import styles from './FrontPageExhibitions.module.css';
import { Link } from 'react-router-dom';
import ExhibitionsBlock from '../ExhibitionsBlock/ExhibitionsBlock';

const FrontPageExhibitions = ({ exhibitions }) => {
  return (
    <section className={styles.exhibitions}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Exhibitions <span>&apos;22</span>
        </h2>
        <div className={styles.headerlinkcontainer}>
          <Link className={styles.headerlink} to={'/exhibitions'}>
            View All
          </Link>
          <div className={styles.arrowcontainer}>
            <div className={styles.arrowline}></div>
            <div className={styles.arrow}></div>
          </div>
        </div>
      </header>
      <div className={styles.content}>
        {exhibitions.slice(0, 3).map((item, index) => (
          <ExhibitionsBlock
            key={index}
            img={item.img}
            details={item.details}
            title={item.title}
            span={item.span}
            text={item.text}
            link={item.link}
            date={item.date}
          />
        ))}
      </div>
    </section>
  );
};

export default FrontPageExhibitions;
