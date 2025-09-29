import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import backgroundimage from "../../images/fsdfa.PNG"

export class Aboutus extends Component {
  render() {
    return (
     <Fragment>
        <Container fluid={true}>
           <Row>
  <Col lg={5} md={12} sm={12}>
    <img src={backgroundimage} alt="Preview" style={{ width: "100%", height: "35rem", objectFit: "cover"  , marginTop: "70px", marginBottom: "70px" , borderRadius: "18px"}}  />
  </Col>

  <Col lg={7} md={12} sm={12} className="d-flex align-items-center">
  <Row className="w-100 g-3">
    {/* First Box */}
    <Col lg={5} md={6} sm={12}className="d-flex justify-content-center align-items-center about-background"  style={{ minHeight: "250px" , width: "22rem" }} >
      <div style={{ padding: "16px" }}>
        <h3 className="box-title" style={{ padding: "26" }}>Igniting Innovation, Driving Growth</h3>
        <p className="box-text">
        We help your business expand efficiently, turning opportunities into measurable growth. Our strategies are designed to maximize impact and drive results.
        </p>
      </div>
    </Col>

    {/* Second Box (Counters) */}
    <Col
      lg={5}
      md={6}
      sm={12}
      className="d-flex flex-column justify-content-center align-items-center about-background"
      style={{ minHeight: "250px" , width: "21rem", marginLeft: "19px" }}
    >
      {/* First Counter */}
      <div className="counter-box text-center mb-4">
        <h3 className="counter-value">450+</h3>
        <p className="counter-label">Live Websites</p>
        <div className="counter-underline"></div>
      </div>

      {/* Second Counter */}
      <div className="counter-box text-center" style={{ marginTop: "-43px", }}>
        <h3 className="counter-value">320+</h3>
        <p className="counter-label">Happy Clients</p>
       
      </div>
    </Col>

    {/* Bottom Wide Box */}
    <Col
      lg={12}
      md={12}
      sm={12}
      className="d-flex justify-content-center align-items-center about-background"
    >
      <div style={{ padding: "26px" }}>
        <h3 className="box-title">Your Growth, Our Priority</h3>
        <p className="box-text">
          At Spark Lab, we fuel creativity and innovation to help businesses thrive. Through cutting-edge solutions and strategic insights, we transform ideas into impactful results, driving sustainable growth and meaningful experiences for our clients
        </p>
      <div className="button-container-1" style={{ marginLeft:"-0.5rem",  }}>
          <span className="mas text-black">Get Started</span>
          <button  id="work" type="button"  name="Hover" style={{  background: "linear-gradient(45deg, #002266, #000436)", color: "white",borderRadius: "9px",  }}
          >  Get Started
          </button>
        </div>
      </div>
    </Col>
  </Row>
</Col>


    </Row>

        </Container>
     </Fragment>
    )
  }
}

export default Aboutus