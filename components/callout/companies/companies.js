import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Companies.module.scss";

const Companies = () => {
  /* Entry animation */
  const controls = useAnimation();
  useEffect(() => {
    controls.start((i) => ({
      scale: 1,
      transition: { duration: .4, delay: i * 0.1, type: "spring" },
    }));
  }, []);

  const initialScale = 0;

  return (
    <>
      <motion.div className={styles.company_container}>
        <motion.div
          initial={{ scale: initialScale }}
          custom={0}
          animate={controls}
          className={styles.company_1}
        />
        <motion.div
          initial={{ scale: initialScale }}
          s
          custom={7}
          animate={controls}
          className={styles.company_9}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={2}
          animate={controls}
          className={styles.company_3}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={3}
          animate={controls}
          className={styles.company_4}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={8}
          animate={controls}
          className={styles.company_5}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={5}
          animate={controls}
          className={styles.company_6}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={6}
          animate={controls}
          className={styles.company_7}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={4}
          animate={controls}
          className={styles.company_8}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={2}
          animate={controls}
          className={styles.company_9}
        />

        <motion.div
          initial={{ scale: initialScale }}
          custom={10}
          animate={controls}
          className={styles.company_1}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={17}
          animate={controls}
          className={styles.company_9}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={12}
          animate={controls}
          className={styles.company_3}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={13}
          animate={controls}
          className={styles.company_4}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={18}
          animate={controls}
          className={styles.company_5}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={15}
          animate={controls}
          className={styles.company_6}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={16}
          animate={controls}
          className={styles.company_7}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={14}
          animate={controls}
          className={styles.company_8}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={12}
          animate={controls}
          className={styles.company_9}
        />
      </motion.div>
    </>
  );
};

export default Companies;
