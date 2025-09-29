import React, { Component, Fragment } from 'react'
import Navebar from '../components/Navebar/Navebar'
import Action from '../components/CallToAction/Action'
import Footer from '../components/Footer/Footer'
import Events_Detail from '../components/Events_Detail/Events_Detail'

export class Event_Detail extends Component {
  render() {
    return (
      <Fragment>   
            <Events_Detail/>
            <Action/>         
      </Fragment>
    )
  }
}

export default Event_Detail