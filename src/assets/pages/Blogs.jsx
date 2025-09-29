import React, { Component, Fragment } from 'react'
import Navebar from '../components/Navebar/Navebar'
import PageTop from '../components/PageTop/PageTop'
import Action from '../components/CallToAction/Action'
import Footer from '../components/Footer/Footer'
import Blog_Card from '../components/Blog_Card/Blog_Card'




export class Blogs extends Component {
  render() {
    return (
      <Fragment>   
         <PageTop pagetitle="Blogs"/>
         <Blog_Card/>
          <Action/>
      </Fragment>
    )
  }
}

export default Blogs