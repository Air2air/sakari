import {React, useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./People.module.scss";




export default function People() {


  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.3 },
    }))
  }, [])



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5, delay: .1 }}
      className={styles.people_container}
    >
      <motion.div custom={0} animate={controls} className={styles.people_1}></motion.div>
      <motion.div custom={1} animate={controls} className={styles.people_9}></motion.div>
      <motion.div custom={2} animate={controls} className={styles.people_3}></motion.div>
      <motion.div custom={3} animate={controls} className={styles.people_4}></motion.div>
      <motion.div custom={4} animate={controls} className={styles.people_5}></motion.div>
      <motion.div custom={5} animate={controls} className={styles.people_6}></motion.div>
      <motion.div custom={6} animate={controls} className={styles.people_7}></motion.div>
      <motion.div custom={7} animate={controls} className={styles.people_8}></motion.div>
      <motion.div custom={8} animate={controls} className={styles.people_2}></motion.div>
    </motion.div>
  );
}
