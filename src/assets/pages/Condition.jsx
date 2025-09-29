import React, { Component, Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop'
import Action from '../components/CallToAction/Action'
import Terms_Condition from '../components/Terms_Condition/Terms_Condition'

export class Condition extends Component {
  render() {
    return (
    <Fragment>
         <PageTop pagetitle="Terms & Condition"/>
         <Terms_Condition/>
         <Action/>
    </Fragment>
    )
  }
}

export default Condition