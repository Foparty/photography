import React from 'react';
import styles from './Exhibitions.module.css';
import ExhibitionsBlock from '../../components/ExhibitionsBlock/ExhibitionsBlock';
import Cta from '../../components/Cta/Cta';
import Footer from '../../components/Footer/Footer';

const Exhibitions = ({ exhibitions }) => {
  return (
    <>
      <section className={styles.exhibitions}>
        <h1 className={styles.title}>Exhibitions</h1>
        <div className={styles.content}>
          <h2 className={styles.sectiontitle}>
            CURRENT <span>EXHIBITIONS</span>
          </h2>
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
              slug={item.slug}
            />
          ))}
        </div>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <h2 className={styles.sectiontitle}>
            PAST <span>EXHIBITIONS</span>
          </h2>
          {exhibitions.slice(3, 6).map((item, index) => (
            <ExhibitionsBlock
              key={index}
              img={item.img}
              details={item.details}
              title={item.title}
              span={item.span}
              text={item.text}
              link={item.link}
              date={item.date}
              slug={item.slug}
            />
          ))}
        </div>

        <Cta />
        <Footer />
      </section>
    </>
  );
};

export default Exhibitions;
