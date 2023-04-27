import React from 'react';
import styles from './FrontPageExhibitions.module.css';
import { Link } from 'react-router-dom';
import { ex1, ex2, ex3 } from '../../../public/img';
import ExhibitionsBlock from '../ExhibitionsBlock/ExhibitionsBlock';

const FrontPageExhibitions = () => {
  const exhibits = [
    {
      img: ex1,
      details: {
        location: 'New York',
        building: 'Town hall',
        year: 2022,
      },
      title: 'Independent',
      span: 'beauty',
      text: 'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Atque impedit voluptate neque exercitationem corrupti odio officia accusantium veniam, iure ex.',
      link: '/#',
      date: {
        month: 'jun',
        date: '16',
      },
    },
    {
      img: ex2,
      details: {
        location: 'Berlin',
        building: 'Kunsthalle',
        year: 2022,
      },
      title: 'In Humanity We',
      span: 'Trust',
      text: 'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Lorem ipsum dolor, sit amet, consectetur adipisicing elit.',
      link: '/#',
      date: {
        month: 'Mar',
        date: '02',
      },
    },
    {
      img: ex3,
      details: {
        location: 'Madrid',
        building: 'El Prado',
        year: 2023,
      },
      title: 'Madrid at',
      span: 'Night',
      text: 'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Atque impedit voluptate neque exercitationem corrupti odio officia accusantium veniam, iure ex.',
      link: '/#',
      date: {
        month: 'Feb',
        date: '01',
      },
    },
  ];
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
        {exhibits.map((item, index) => (
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
