import React from "react";
// import { ReactNode } from "react";

const ExpandableText = ({ value, maxChars }) => {
  if (value.length <= maxChars) return <p>{value}</p>;

  return (
    <p style={{ color: "#000000", fontSize: "22px" }}>
      {value.substring(0, maxChars)}...{" "}
    </p>
  );
};

export default ExpandableText;
