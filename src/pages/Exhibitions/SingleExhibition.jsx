import React, { useEffect, useState } from 'react';
import styles from './SingleExhibition.module.css';
import { useParams, Link } from 'react-router-dom';
import Cta from '../../components/Cta/Cta';
import Footer from '../../components/Footer/Footer';
import ButtonEmpty from '../../components/ButtonEmpty/ButtonEmpty';

const SingleExhibition = ({ exhibitions }) => {
  const [imgs, setImgs] = useState([]);
  const [title, setTitle] = useState('');
  const [span, setSpan] = useState('');
  const [about, setAbout] = useState([]);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
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
    for (let i = 0; i < exhibitions.length; i++) {
      let obj = exhibitions[i];
      if (obj.slug == slug) {
        setImgs(obj.img);
        setTitle(obj.title);
        setSpan(obj.span);
        setAbout(obj.about);
        setDay(obj.date.date);
        setMonth(obj.date.month);
        setYear(obj.details.year);
        setService(obj.service);
        setClient(obj.client);
        // setNextImg(() => {
        //   if (i < exhibitions.length) {
        //     return exhibitions[i + 1]?.img;
        //   } else {
        //     work1;
        //   }
        // });
        // setDatos(obj);
        // setLocation(obj.location);
        // setDate(obj.date);
        // setShot(obj.shot);
        setIndex(obj.id);
      }
    }
  }, []);
  return (
    <div className={styles.singleexhibition}>
      <Link to={'/exhibitions'} className={styles.back}>
        back to exhibitions
      </Link>
      <div className={styles.exintro}>
        <time className={styles.date}>{day + ' ' + month + ' ' + year}</time>
        <h1 className={styles.title}>{title + span}</h1>
        <img className={styles.cover} src={imgs} alt="" />
      </div>
      <section className={styles.content}>
        <ButtonEmpty text={'Get Tickets'} />
        <div className={styles.infodata}>
          <h2>About</h2>
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
      </section>
      <Cta link={'/contact'} />
      <Footer />
    </div>
  );
};

export default SingleExhibition;
