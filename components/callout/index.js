import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { TextLeft, TextRight } from "./text/text";
import Companies from "./companies/companies";
import People from "./people/people";
import CalloutCta from "./calloutCta";
import styles from "./Callout.module.scss";

const Callout = () => {
  const animateCalloutLeft = () => ({
    translateX: -900,
    transition: { duration: 0.8, delay: 7, ease: "backInOut" },
  });

  const animateCalloutRight = () => ({
    translateX: 900,
    transition: { duration: 0.8, delay: 7, ease: "backInOut" },
  });

  return (
    <>
      <div className={styles.callout_wrapper}>

      <CalloutCta />

        <div className={styles.callout_animation}>
          <motion.div
            initial={{ translateX: 0 }}
            animate={animateCalloutLeft}
            className="d-flex flex-column align-items-center w-50"
          >
            <TextLeft delayWrapperLeft={3} delayWord1={1} delayWord2={1.5} />
            <People delay={1} />
          </motion.div>
          <motion.div
            initial={{ translateX: 0 }}
            animate={animateCalloutRight}
            className="d-flex flex-column align-items-center w-50"
          >
            <TextRight delayWrapperRight={4} delayWord3={3} delayWord4={3.5} />
            <Companies delay={2} />
          </motion.div>
        </div>

      </div>
    </>
  );
};

export default Callout;
