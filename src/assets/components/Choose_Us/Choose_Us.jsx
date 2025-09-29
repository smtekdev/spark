import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaUsers, FaCogs, FaChartLine, FaLightbulb, FaHandshake } from 'react-icons/fa' // import icons

export class Choose_Us extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid>
          <div style={{ marginTop: "3rem" }}>
            <h5 style={{ textAlign: "center" }}>WHY CHOOSE US</h5>
            <h1 style={{ fontSize: "68px", fontWeight: "bold", lineHeight: "73px", textAlign: "center", marginTop: "-11px" }}>
              Discover Why Spark Lab <br /> Is Your Best Choice
            </h1>
            <p style={{ textAlign: "center", marginTop: "21px" }}>
              At Spark Lab, we combine creativity and innovation to craft digital solutions that truly reflect your brand.
              Our focus is on delivering results <br /> that inspire trust and drive long-term growth.
            </p>
          </div>

          <Row className="mb-4 mt-4">
            <Col lg={4} md={6} sm={12} className="mb-4">
              <div className="choose-box text-center">
                <FaUsers size={50} color="#002266" /> {/* Icon */}
                <h4>Expert Team</h4>
                <p>Our skilled professionals bring creativity and innovation to every project.</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-4">
              <div className="choose-box text-center">
                <FaCogs size={50} color="#002266" /> {/* Icon */}
                <h4>Custom Solutions</h4>
                <p>We craft strategies tailored to your unique brand and business goals.</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-4">
              <div className="choose-box text-center">
                <FaChartLine size={50} color="#002266" /> {/* Icon */}
                <h4>Proven Results</h4>
                <p>We focus on measurable outcomes that drive growth and success.</p>
              </div>
            </Col>
          </Row>

          <Row className='d-flex align-items-center justify-content-center'>
            <Col lg={4} md={6} sm={12} className="mb-4">
              <div className="choose-box text-center">
                <FaLightbulb size={50} color="#002266" /> {/* Icon */}
                <h4>Innovation First</h4>
                <p>We stay ahead with the latest tech to keep your brand future-ready.</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-4">
              <div className="choose-box text-center">
                <FaHandshake size={50} color="#002266" /> {/* Icon */}
                <h4>Trusted Partnership</h4>
                <p>We go beyond development to become your long-term growth partner.</p>
              </div>
            </Col>
          </Row>

        </Container>
      </Fragment>
    )
  }
}

export default Choose_Us
