import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { TextLeft, TextRight } from "./text/text";
import Companies from "./companies/companies";
import People from "./people/people";
import styles from "./Callout.module.scss";


const Callout = () => {
  const animateCalloutLeft = () => ({
    translateX: -600,
    transition: { duration: 0.8, delay: 6, ease: "backInOut" },
  });

  const animateCalloutRight = () => ({
    translateX: 600,
    transition: { duration: 0.8, delay: 6, ease: "backInOut" },
  });

  return (
    <>
      <div className="d-flex justify-content-around flex-wrap">
        <motion.div
          initial={{ translateX: 0 }}
          animate={animateCalloutLeft}
          className="d-flex flex-column align-items-center w-50"
        >
          <TextLeft animateCalloutLeft={3} delayWord1={1} delayWord2={1.5} />
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
    </>
  );
};

export default Callout;
