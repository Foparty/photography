import React, { useState, useRef } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const openRef = useRef();

  const links = [
    {
      num: '01',
      name: 'home',
      link: '/',
    },
    {
      num: '02',
      name: 'projects',
      link: '/work',
    },
    {
      num: '03',
      name: 'exhibitions',
      link: '/exhibitions',
    },
    {
      num: '04',
      name: 'about',
      link: '/about',
    },
    {
      num: '05',
      name: 'contact',
      link: '/contact',
    },
  ];

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>
        <Link to={'/'}>Gabriel Asdrúbal</Link>
      </h2>
      <button
        className={styles.hamburger}
        onClick={() => {
          if (isOpen) {
            openRef.current.className = styles.shown;
          } else {
            openRef.current.className = styles.navlist;
          }
          setisOpen(!isOpen);
        }}
      >
        <RxHamburgerMenu />
      </button>
      <ul ref={openRef} className={styles.navlist}>
        {links.map((item, index) => (
          <li className={styles.link} key={index}>
            <span className={styles.num}>{item.num}</span>
            <Link
              className={styles.links}
              to={item.link}
              onClick={() => (openRef.current.className = styles.navlist)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
