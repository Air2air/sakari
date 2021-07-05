import React, { useState, useEffect } from "react";
import Text from "./text/text";
import Companies from "./companies/companies";
import People from "./people/people";
import styles from "./Callout.module.scss";

const Callout = () => {
  return (
    <>
      <Text />
      <div className={styles.callout}>
        <People />
        <Companies />
      </div>
    </>
  );
};

export default Callout;
