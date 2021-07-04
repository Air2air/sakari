import React from "react";
import { motion } from "framer-motion";
import styles from "./Companies.module.scss";

export default function Companies() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5, delay: .1 }}
      className={styles.company_container}
    >
      <div className={styles.company_1}></div>
      <div className={styles.company_2}></div>
      <div className={styles.company_3}></div>
      <div className={styles.company_4}></div>
      <div className={styles.company_5}></div>
      <div className={styles.company_6}></div>
      <div className={styles.company_7}></div>
      <div className={styles.company_8}></div>
      <div className={styles.company_9}></div>
      <div className={styles.company_10}></div>
      <div className={styles.company_11}></div>
      <div className={styles.company_12}></div>
      <div className={styles.company_13}></div>
      <div className={styles.company_14}></div>
      <div className={styles.company_15}></div>
      <div className={styles.company_16}></div>
      <div className={styles.company_17}></div>
      <div className={styles.company_18}></div>
      <div className={styles.company_19}></div>
      <div className={styles.company_20}></div>
      <div className={styles.company_21}></div>
      <div className={styles.company_22}></div>
      <div className={styles.company_23}></div>
      <div className={styles.company_24}></div>
    </motion.div>
  );
}
