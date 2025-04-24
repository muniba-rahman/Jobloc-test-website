import React from 'react'
import classes from "./JobCard.module.css"
import Teams from "../../assets/jobs-card.png"
import Clock from "../../assets/clock.png"
import Location from "../../assets/location.png"
import { toast } from 'react-toastify'
import Saved from "../../assets/saved.png"

export default function JobCard({data, featured}) {
  const saved =()=> toast?.success("Job Saved Successfully...");
  return (
    <div className={classes.mainDiv}>
      {featured && <p className={`f-10 fw-600`}>Promoted</p>}
      <div className={classes.imageDiv}>
        <img src={Teams} alt="img" className={classes.image}/>
        <div className={classes.titleDiv}>
          <p className="f-14 fw-500">{data?.title}</p>
          <p className={`f-12 fw-500`}>{data?.company}</p>
        </div>
      </div>
      <div className={classes.infoDiv}>
          <img src={Location} alt='img' className={classes.location} />
          <p className={`f-12 fw-500`}>{data?.location}</p>
        </div>
        <div className={classes.infoDiv}>
          <img src={Clock} alt='img' className={classes.clock} />
          <p className={`f-12 fw-500`}>{data?.time} | <span className={classes.blueText}>{data?.applicants}</span></p>
        </div>
        <div className={classes.btnDiv}>
          <button className={`btn`}>Apply Now</button>
          <img src={Saved} alt="img" className={classes.savedIcon} onClick={saved} />
        </div>
    </div>
  )
}
