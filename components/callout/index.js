import React from "react";
import Text from "./text";
import Companies from "./companies";
import People from "./people";

export default function Callout() {
  return (
    <div className="callout d-flex justify-content-between align-items-center w-100">
      <Companies />
      <Text />
      <People />
    </div>
  );
}
