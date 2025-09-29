import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export class PageTop extends Component {
  render() {
    const {pagetitle} = this.props; //dynamic title
    return (
      <Fragment>
        <Container fluid className="Main-background">
          {/* Video as background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="bg-video"
          >
            <source
              src={require("../../images/172-20-dark-blue-circuit-lines-glow-4k-wq33f2mydf_1080__D.mp4")}
              type="video/mp4"
            />
          </video>

          {/* Content on top of video */}
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className="page-top-content text-center">
                <h1>{pagetitle}</h1>
                <ul className="breadcrumb-list">
                  <li>Home</li>
                  <li>|</li>
                  <li>{pagetitle}</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </Fragment>
    );
  }
}

export default PageTop;
