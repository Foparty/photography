import React from 'react';
import styles from './FronPageWork.module.css';
import { Link } from 'react-router-dom';
// import { work1, work2, work3, work4 } from '../../../public/img';
import WorkPageComponent from '../WorkPageComponent/WorkPageComponent';
import { works } from '../../../public/data/work';

const FronPageWork = () => {
  // const works = [
  //   {
  //     title: 'dancing in black & ',
  //     span: 'white',
  //     img: work1,
  //     location: 'New York',
  //     date: 'October 2021',
  //   },
  //   {
  //     title: 'Style ',
  //     span: '& Fashion',
  //     img: work2,
  //     location: 'New York',
  //     date: 'October 2021',
  //   },
  //   {
  //     title: 'Week ',
  //     span: 'Fashion',
  //     img: work3,
  //     location: 'New York',
  //     date: 'October 2021',
  //   },
  //   {
  //     title: 'One ',
  //     span: 'Eye',
  //     img: work4,
  //     location: 'New York',
  //     date: 'October 2021',
  //   },
  // ];
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
        {works.slice(0, 4).map((item, index) => (
          <WorkPageComponent
            key={index}
            title={item.title}
            span={item.span}
            img={item.img}
            location={item.location}
            date={item.date}
          />
        ))}
      </div>
    </section>
  );
};

export default FronPageWork;
