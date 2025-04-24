import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProfileCard from '../../components/ProfileCard'
import InfoCard from '../../components/InfoCard'
import classes from "./HomePage.module.css"
import Accordion from '../../components/Accordian'
import AccordianCard from '../../components/AccordianCard'
import { calendarCardData, cities, featuredJobsData, JobMode, tabsData } from '../../data'
import { Dropdown } from 'primereact/dropdown'
import SearchIcon from "../../assets/search-white.png"
import SectionHeading from '../../components/SectionHeading'
import JobCard from '../../components/JobCard'

export default function HomePage() {

  const [selectedCity, setSelectedCity] = useState(null);
  const [jobType, setJobType] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [appliedCity, setAppliedCity] = useState(null);
  const [appliedJobType, setAppliedJobType] = useState(null);

  const handleSearch = () => {
    setAppliedSearch(searchInput);
    setAppliedCity(selectedCity);
    setAppliedJobType(jobType);
  };

  //Search Filter
  const filteredJobs = featuredJobsData.filter(job => {
    const matchesSearch = !appliedSearch || job?.title?.toLowerCase().includes(appliedSearch.toLowerCase()) || job?.company?.toLowerCase().includes(appliedSearch.toLowerCase());
    const matchesCity = !appliedCity || job.location?.toLowerCase().includes(appliedCity.name.toLowerCase());
    const matchesJobType = !appliedJobType || job?.type === appliedJobType?.name;
    return matchesSearch && matchesCity && matchesJobType;
  });
 
  //Tabs Filter
  const tabFilteredJobs = featuredJobsData.filter(job => {
    if (!activeTab) return filteredJobs.length ? true : false;
    return job.title?.toLowerCase() === activeTab.toLowerCase();
  });

  const JobSection = ({ heading, linkText, jobs, featured = false }) => (
    <>
      <SectionHeading heading={heading} linkText={linkText} className={classes.marginStyle} />
      <div className={classes.jobsDiv}>
        {jobs.length > 0 ? (
          jobs.map((job, index) => <JobCard key={index} data={job} featured={featured} />)
        ) : (
          <p className='f-14 text-danger'>No Job Found With This Title</p>
        )}
      </div>
    </>
  );

  return (
    <>
      <style>
        {`
          .p-dropdown-items{
            background: #fff !important;
            padding-left: 0px;
            padding: 10px;
            margin-block: 10px;
            border-radius: 10px;
          }  
          .p-dropdown-trigger{
            margin-inline: 5px;
          }
    `}
      </style>
      <Container fluid>
        <Row className={`py-4 pt-5 mt-4 gy-4`}>
          <Col lg={3} md={4} sm={5} xs={12}>
            <ProfileCard />
            <InfoCard className={classes.infoClass} />
            <Accordion title={"My Calendar"} description={"Upcoming Interviews"}>
              {calendarCardData?.map((e, _i) => {
                return (
                  <AccordianCard data={e} />
                )
              })}
            </Accordion>
          </Col>
          <Col lg={9} md={8} sm={7} xs={12}>
            <p className="f-22 fw-600">Find your Dream Job, <span className={classes.nameClass}>Albert!</span></p>
            <p className={`f-14 fw-500 ${classes.paraStyle}`}>Explore the latest job openings and apply for the best opportunities available today!</p>

            {/* filter section */}
            <div className={`${classes.filterSection} my-4`}>
              <input type="text" placeholder='Job Title, Company, or Keywords' className={classes.input} value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
              <div className={classes.dropDiv}>
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e?.value)} options={cities} optionLabel="name"
                  placeholder="Select Location" className={`w-full md:w-15rem ${classes.dropClass}`} />
                <Dropdown value={jobType} onChange={(e) => setJobType(e?.value)} options={JobMode} optionLabel="name"
                  placeholder="Job Type" className={`w-full md:w-10rem ${classes.dropClass}`} />
                <button className='btn' onClick={handleSearch}><img src={SearchIcon} alt="img" /> Search</button>
              </div>
            </div>

            {/* tabs section */}
            <div className={`${classes.tabsDiv} my-4`}>
              <p className={`f-14 fw-500 ${classes.text}`}>Similar:</p>
              {tabsData?.map((e, _i) => {
                return (
                  <button onClick={() => setActiveTab(prev => prev === e ? null : e)} className={`${classes.tabs} text-nowrap ${activeTab === e ? classes.activeClass : classes.tabs}`}>{e}</button>
                )
              })}
            </div>
            
            {/* Jobs Section */}
            <JobSection heading="Featured jobs" linkText="See Featured Jobs" jobs={tabFilteredJobs} featured />
            <JobSection heading="Recommended jobs" linkText="See recommended Jobs" jobs={filteredJobs} />
            <JobSection heading="Latest jobs" linkText="See latest Jobs" jobs={filteredJobs} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
