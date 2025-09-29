import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import digitalimage from "../../images/social-media-marketing-concept-marketing-with-applications_23-2150063134-1.png"

gsap.registerPlugin(ScrollTrigger);

const Digital_Services = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".digital-services",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".digital-services",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      {/* Services Section - White Background */}
      <Container fluid className="services-section py-5">
        <Row className="align-items-center">
          {/* Text Content Section */}
          <Col lg={6} md={12} sm={12} className="mb-4 mb-lg-0">
            <h2 className="title">Digital Services</h2>
            <p className="description">
              We provide comprehensive digital services to grow your online presence. From websites and mobile apps to SEO and social media, our team delivers tailored solutions to meet your business goals.
            </p>

            <h3 className="offer-title">What we offer:</h3>
            <ul className="services-list">
              <li>
                <FaCheckCircle className="icon" /> Website & Web App Development
              </li>
              <li>
                <FaCheckCircle className="icon" /> Mobile App Development (iOS & Android)
              </li>
              <li>
                <FaCheckCircle className="icon" /> UI/UX Design and Branding
              </li>
              <li>
                <FaCheckCircle className="icon" /> SEO & Content Marketing
              </li>
              <li>
                <FaCheckCircle className="icon" /> Social Media Management
              </li>
              <li>
                <FaCheckCircle className="icon" /> Analytics & Performance Tracking
              </li>
              <li>
                <FaCheckCircle className="icon" /> Digital Strategy Consultation
              </li>
            </ul>
          </Col>

          {/* Image Section */}
          <Col lg={6} md={12} sm={12} className="text-center services-image">
            <div className="image-wrapper" style={{ marginRight: "17px" }}>
              <img
                src={digitalimage}
                alt="Digital Services"
                className="img-fluid rounded shadow"
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Pricing Section - Navy Background */}
      <div className="digital-services py-5" style={{ background: "#0A184A", padding: "60px 0", borderRadius: "2rem" }}>
        <Container>
          <h2 className="text-center mb-5" style={{ color: "#ffffff", fontSize: "3rem", fontWeight: "bold" }}>
            Affordable Digital Service Plans
          </h2>
          <p className="text-center text-white" style={{ marginTop: "-2rem", marginBottom: "2rem" }}>
            Choose a plan that fits your business needs. From basic digital services to full-scale online solutions, our pricing is transparent and designed to help your brand grow.
          </p>
          <Row className="justify-content-center">

            {/* Basic Plan */}
            <Col lg={4} md={6} sm={12} className="mb-4">
              <div style={{ background: "#fff", borderRadius: "12px", padding: "30px 25px", boxShadow: "0px 6px 20px rgba(0,0,0,0.1)", textAlign: "center", border: "1px solid #eee" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h4 style={{ fontWeight: "700", color: "#000", fontSize: "2rem" }}>Basic</h4>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ fontSize: "2rem", fontWeight: "800", color: "#000" }}>$149.99</span>
                    <span style={{ marginTop: "-7px", marginLeft: "4rem", textDecoration: "line-through", textDecorationColor: "red", color: "red", fontSize: "1.5rem", fontWeight: "bold" }}>$199</span>
                  </div>
                </div>

                <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px", textAlign: "left", lineHeight: "2rem" }}>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Basic Website Development</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />UI/UX Design for One Platform</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Basic SEO & Analytics Setup</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />1 Week Delivery</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Email Support</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Social Media Setup (1 Platform)</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Satisfaction Guarantee</li>
                </ul>

                <div className="button-container-1" style={{ marginLeft: "auto" }}>
                  <button type="button" style={{ background: "linear-gradient(45deg, #002266, #000436)", color: "white", borderRadius: "9px" }}>
                    View Digital Services
                  </button>
                </div>
              </div>
            </Col>

            {/* Standard Plan */}
            <Col lg={4} md={6} sm={12} className="mb-4">
              <div style={{ background: "#fff", borderRadius: "12px", padding: "30px 25px", boxShadow: "0px 6px 20px rgba(0,0,0,0.1)", textAlign: "center", border: "1px solid #eee" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h4 style={{ fontWeight: "700", color: "#000", fontSize: "2rem" }}>Standard</h4>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ fontSize: "2rem", fontWeight: "800", color: "#000" }}>$299.99</span>
                    <span style={{ marginTop: "-7px", marginLeft: "4rem", textDecoration: "line-through", textDecorationColor: "red", color: "red", fontSize: "1.5rem", fontWeight: "bold" }}>$399</span>
                  </div>
                </div>

                <ul className="custom-scroll" style={{ listStyle: "none", padding: 0, marginBottom: "20px", textAlign: "left", lineHeight: "2rem"  ,  maxHeight : "230px"}}>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Advanced Website & App Development</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />UI/UX Design for Multiple Platforms</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />SEO Optimization & Content Strategy</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Social Media Management (2 Platforms)</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />2 Weeks Performance Report</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Email & Chat Support</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Satisfaction Guarantee</li>
                </ul>

                <div className="button-container-1" style={{ marginLeft: "auto" }}>
                  <button type="button" style={{ background: "linear-gradient(45deg, #002266, #000436)", color: "white", borderRadius: "9px" }}>
                    View Digital Services
                  </button>
                </div>
              </div>
            </Col>

            {/* Premium Plan */}
            <Col  lg={4} md={6} sm={12} className="mb-4">
              <div style={{ background: "#fff", borderRadius: "12px", padding: "19px 25px", boxShadow: "0px 6px 20px rgba(0,0,0,0.1)", textAlign: "center", border: "1px solid #eee" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h4 style={{ fontWeight: "700", color: "#000", fontSize: "2rem" }}>Premium</h4>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ fontSize: "2rem", fontWeight: "800", color: "#000" }}>$499.99</span>
                    <span style={{ marginTop: "-7px", marginLeft: "4rem", textDecoration: "line-through", textDecorationColor: "red", color: "red", fontSize: "1.5rem", fontWeight: "bold" }}>$699</span>
                  </div>
                </div>

                <ul className="custom-scroll" style={{ listStyle: "none", padding: 0, marginBottom: "20px", textAlign: "left", overflowY: "auto"  , lineHeight: "2rem" , maxHeight : "248px" }}>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Full Website & App Suite Development</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Custom UI/UX & Branding Strategy</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Advanced SEO, Content & Social Media</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Digital Marketing Campaigns</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Monthly Performance Analytics</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />4 Weeks Full Implementation</li>
                  <li><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Dedicated Support & Consultation</li>
                </ul>

                <div className="button-container-1" style={{ marginLeft: "auto" }}>
                  <button type="button" style={{ background: "linear-gradient(45deg, #002266, #000436)", color: "white", borderRadius: "9px" }}>
                    View Digital Services
                  </button>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
};

export default Digital_Services;
