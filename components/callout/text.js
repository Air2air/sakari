import React from "react";
import { motion } from "framer-motion";
import styles from "./Text.module.scss";

export default function Text() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.07, opacity: 1 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.15 }}
      className={styles.text_container}
    >
      <div className={styles.text}>Text</div>
      <div className={styles.everybody}>everybody</div>
      <div className={styles.from}>from</div>
      <div className={styles.everything}>everything</div>
    </motion.div>
  );
}
