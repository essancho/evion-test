import React from "react";

import classes from '../../styles/EmblaCarousel/EmblaCarousel.module.scss'

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className={`${classes.Embla__button} ${classes.Embla__buttonPrev}`}
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className={classes.Embla__button__svg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 5L7.5 10L12.5 15" stroke="#C53458" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className={`${classes.Embla__button} ${classes.Embla__buttonNext}`}
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className={classes.Embla__button__svg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 15L12.5 10L7.5 5" stroke="#C53458" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>


  </button>
);
