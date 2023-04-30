import React from 'react';
import styles from './Projects.module.css';
import RoundButton from '../../components/RoundButton/RoundButton';
import WorkPageComponent from '../../components/WorkPageComponent/WorkPageComponent';
import Cta from '../../components/Cta/Cta';
import Footer from '../../components/Footer/Footer';

const Projects = ({ data }) => {
  return (
    <main className={styles.projects}>
      <section className={styles.header}>
        <div className={styles.textcontainer}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.sub}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, laborum?
          </p>
        </div>
        <div className={styles.buttoncontainer}>
          <RoundButton link={'/contact'} size={'1rem'} widthb={'7rem'}>
            Get in touch
          </RoundButton>
        </div>
      </section>
      <div className={styles.content}>
        {data.map((item, index) => (
          <WorkPageComponent
            key={index}
            title={item.title}
            span={item.span}
            img={item.img}
            location={item.location}
            date={item.date}
            slug={item.slug}
          />
        ))}
      </div>
      <Cta />
      <Footer />
    </main>
  );
};

export default Projects;
