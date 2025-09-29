import React, { Component, Fragment } from 'react'
import Privecy_Policy from '../components/Privecy_Policy/Privecy_Policy'
import PageTop from '../components/PageTop/PageTop'
import Action from '../components/CallToAction/Action'

export class Privecy extends Component {
  render() {
    return (
      <Fragment>
        <PageTop pagetitle= "Privacy & Policy"/>
        <Privecy_Policy/>
        <Action/>
      </Fragment>
    )
  }
}

export default Privecy