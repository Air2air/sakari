import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./Text.module.scss";

const wordDuration = 0.3;

/*  Initial position */
const initialWord1X = -500;
const initialWord1Y = 0;

const initialWord2X = 0;
const initialWord2Y = -500;

const initialWord3X = 0;
const initialWord3Y = -900;

const initialWord4X = 900;
const initialWord4Y = 0;

export const TextLeft = (props) => {
  const animateTextWrapperLeft = () => ({
    scale: [1, 1.3, 1],
    transition: { duration: wordDuration, delay: props.delayWrapperLeft },
  });

  const animateWord1 = () => ({
    translateX: 0,
    translateY: 0,
    transition: { duration: wordDuration, delay: props.delayWord1 },
  });

  const animateWord2 = () => ({
    translateX: 0,
    translateY: 0,
    transition: { duration: wordDuration, delay: props.delayWord2 },
  });

  return (
    <motion.div
      animate={animateTextWrapperLeft}
      className={styles.text_container}
    >
      <motion.div
        initial={{
          translateX: initialWord1X,
          translateY: initialWord1Y,
        }}
        custom={0}
        delay={2}
        animate={animateWord1}
      >
        Text
      </motion.div>
      <motion.div
        initial={{
          translateX: initialWord2X,
          translateY: initialWord2Y,
        }}
        custom={1}
        animate={animateWord2}
      >
        everyone
      </motion.div>
    </motion.div>
  );
};

export const TextRight = (props) => {
  const animateTextWrapperRight = () => ({
    scale: [1, 1.3, 1],
    transition: { duration: wordDuration, delay: props.delayWrapperRight },
  });

  const animateWord3 = () => ({
    translateX: 0,
    translateY: 0,
    transition: { duration: wordDuration, delay: props.delayWord3 },
  });

  const animateWord4 = (delayWord4) => ({
    translateX: 0,
    translateY: 0,
    transition: { duration: wordDuration, delay: props.delayWord4 },
  });

  return (
    <motion.div
      animate={animateTextWrapperRight}
      className={styles.text_container}
    >
      <motion.div
        initial={{
          translateX: initialWord3X,
          translateY: initialWord3Y,
        }}
        custom={2}
        animate={animateWord3}
      >
        from
      </motion.div>
      <motion.div
        initial={{
          translateX: initialWord4X,
          translateY: initialWord4Y,
        }}
        custom={3}
        animate={animateWord4}
      >
        everything
      </motion.div>
    </motion.div>
  );
};
