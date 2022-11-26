import React from "react";

import { CARS } from "../../helpers/const";

import CarItem from "../CarItem/CarItem";

import classes from "../../styles/basic/ModalWrapper.module.scss";

const CarShop: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className={classes.ModalWrapper}>
          {CARS.map((item) => (
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
