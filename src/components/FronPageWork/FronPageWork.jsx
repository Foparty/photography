import React from 'react';
import styles from './FronPageWork.module.css';
import { Link } from 'react-router-dom';
import WorkPageComponent from '../WorkPageComponent/WorkPageComponent';

const FronPageWork = ({ data }) => {
  return (
    <section className={styles.work}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Latest <span>Work</span>
        </h2>
        <div className={styles.headerlinkcontainer}>
          <Link className={styles.headerlink} to={'/work'}>
            View All
          </Link>
          <div className={styles.arrowcontainer}>
            <div className={styles.arrowline}></div>
            <div className={styles.arrow}></div>
          </div>
        </div>
      </header>
      <div className={styles.content}>
        {data.slice(0, 4).map((item, index) => (
          <WorkPageComponent
            key={index}
            title={item.title}
            span={item.span}
            img={item.img}
            location={item.location}
            date={item.date}
            slug={item.slug}
            month={item.month}
            year={item.year}
          />
        ))}
      </div>
    </section>
  );
};

export default FronPageWork;
