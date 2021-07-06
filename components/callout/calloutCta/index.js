import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./CalloutCta.module.scss";

const CalloutCta = () => {
  const animateCalloutCtaText = () => ({
    scale: [0, 3],
    transition: { duration: 0.8, delay: 7 },
  });

  const animateCalloutCtaButton = () => ({
    scale: [0, 1],
    transition: { duration: 0.3, delay: 7.5 },
  });

  return (
    <>
      <div className={styles.callout_cta}>
        <motion.div
          initial={{ scale: 0 }}
          animate={animateCalloutCtaText}
          className={styles.text}
        >
          As easy as email.
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={animateCalloutCtaButton}
          className={styles.button}
        >
          Get started free
        </motion.div>
      </div>
    </>
  );
};

export default CalloutCta;
