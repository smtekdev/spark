import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import webimage from "../../images/e47df11684 (1).jpg"

gsap.registerPlugin(ScrollTrigger);

const Web_Services = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".web-services",
      { y:50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".web-services",
          start: "top 75%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      {/* Upar Services Section - White Background */}
    <Container fluid className="services-section py-5">
  <Row className="align-items-center">

    {/* Image Section */}
    <Col lg={6} md={12} sm={12} className="text-center services-image">
      <div className="image-wrapper" style={{ marginRight: "17px" }}>
        <img 
          src={webimage} 
          alt="Website Development"  
          className="img-fluid rounded shadow"  
        />
      </div>
    </Col>

    {/* Text Content Section */}
    <Col lg={6} md={12} sm={12} className="mb-4 mb-lg-0">
      <h2 className="title">Website Development</h2>
      <p className="description">
        We build responsive, fast, and fully-functional websites tailored to your business needs. 
        From simple landing pages to complex e-commerce platforms, our team ensures a professional online presence 
        that engages your audience and drives results.
      </p>

      <h3 className="offer-title">What we offer:</h3>
      <ul className="services-list">
        <li>
          <FaCheckCircle className="icon" /> Custom website design (responsive & mobile-friendly)
        </li>
        <li>
          <FaCheckCircle className="icon" /> Up to 10 pages for Standard websites
        </li>
        <li>
          <FaCheckCircle className="icon" /> E-commerce integration and payment gateways
        </li>
        <li>
          <FaCheckCircle className="icon" /> Content Management System (CMS) setup
        </li>
        <li>
          <FaCheckCircle className="icon" /> SEO-friendly structure and performance optimization
        </li>
        <li>
          <FaCheckCircle className="icon" /> Contact forms, social media, and analytics integration
        </li>
        <li>
          <FaCheckCircle className="icon" /> Multiple revisions to ensure satisfaction
        </li>
      </ul>
    </Col>

  </Row>
</Container>


      {/* Pricing Section - Navy Background */}
<div className="web-services py-5" style={{ background: "#0A184A", padding: "60px 0", borderRadius: "2rem" }}>
  <Container>
    <h2 className="text-center mb-5" style={{ color: "#ffffff", fontSize: "3rem", fontWeight: "bold" }}>
      Affordable Website Development Plans
    </h2>
    <p className="text-center text-white" style={{ marginTop: "-2rem", marginBottom: "2rem" }}>
      Choose a plan that suits your business. From a simple website to a fully-featured online presence, our pricing is transparent and designed to give professional results without hidden costs.
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

          {/* Features */}
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px", textAlign: "left" }}>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Up to 5 Pages (Home, About, Contact)</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Responsive Design for Mobile & Desktop</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Basic SEO Optimization</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Contact Form Integration</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />1 Week Delivery Time</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />100% Satisfaction Guarantee</li>
          </ul>

          <p style={{ fontSize: "0.9rem", color: "#000", marginBottom: "20px", fontWeight: "500" }}>
            Ideal for small businesses or individuals launching their first website.
          </p>

          <div className="button-container-1" style={{ marginLeft: "auto" }}>
            <button type="button" style={{ background: "linear-gradient(45deg, #002266, #000436)", color: "white", borderRadius: "9px" }}>
              View Our Services
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

          {/* Features */}
          <ul className="custom-scroll" style={{ listStyle: "none", padding: 0, marginBottom: "20px", textAlign: "left" }}>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Up to 10 Pages</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Responsive & Mobile Friendly</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Advanced SEO Optimization</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Blog/News Section</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Social Media Integration</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />2 Weeks Delivery Time</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />100% Satisfaction Guarantee</li>
          </ul>

          <p style={{ fontSize: "0.9rem", color: "#000", marginBottom: "20px", fontWeight: "500" }}>
            Perfect for growing businesses looking for a professional web presence.
          </p>

          <div className="button-container-1" style={{ marginLeft: "auto" }}>
            <button type="button" style={{ background: "linear-gradient(45deg, #002266, #000436)", color: "white", borderRadius: "9px" }}>
              View Our Services
            </button>
          </div>
        </div>
      </Col>

      {/* Premium Plan */}
      <Col  lg={4} md={6} sm={12} className="mb-4">
        <div style={{ background: "#fff", borderRadius: "12px", padding: "30px 25px", boxShadow: "0px 6px 20px rgba(0,0,0,0.1)", textAlign: "center", border: "1px solid #eee" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 style={{ fontWeight: "700", color: "#000", fontSize: "2rem" }}>Premium</h4>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: "2rem", fontWeight: "800", color: "#000" }}>$499.99</span>
              <span style={{ marginTop: "-7px", marginLeft: "4rem", textDecoration: "line-through", textDecorationColor: "red", color: "red", fontSize: "1.5rem", fontWeight: "bold" }}>$699</span>
            </div>
          </div>

          {/* Features */}
          <ul className="custom-scroll" style={{ listStyle: "none", padding: 0, marginBottom: "20px", textAlign: "left", overflowY: "auto" }}>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Unlimited Pages</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Custom Web Application Features</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />E-commerce Integration</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Premium SEO & Performance Optimization</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Custom Design & Branding</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Social Media & Marketing Tools Integration</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />4 Weeks Delivery Time</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />100% Satisfaction Guarantee</li>
          </ul>

          <p style={{ fontSize: "0.9rem", color: "#000", marginBottom: "20px", fontWeight: "500" }}>
            Best for established businesses or complex projects requiring advanced web solutions.
          </p>

          <div className="button-container-1" style={{ marginLeft: "auto" }}>
            <button type="button" style={{ background: "linear-gradient(45deg, #002266, #000436)", color: "white", borderRadius: "9px" }}>
              View Our Services
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

export default Web_Services;
