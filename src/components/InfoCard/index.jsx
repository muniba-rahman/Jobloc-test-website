import React from 'react';
import classes from "./InfoCard.module.css";
import { InfoCardData } from '../../data';

export default function InfoCard({className}) {
  return (
    <div className={`${classes.card} ${className}`}>
      {InfoCardData?.map((e, i)=>{
        return(
          <div className={`${classes.cardDiv} ${i === InfoCardData.length-1 ? classes.noBorder : classes.border}`} key={i}>
            <p className={`f-14 fw-500`}>{e?.title}</p>
            <p className={`f-16 fw-500 ${classes.count}`}>{e?.count}</p>
          </div>
        )
      })}
    </div>
  )
}
