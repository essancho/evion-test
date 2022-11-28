import React, { useState, CSSProperties } from "react";

import { ICar } from "../../models";

import classes from "../../styles/CarItem/CarItem.module.scss";
import EmblaCarousel from "../EmblaCarouselColor/EmblaCarouselColor";

interface CarProps {
  option: ICar;
}

const CarItem = ({ option }: CarProps) => {
  const [openPanel, SetOpenPanel] = useState(false);

  const carItemClassIsOpen = openPanel ? classes.CarItem_openPanel : "";

  const carItemClasses = [classes.CarItem, carItemClassIsOpen];

  const isOpenPanelStyle = {
    display: openPanel ? "block" : "none",
  };

  return (
    <>
      <div className={carItemClasses.join(" ")}>
        <button
          className={classes.CarItem__btn}
          onClick={() => SetOpenPanel((prev) => !prev)}
        >
          <p className={classes.CarItem__title}>
            {" "}
            {option.name} {option.model}{" "}
          </p>
          <span className={classes.CarItem__price}>{option.price} $</span>
        </button>
        <div className={classes.CarItem__panel} style={isOpenPanelStyle}>
          <p className={classes.CarItem__panel_title}>Color options</p>
          <EmblaCarousel slides={option.colors} />
        </div>
      </div>
    </>
  );
};

export default CarItem;
