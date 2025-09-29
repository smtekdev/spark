import React, { Component, Fragment } from 'react'
import Navebar from '../components/Navebar/Navebar'
import PageTop from '../components/PageTop/PageTop'
import Logo_Services from '../components/Logo_Services/Logo_Services'
import Web_Services from '../components/Web_Services/Web_Services'
import Seo from '../components/Seo/Seo'
import App_Services from '../components/App_Services/App_Services'
import Digital_Services from '../components/Digital_Services/Digital_Services'
import Action from '../components/CallToAction/Action'
import Footer from '../components/Footer/Footer'



export class Services extends Component {
  render() {
    return (
     <Fragment>
        <PageTop pagetitle="Our Services"/>
        <Logo_Services/>
        <Web_Services/>
        <Seo/>
        <App_Services/>
        <Digital_Services/>
        <Action/>
     </Fragment>
    )
  }
}

export default Services