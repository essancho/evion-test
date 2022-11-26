import React, { useState } from "react";

import { CARS } from "../../helpers/const";

import CarItem from "../CarItem/CarItem";

import classes from "../../styles/basic/BasicStyles.module.scss";

const CarShop: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchedCars = CARS.filter(
    (car) =>
      car.name.toLowerCase().includes(searchValue) ||
      car.model.toLowerCase().includes(searchValue)
  );

  return (
    <>
      <div className="container">
        <div className={classes.ModalWrapper}>
          <div className={classes.InputContainer}>
            <label
              className={`${classes.InputContainer__label} ${classes.InputContainer__label_icon}`}
            >
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
            </label>
          </div>
          {searchedCars.map((item) => (
            <CarItem
              key={`${item.id}_${item.name}_${item.model}`}
              option={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarShop;
