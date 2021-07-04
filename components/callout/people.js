import React from "react";
import { motion } from "framer-motion";
import styles from "./People.module.scss";

export default function People() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5, delay: .1 }}
      className={styles.people_container}
    >
      <div className={styles.people_1}></div>
      <div className={styles.people_9}></div>
      <div className={styles.people_3}></div>
      <div className={styles.people_4}></div>
      <div className={styles.people_5}></div>
      <div className={styles.people_6}></div>
      <div className={styles.people_7}></div>
      <div className={styles.people_8}></div>
      <div className={styles.people_2}></div>
    </motion.div>
  );
}
