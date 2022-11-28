import React from "react";

import classes from "../../styles/RangeFilter/RangeFilter.module.scss";

const RangeFilter = () => {
  return (
    <div className={classes.RangeFilter}>
      <button
        className={`${classes.RangeFilter__btn} ${classes.RangeFilter__btn_left}`}
      ></button>
      <div className={classes.RangeFilter__line}></div>
      <button
        className={`${classes.RangeFilter__btn} ${classes.RangeFilter__btn_right}`}
      ></button>
    </div>
  );
};

export default RangeFilter;
