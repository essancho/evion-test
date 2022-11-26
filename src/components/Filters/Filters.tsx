import React, { useState } from "react";

import classes from "../../styles/Filters/Filters.module.scss";

const Filters = (options: any) => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtersIsOpen = filtersOpen ? classes.Filters_open : "";

  const filtersClasses = [classes.Filters, filtersIsOpen];

  return (
    <div className={filtersClasses.join(" ")}>
      <button
        className={classes.Filters__btn}
        onClick={() => setFiltersOpen((prev) => !prev)}
      >
        <p className={classes.Filters__title}>Filters</p>
      </button>
      <div className="Filter__content"></div>
    </div>
  );
};

export default Filters;
