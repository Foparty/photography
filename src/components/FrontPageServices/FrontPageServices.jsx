import React from 'react';
import styles from './FrontPageServices.module.css';
import LandingServiceBlock from '../LandingServiceBlock/LandingServiceBlock';

const FrontPageServices = () => {
  const services = [
    {
      num: '01',
      title: 'photo shooting',
      text: 'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Atque impedit voluptate neque exercitationem corrupti odio officia accusantium veniam, iure ex.',
    },
    {
      num: '02',
      title: 'video editing',
      text: 'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Atque impedit voluptate neque exercitationem corrupti odio officia accusantium veniam, iure ex.',
    },
    {
      num: '03',
      title: 'art direction',
      text: 'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Atque impedit voluptate neque exercitationem corrupti odio officia accusantium veniam, iure ex.',
    },
  ];
  return (
    <section className={styles.services}>
      <p className={styles.title}>services</p>
      <div className={styles.servicescontainer}>
        {services.map((item, index) => (
          <LandingServiceBlock key={index} num={item.num} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
};

export default FrontPageServices;
