import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Text.module.scss";

const Text = () => {
  /* Entry animation */
  // const controls = useAnimation();
  // useEffect(() => {
  //   controls.start((i) => ({
  //     transition: { delay: i * 0.1 },
  //   }));
  // }, []);

  const globalSettings = (i) => ({
    scale: 1,
    transition: { duration: 1, delay: i * 0.3, type: "spring" },
  });

  const initialScale = 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.07, opacity: 1 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.15 }}
      className={styles.text_container}
    >
      <motion.div
        initial={{ scale: initialScale }}
        custom={0}
        animate={globalSettings}
        className={styles.company_1}
      >
        Text
      </motion.div>
      <motion.div
        initial={{ scale: initialScale }}
        custom={1}
        animate={globalSettings}
        className={styles.company_9}
      >
        Everybody
      </motion.div>
      <motion.div
        initial={{ scale: initialScale }}
        custom={2}
        animate={globalSettings}
        className={styles.company_1}
      >
        from
      </motion.div>
      <motion.div
        initial={{ scale: initialScale }}
        custom={3}
        animate={globalSettings}
        className={styles.company_9}
      >
        Everything
      </motion.div>
    </motion.div>
  );
};

export default Text;
