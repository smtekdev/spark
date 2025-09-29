import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutUs from '../pages/AboutUs'
import Services from '../pages/Services'
import Blogs from '../pages/Blogs'
import Events from '../pages/Events'
import Contact_Us from '../pages/Contact_Us'
import Privecy from '../pages/Privecy'
import Condition from '../pages/Condition'

export class RouteApp extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AboutUs' element = {<AboutUs />} />
        <Route path='/Services' element = {<Services/>} />
        <Route path='/Blogs' element={<Blogs/>} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Contact_Us" element={<Contact_Us />} />
        <Route path="/Privecy" element={<Privecy />} />
        <Route path="/Condition" element={<Condition />} />
      </Routes>
    )
  }
}

export default RouteApp