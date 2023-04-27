import React from 'react';
import styles from './FrontPageTestimonials.module.css';
import Testimonial from '../Testimonial/Testimonial';
import { testimonial1, testimonial2, testimonial3 } from '../../../public/img';

const FrontPageTestimonials = () => {
  const testimonials = [
    {
      img: testimonial1,
      title: 'I Really Enjoyed Working With Gabriel',
      testimonial: [
        'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Atque impedit voluptate neque exercitationem corrupti odio officia accusantium veniam, iure ex.',
        'Sapiente dignissimos illo nam odio dicta vel tenetur? Hic voluptates corporis rem quae saepe numquam quaerat ducimus laboriosam id molestiae maiores, expedita.',
      ],
      data: {
        name: 'Michelle Lindstrøm',
        location: 'photoshhot',
      },
    },
    {
      img: testimonial2,
      title: 'I Really Enjoyed Working With Gabriel',
      testimonial: [
        'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Atque impedit voluptate neque exercitationem corrupti odio officia accusantium veniam, iure ex.',
      ],
      data: {
        name: 'Jannis Jackson',
        location: 'Art Director',
      },
    },
    {
      img: testimonial3,
      title: 'I Really Enjoyed Working With Gabriel',
      testimonial: [
        'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Atque impedit voluptate neque exercitationem corrupti odio officia accusantium veniam, iure ex Sapiente dignissimos illo nam odio dicta vel tenetur? Hic voluptates corporis rem quae saepe numquam quaerat ducimus laboriosam id molestiae maiores, expedita.',
      ],
      data: {
        name: 'Daniela Berg',
        location: 'Video Editing',
      },
    },
  ];
  return (
    <section className={styles.testimonials}>
      <div className={styles.textcontainer}>
        <h2 className={styles.title}>
          What my clients <span>Say</span>
        </h2>
        <p className={styles.sub}>
          Worked with over <span>50 clients</span> around the world
        </p>
        <button className={styles.button}>
          <span>Work With Me</span>
          <div className={styles.arrowcontainer}>
            <div className={styles.arrowline}></div>
            <div className={styles.arrow}></div>
          </div>
        </button>
      </div>
      <div className={styles.testimonialscontainer}>
        {testimonials.map((item, index) => (
          <Testimonial
            key={index}
            img={item.img}
            title={item.title}
            testimonial={item.testimonial}
            data={item.data}
          />
        ))}
      </div>
    </section>
  );
};

export default FrontPageTestimonials;
