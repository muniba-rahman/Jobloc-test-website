import React from 'react';
import classes from "./ProfileCard.module.css";
import profilePic from "../../assets/profile-card-image.png";

export default function ProfileCard() {
  return (
    <div className={`shadow ${classes.mainDiv}`}>
      <div className={classes.topDiv}></div>
      <img src={profilePic} alt="img" className={classes.profilePic} />
      <div className={classes.contentDiv}>
        <p className={`f-18 fw-600 ${classes.name}`}>Albert Flores</p>
        <p className="f-14 fw-500">Senior Product Designer  |  UI/UX</p>
        <p className="f-14 fw-500">Designer  |  Graphic Designer  |  Web...</p>
        <p className={`f-12 fw-500 ${classes.smallText}`}>Clinton, Maryland</p>
      </div>
    </div>
  )
}
