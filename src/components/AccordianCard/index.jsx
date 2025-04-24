import React from 'react'
import classes from "./AccordianCard.module.css";
import Figma from "../../assets/figma.png";
import { toast } from 'react-toastify';

export default function AccordianCard({data}) {
  const accepted = () => toast.success(`Interview Accepted for ${data?.title} Role...`);
  const denied = () => toast.error(`Interview Denied for ${data?.title} Role...`);
  return (
    <div className={`${classes.mainDiv}`}>
      <img src={Figma} alt="img" className={classes.image}/>
      <div className={classes.contentDiv}>
        <p className={`f-14 fw-600`}>{data?.title}</p>
        <p className={`f-12 fw-500`}>{data?.company}</p>
        <div className={classes.schedule}>
        <p className={`f-12 fw-500`}>{data?.date}</p> |
        <p className={`f-12 fw-500`}>{data?.time}</p> |
        <p className={`f-12 fw-500`}>{data?.mode}</p>
        </div>
      </div>
      <button className={classes.hightlightedBtn} onClick={accepted}>Accepted</button>
      <button className={classes.button} onClick={denied}>Deny</button>
    </div>
  )
}
