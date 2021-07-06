import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Companies.module.scss";

const Companies = (props) => {
  const [show, setShow] = useState(false);

  const initialScale = 0;

  const controls = useAnimation();
  controls.start((i) => ({
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.07, type: "spring" },
  }));

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, props.delay * 1000);
  }, [show]);

  if (!show) {
    return null;
  } else {
    return (
      <>
        <div className={styles.company_container}>
          <motion.div
            initial={{ scale: initialScale }}
            custom={1}
            animate={controls}
            className={styles.company_1}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={2}
            animate={controls}
            className={styles.company_2}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={3}
            animate={controls}
            className={styles.company_3}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={4}
            animate={controls}
            className={styles.company_4}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={5}
            animate={controls}
            className={styles.company_5}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={6}
            animate={controls}
            className={styles.company_6}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={7}
            animate={controls}
            className={styles.company_7}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={8}
            animate={controls}
            className={styles.company_8}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={9}
            animate={controls}
            className={styles.company_9}
          />

          <motion.div
            initial={{ scale: initialScale }}
            custom={10}
            animate={controls}
            className={styles.company_10}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={11}
            animate={controls}
            className={styles.company_11}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={12}
            animate={controls}
            className={styles.company_12}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={13}
            animate={controls}
            className={styles.company_13}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={14}
            animate={controls}
            className={styles.company_14}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={15}
            animate={controls}
            className={styles.company_15}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={16}
            animate={controls}
            className={styles.company_16}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={17}
            animate={controls}
            className={styles.company_17}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={18}
            animate={controls}
            className={styles.company_18}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={19}
            animate={controls}
            className={styles.company_19}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={20}
            animate={controls}
            className={styles.company_20}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={21}
            animate={controls}
            className={styles.company_21}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={22}
            animate={controls}
            className={styles.company_22}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={23}
            animate={controls}
            className={styles.company_23}
          />
          <motion.div
            initial={{ scale: initialScale }}
            custom={24}
            animate={controls}
            className={styles.company_24}
          />
        </div>
      </>
    );
  }
};

export default Companies;
