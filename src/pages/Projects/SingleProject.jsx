import React, { useEffect, useState } from 'react';
import styles from './SingleProject.module.css';
import { useParams, Link } from 'react-router-dom';
import {
  work1,
  workphotos1,
  workphotos2,
  workphotos3,
  workphotos4,
  workphotos5,
} from '../../../public/img';
import Footer from '../../components/Footer/Footer';

const SingleProject = ({ data }) => {
  const [imgs, setImgs] = useState([]);
  const [title, setTitle] = useState('');
  const [span, setSpan] = useState('');
  const [about, setAbout] = useState([]);
  const [year, setYear] = useState('');
  const [service, setService] = useState('');
  const [client, setClient] = useState('');
  const [nextImg, setNextImg] = useState('');
  // const [datos, setDatos] = useState('');
  // const [location, setLocation] = useState('');
  // const [date, setDate] = useState('');
  // const [shot, setShot] = useState('');
  const [id, setId] = useState(useParams().slug);
  const [slug, setSlug] = useState(useParams().slug);
  const [index, setIndex] = useState(useParams().slug);

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      let obj = data[i];
      if (obj.slug == slug) {
        setImgs(obj.img);
        setTitle(obj.title);
        setSpan(obj.span);
        setAbout(obj.about);
        setYear(obj.year);
        setService(obj.service);
        setClient(obj.client);
        setNextImg(() => {
          if (i < data.length) {
            return data[i + 1]?.img;
          } else {
            work1;
          }
        });
        // setDatos(obj);
        // setLocation(obj.location);
        // setDate(obj.date);
        // setShot(obj.shot);
        setIndex(obj.id);
      }
    }
  }, []);
  console.log(data[index]);
  return (
    <div className={styles.singlework}>
      <Link to={'/work'} className={styles.back}>
        back to projects
      </Link>
      <img className={styles.cover} src={imgs} alt="" />
      <h1 className={styles.title}>{title + span}</h1>
      <section className={styles.info}>
        <div className={styles.about}>
          <h3 className={styles.subtitle}>About</h3>
          <div className={styles.textcontainer}>
            {about.map((item, index) => (
              <p key={index}>{item.text}</p>
            ))}
          </div>
        </div>
        <div className={styles.infodetails}>
          <h3 className={styles.subtitle}>Details</h3>
          <div className={styles.infocontainer}>
            <div className={styles.infodata}>
              <h3>YAER</h3>
              <p>{year}</p>
            </div>
            <div className={styles.infodata}>
              <h3>SERVICE</h3>
              <p>{service}</p>
            </div>
            <div className={styles.infodata}>
              <h3>CLIENT</h3>
              <p>{client}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.photoscontainer}>
        <img src={workphotos1} alt="" />
        <img src={workphotos2} alt="" />
        <img src={workphotos3} alt="" />
        <img src={workphotos4} alt="" />
        <img src={workphotos5} alt="" />
      </section>
      {nextImg ? (
        <section className={styles.next}>
          <h2>NEXT PROJECT</h2>
          <h3>Some random title</h3>
          <img src={nextImg} alt="" />
        </section>
      ) : null}

      <Footer />
    </div>
  );
};

export default SingleProject;
