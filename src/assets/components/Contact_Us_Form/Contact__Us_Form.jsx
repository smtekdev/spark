import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export class Contact__Us_Form extends Component {
  render() {
    return (
      <Fragment>
        <Container>
           <Row style={{ paddingTop:"70px", paddingBottom:"70px" }}>
             <Col lg={5} md={6} sm={12} className='contact_detail'>
                <div className='contact_box'>
                    <h1 className='contact_heading'>Get in Touch With Us Today</h1>
                    <p className='contact_description'>We’re always happy to hear from you! Whether you have questions, feedback, or want to learn more about our services, our team is ready to assist. Fill out the form below and we’ll get back to you as soon as possible.</p>
                    <ul className="contact-info">
                        <li className="icon-box">
                            <div className="icon-circle">
                            <FaPhoneAlt />
                            </div>
                            <span className="info-text">+1 234 567 890</span>
                        </li>
                        <li className="icon-box">
                            <div className="icon-circle">
                            <FaEnvelope />
                            </div>
                            <span className="info-text">example@gmail.com</span>
                        </li>
                        <li className="icon-box">
                            <div className="icon-circle">
                            <FaMapMarkerAlt />
                            </div>
                            <span className="info-text">123 Main Street, New York, USA</span>
                        </li>
                     </ul>
                </div>
            </Col>
           <Col lg={7} md={6} sm={12}>
      <div className="contact-form-wrapper">
        <form className="glass-form">
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label text-light">Full Name</label>
            <input
              type="text"
              className="form-control contact-input"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Address */}
          <div className="mb-3">
            <label className="form-label text-light">Email Address</label>
            <input
              type="email"
              className="form-control contact-input"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-3">
            <label className="form-label text-light">Phone Number</label>
            <input
              type="tel"
              className="form-control contact-input"
              placeholder="+1 234 567 890"
            />
          </div>

          {/* Services Input (Dropdown Removed) */}
          <div className="mb-3">
            <label className="form-label text-light">Services</label>
            <input
              type="text"
              className="form-control contact-input"
              placeholder="Enter service you are interested in"
            />
          </div>

          {/* Message */}
          <div className="mb-3">
            <label className="form-label text-light">Message</label>
            <textarea
              rows="4"
              className="form-control contact-input"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn contact-btn w-100" style={{ background:"white" }}>
            Send Message
          </button>
        </form>
      </div>
    </Col>
           </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Contact__Us_Form