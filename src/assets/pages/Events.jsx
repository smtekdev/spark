import React, { Component, Fragment } from 'react'
import Navebar from '../components/Navebar/Navebar'
import PageTop from '../components/PageTop/PageTop'
import Action from '../components/CallToAction/Action'
import Footer from '../components/Footer/Footer'
import Event_card from '../components/Event_Card/Event_Card'

export class Events extends Component {
  render() {
    return (
      <Fragment>
         <PageTop pagetitle="Events"/>
         <Event_card/>
          <Action/>
      </Fragment>
    )
  }
}

export default Events