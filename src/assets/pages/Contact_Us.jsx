import React, { Component, Fragment } from 'react'
import Navebar from '../components/Navebar/Navebar'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import Contact__Us_Form from '../components/Contact_Us_Form/Contact__Us_Form'

export class Contact_Us extends Component {
  render() {
    return (
      <Fragment>
        <PageTop pagetitle="Contact Us"/>
        <Contact__Us_Form/>
      </Fragment>
    )
  }
}

export default Contact_Us