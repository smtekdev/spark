import React, { Component, Fragment } from 'react'
import Navebar from '../components/Navebar/Navebar'
import PageTop from '../components/PageTop/PageTop'
import Action from '../components/CallToAction/Action'
import Footer from '../components/Footer/Footer'
import Blogs_Detail from '../components/Blogs_Detail/Blogs_Detail'

export class Blog_Detail extends Component {
  render() {
    return (
      <Fragment>
          <Blogs_Detail/>
          <Action/>
      </Fragment>
    )
  }
}

export default Blog_Detail