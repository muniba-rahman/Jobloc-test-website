import React from 'react'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { ToastContainer } from 'react-toastify';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TopCompanies from './pages/TopCompanies';
import MyCalendar from './pages/MyCalendar';
import JobTracker from './pages/JobTracker';
import Documents from './pages/Documents';
import Messages from './pages/Messages';
import Notification from './pages/Notifications';

export default function App() {
  return (
    <Router>
    <ToastContainer />
      <Header/>
      <div className='bodyDiv'>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/top-companies' element={<TopCompanies/>} />
        <Route path='/job-tracker' element={<JobTracker/>} />
        <Route path='/my-calendar' element={<MyCalendar/>} />
        <Route path='/documents' element={<Documents/>} />
        <Route path='/messages' element={<Messages/>} />
        <Route path='/notifications' element={<Notification/>} />
      </Routes>
      </div>
    </Router>
  )
}
