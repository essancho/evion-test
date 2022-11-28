import React, { useEffect, useState } from "react";

import classes from "../../styles/Filters/Filters.module.scss";
import { PARAMETERS_CARS } from "../../helpers/const";

import Accordion from "../Accordion/Accordion";
import MultiSelectField from "../MultiSelectField/MultiSelectField";

const Filters = ({ options }: any) => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filtersIsOpen = filtersOpen ? classes.Filters_open : "";
  const filtersClasses = [classes.Filters, filtersIsOpen];

  const [dataCars, setDataCars] = useState([]);

  useEffect(() => {
    const carsName = options.map((item: any) => ({
      label: item.name,
      value: item.id,
    }));

    setDataCars(carsName);
  }, []);

  return (
    <div className={filtersClasses.join(" ")}>
      <button
        className={classes.Filters__btn}
        onClick={() => setFiltersOpen((prev) => !prev)}
      >
        <p className={classes.Filters__title}>Filters</p>
      </button>
      <div className={classes.Filters__content}>
        <MultiSelectField placeholder="Car model" options={dataCars} />
        <Accordion parameters={PARAMETERS_CARS} />
      </div>
    </div>
  );
};

export default Filters;
