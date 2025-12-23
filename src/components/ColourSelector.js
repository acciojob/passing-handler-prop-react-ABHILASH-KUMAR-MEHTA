// src/components/ColourSelector.js
import React from "react";

const ColourSelector = ({ config, setSelectedColor }) => {
  const { classname, label, background } = config;

  return (
    <button
      className={classname}
      onClick={() => setSelectedColor(background)}
    >
      {label}
    </button>
  );
};

export default ColourSelector;
