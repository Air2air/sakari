import React, { useState, useEffect } from "react";
import { TextLeft, TextRight } from "./text/text";
import Companies from "./companies/companies";
import People from "./people/people";
import styles from "./Callout.module.scss";

const Callout = () => {
  return (
    <>
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-column align-items-center w-50">
          <TextLeft delayWord1={1} delayWord2={1.5}/>
          <People delay={1}/>
        </div>
        <div className="d-flex flex-column align-items-center w-50">
          <TextRight delayWord3={3} delayWord4={3.5}/>
          <Companies delay={2}/>
        </div>
      </div>
    </>
  );
};

export default Callout;
