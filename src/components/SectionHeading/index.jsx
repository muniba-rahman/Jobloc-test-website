import React from 'react'
import classes from "./SectionHeading.module.css"

export default function SectionHeading({heading, linkText, className}) {
  return (
    <div className={`${classes.mainDiv} ${className}`}>
      <p className={`${classes.title} f-18 fw-500`}>{heading}</p>
      <p className={`${classes.linkText} f-14 fw-500`}>{linkText}</p>
    </div>
  )
}
