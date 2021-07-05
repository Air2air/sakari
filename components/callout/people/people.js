import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./People.module.scss";

const People = () => {
  /* Entry animation */
  const controls = useAnimation();
  useEffect(() => {
    controls.start((i) => ({
      scale: 1,
      transition: { duration: 1, delay: i * 0.1, type: "spring" },
    }));
  }, []);

  const initialScale = 0;

  return (
    <>
      <div className={styles.people_container}>
        <motion.div
          initial={{ scale: initialScale }}
          custom={0}
          animate={controls}
          className={styles.people_1}
        />
        <motion.div
          initial={{ scale: initialScale }}
          s
          custom={7}
          animate={controls}
          className={styles.people_9}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={2}
          animate={controls}
          className={styles.people_3}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={3}
          animate={controls}
          className={styles.people_4}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={8}
          animate={controls}
          className={styles.people_5}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={5}
          animate={controls}
          className={styles.people_6}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={6}
          animate={controls}
          className={styles.people_7}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={4}
          animate={controls}
          className={styles.people_8}
        />
        <motion.div
          initial={{ scale: initialScale }}
          custom={2}
          animate={controls}
          className={styles.people_9}
        />
      </div>
    </>
  );
};

export default People;
