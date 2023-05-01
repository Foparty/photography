import React from 'react';
import styles from './About.module.css';
import { avatar1 } from '/public/img';
import Cta from '../../components/Cta/Cta';
import Footer from '../../components/Footer/Footer';
// import avatar1 from '/public/img/';

const About = () => {
  return (
    <>
      <section className={styles.about}>
        <img src={avatar1} alt="" className={styles.avatar} />
        <h2 className={styles.sectiontitle}>About</h2>
        <h1 className={styles.title}>Alfonso Martín</h1>
      </section>
      <div className={styles.infodata}>
        <h2>About</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perferendis debitis
            et perspiciatis, odit voluptatibus fuga a animi aspernatur laboriosam nesciunt incidunt
            maiores tenetur maxime tempore atque. Dolorum dolorem non eligendi repudiandae,
            consectetur, harum cupiditate quo est incidunt nulla deleniti?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, fugiat. Molestiae
            eligendi vel sequi nesciunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim sapiente
            praesentium, qui possimus necessitatibus voluptatem inventore voluptate corporis atque
            consequatur minus? Temporibus?
          </p>
        </div>
        <h2>INFORMATION</h2>
        <div className={styles.infotable}>
          <div className={styles.tablerow}>
            <h3>Date</h3>
            <p>16 Jun 2022-18 Oct 2022</p>
          </div>
          <div className={styles.tablerow}>
            <h3>Opening hours</h3>
            <p>Monday to Saturday from 11am to 6pm</p>
          </div>
          <div className={styles.tablerow}>
            <h3>Location</h3>
            <p>Art Studio</p>
          </div>
          <div className={styles.tablerow}>
            <h3>Address</h3>
            <p>Somewhere over the rainbow 23</p>
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </>
  );
};

export default About;
