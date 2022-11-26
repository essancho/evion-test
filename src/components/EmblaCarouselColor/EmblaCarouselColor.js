import React, { useState, useEffect, useCallback } from "react";

import useEmblaCarousel from "embla-carousel-react";

import { PrevButton, NextButton } from "./EmblaCarouselButtons";

import classes from '../../styles/EmblaCarousel/EmblaCarousel.module.scss'

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps"
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className={classes.Embla}>
      <div className={classes.Embla__viewport} ref={viewportRef}>
        <div className={classes.Embla__container}>
          {slides.map((slide, index) => (
            <div className={classes.Embla__slide} key={index}>
              <div className={classes.Embla__slide__inner}>
                <div className={classes.Embla__slide__color} style={{ backgroundColor: slide }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
