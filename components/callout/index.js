import React from "react";
import Text from "./text/text";
import Companies from "./companies/companies";
import People from "./people/people";

export default function Callout() {
  return (
    <div className="callout d-flex justify-content-between align-items-center w-100">
      <Companies />
      <Text />
      <People />
    </div>
  );
}
