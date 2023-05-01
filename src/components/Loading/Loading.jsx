import React from 'react';
import styles from './Loading.module.css';
import { motion } from 'framer-motion';
const Loading = () => {
  return (
    <>
      <section className={styles.landing}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Alfonso Martín
        </motion.h1>
      </section>
    </>
  );
};

export default Loading;
