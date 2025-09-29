import React, { Component, Fragment } from "react";

// CSS
import '../css/bootstrap.min.css';
import '../css/custome.css';

// Components
import Navebar from '../components/Navebar/Navebar';
import Hero from '../components/Hero/Hero';
import WorkingProcess from '../components/WorkingProcess/WorkingProcess';
import Aboutus from '../components/About Us/Aboutus';
import Portfolio from '../components/Portfolio/Portfolio';
import Testimonial from '../components/Testimonial/Testimonial';
import Action from '../components/CallToAction/Action';
import Footer from '../components/Footer/Footer';


export class HomePage extends Component {
  render() {
    return (
      <Fragment>
       <Hero/>
       <Aboutus />
       <WorkingProcess/>
       <Portfolio/>
       <Testimonial/>
       <Action/>
      </Fragment>
    )
  }
}

export default HomePage