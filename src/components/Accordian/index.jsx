import React, { useState } from 'react';
import classes from './Accordian.module.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Accordion({ title, description, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`shadow ${classes.accordionContainer} mt-3`}>
      <div className={classes.accordionHeader}>
        <div>
          <p className={`f-16 fw-600 ${classes.title}`}>{title}</p>
          <p className={`f-14 fw-500 ${classes.description}`}>{description}</p>
        </div>
        <div className={classes.accordionIcon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div className={`${classes.accordionBody} ${isOpen ? classes.open : ''}`}>
        {children}
      </div>
    </div>
  );
}
