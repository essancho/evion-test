import React, { useState } from "react";

import classes from "../../styles/Accordion/Accordion.module.scss";

import RangeFilter from "../RangeFilter/RangeFilter";
import RangeInputs from "../RangeInputs/RangeInputs";

const AccordionItem = ({ item }: any) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const accordionItemClassIsOpen = accordionOpen
    ? classes.Accordion__item_open
    : "";

  const accordionItemClasses = [
    classes.Accordion__item,
    accordionItemClassIsOpen,
  ];

  return (
    <li className={accordionItemClasses.join(" ")}>
      <button
        className={classes.Accordion__btn}
        onClick={() => setAccordionOpen((prev) => !prev)}
      >
        <span>{item.name}</span>
      </button>
      <div className={classes.Accordion__content}>
        <RangeInputs />
        <RangeFilter />
      </div>
    </li>
  );
};

export default AccordionItem;
