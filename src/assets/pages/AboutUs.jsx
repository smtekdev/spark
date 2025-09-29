import React, { Component, Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop'
import Navebar from '../components/Navebar/Navebar'
import Footer from '../components/Footer/Footer'
import Main_about from '../components/Main_about/Main_about'
import Mission from '../components/Mission/Mission'
import Choose_Us from '../components/Choose_Us/Choose_Us'
import Action from '../components/CallToAction/Action'



export class AboutUs extends Component {
  render() {
    return (
      <Fragment>    
        <PageTop pagetitle="About Us"/>
        <Main_about/>
      <Mission/>
      <Choose_Us/>
     <Action/>      
      </Fragment>
    )
  }
}

export default AboutUs