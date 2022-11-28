import React, { useState } from "react";

import classes from "../../styles/basic/BasicStyles.module.scss";

const RangeInputs = () => {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  return (
    <div className={classes.RangeInputs}>
      <input
        type="text"
        value={minValue}
        onChange={(e) => setMinValue(e.target.value)}
      />
      <input
        type="text"
        value={maxValue}
        onChange={(e) => setMaxValue(e.target.value)}
      />
    </div>
  );
};

export default RangeInputs;
