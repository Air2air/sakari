import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./People.module.scss";

const People = () => {
  const [count, setCount] = useState(1);

  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.3 },
    }));
  }, []);

  return (
    <>
      <div onClick={() => setCount(count + 1)}>{count}</div>
      <motion.div
        className={styles.people_container}
        onClick={() => setCount(count + 1)}
      >
        {count}
        <motion.div custom={0} animate={controls} className={styles.people_1} />
        <motion.div custom={1} animate={controls} className={styles.people_9} />
        <motion.div custom={2} animate={controls} className={styles.people_3} />
        <motion.div custom={3} animate={controls} className={styles.people_4} />
        <motion.div custom={4} animate={controls} className={styles.people_5} />
        <motion.div custom={5} animate={controls} className={styles.people_6} />
        <motion.div custom={6} animate={controls} className={styles.people_7} />
        <motion.div animate={controls} className={styles.people_8} />
        <motion.div animate={controls} className={styles.people_9} />
      </motion.div>
    </>
  );
};

export default People;
