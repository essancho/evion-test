import React from "react";

import classes from "../../styles/Accordion/Accordion.module.scss";
import AccordionItem from "./AccordionItem";

const Accordion = ({ parameters }: any) => {
  return (
    <div className={classes.Accordion}>
      <ul className={classes.Accordion__list}>
        {parameters.map((el: any, index: number) => (
          <AccordionItem key={index} item={el} />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
