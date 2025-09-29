import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import seoimage from "../../images/seo-optimization-banner_33099-1690.jpg"

gsap.registerPlugin(ScrollTrigger);

const Seo = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".seo-services",
      { y:50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".seo-services",
          start: "top 50%",
          end: "bottom 20%",
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

    {/* Text Content Section */}
    <Col lg={6} md={12} sm={12} className="mb-4 mb-lg-0">
      <h2 className="title">Search Engine Optimization (SEO)</h2>
      <p className="description">
        We enhance your website’s visibility on search engines to drive more organic traffic. 
        Our SEO strategies ensure your business ranks higher, attracts relevant visitors, 
        and achieves measurable results.
      </p>

      <h3 className="offer-title">What we offer:</h3>
      <ul className="services-list">
        <li>
          <FaCheckCircle className="icon" /> Keyword research and analysis
        </li>
        <li>
          <FaCheckCircle className="icon" /> On-page optimization (meta tags, headings, URL structure)
        </li>
        <li>
          <FaCheckCircle className="icon" /> Technical SEO (site speed, mobile-friendliness, crawlability)
        </li>
        <li>
          <FaCheckCircle className="icon" /> Content optimization and creation for better rankings
        </li>
        <li>
          <FaCheckCircle className="icon" /> Backlink building and outreach strategies
        </li>
        <li>
          <FaCheckCircle className="icon" /> Local SEO and Google My Business optimization
        </li>
        <li>
          <FaCheckCircle className="icon" /> Analytics and performance tracking with reports
        </li>
      </ul>
    </Col>

    {/* Image Section */}
    <Col lg={6} md={12} sm={12} className="text-center services-image">
      <div className="image-wrapper" style={{ marginRight: "17px" }}>
        <img 
          src={seoimage}
          alt="Website Development"  
          className="img-fluid rounded shadow"  
        />
      </div>
    </Col>

  </Row>
</Container>




{/* Pricing Section - Navy Background */}
<div className="seo-services py-5" style={{ background: "#0A184A", padding: "60px 0", borderRadius: "2rem" }}>
  <Container>
    <h2 className="text-center mb-5" style={{ color: "#ffffff", fontSize: "3rem", fontWeight: "bold" }}>
      Affordable SEO Plans
    </h2>
    <p className="text-center text-white" style={{ marginTop: "-2rem", marginBottom: "2rem" }}>
      Choose an SEO plan that suits your business goals. From basic optimization to full-scale SEO strategies, our pricing is transparent and designed to boost your search engine visibility.
    </p>
    <Row className="justify-content-center">
      
      {/* Basic Plan */}
      <Col lg={4} md={6} sm={12} className="mb-4">
        <div style={{ background: "#fff", borderRadius: "12px", padding: "30px 25px", boxShadow: "0px 6px 20px rgba(0,0,0,0.1)", textAlign: "center", border: "1px solid #eee" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 style={{ fontWeight: "700", color: "#000", fontSize: "2rem" }}>Basic SEO</h4>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: "2rem", fontWeight: "800", color: "#000" }}>$149.99</span>
              <span style={{ marginTop: "-7px", marginLeft: "4rem", textDecoration: "line-through", textDecorationColor: "red", color: "red", fontSize: "1.5rem", fontWeight: "bold" }}>$199</span>
            </div>
          </div>

          {/* Features */}
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px", textAlign: "left" }}>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Basic Keyword Research</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />On-page Optimization (Meta & Headers)</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Site Audit & Recommendations</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Google Analytics Setup</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />1 Week Optimization Report</li>
          </ul>

          <p style={{ fontSize: "0.9rem", color: "#000", marginBottom: "20px", fontWeight: "500" }}>
            Ideal for small websites or businesses starting SEO for the first time.
          </p>

          <div className="button-container-1" style={{ marginLeft: "auto" }}>
            <button type="button" style={{ background: "linear-gradient(45deg, #002266, #000436)", color: "white", borderRadius: "9px" }}>
              View SEO Services
            </button>
          </div>
        </div>
      </Col>

      {/* Standard Plan */}
      <Col lg={4} md={6} sm={12} className="mb-4">
        <div style={{ background: "#fff", borderRadius: "12px", padding: "30px 25px", boxShadow: "0px 6px 20px rgba(0,0,0,0.1)", textAlign: "center", border: "1px solid #eee" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 style={{ fontWeight: "700", color: "#000", fontSize: "2rem" }}>Standard </h4>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: "2rem", fontWeight: "800", color: "#000" }}>$299.99</span>
              <span style={{ marginTop: "-7px", marginLeft: "4rem", textDecoration: "line-through", textDecorationColor: "red", color: "red", fontSize: "1.5rem", fontWeight: "bold" }}>$399</span>
            </div>
          </div>

          {/* Features */}
          <ul className="custom-scroll" style={{ listStyle: "none", padding: 0, marginBottom: "20px", textAlign: "left" }}>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Advanced Keyword Research</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />On-page & Technical SEO</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Content Optimization & Blogging</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Backlink Recommendations</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />2 Weeks Performance Report</li>
          </ul>

          <p style={{ fontSize: "0.9rem", color: "#000", marginBottom: "20px", fontWeight: "500" }}>
            Perfect for small to medium businesses aiming to improve their search rankings.
          </p>

          <div className="button-container-1" style={{ marginLeft: "auto" }}>
            <button type="button" style={{ background: "linear-gradient(45deg, #002266, #000436)", color: "white", borderRadius: "9px" }}>
              View SEO Services
            </button>
          </div>
        </div>
      </Col>

      {/* Premium Plan */}
      <Col lg={4} md={6} sm={12} className="mb-4">
        <div style={{ background: "#fff", borderRadius: "12px", padding: "19px 25px", boxShadow: "0px 6px 20px rgba(0,0,0,0.1)", textAlign: "center", border: "1px solid #eee" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 style={{ fontWeight: "700", color: "#000", fontSize: "2rem" }}>Premium </h4>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: "2rem", fontWeight: "800", color: "#000" }}>$499.99</span>
              <span style={{ marginTop: "-7px", marginLeft: "4rem", textDecoration: "line-through", textDecorationColor: "red", color: "red", fontSize: "1.5rem", fontWeight: "bold" }}>$699</span>
            </div>
          </div>

          {/* Features */}
          <ul className="custom-scroll" style={{ listStyle: "none", padding: 0, marginBottom: "20px", textAlign: "left", overflowY: "auto" }}>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Full SEO Audit & Strategy</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Custom Content & Blogging Plan</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Backlink Building & Outreach</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Local & Technical SEO Optimization</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />Monthly Performance Reporting</li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}><FaCheckCircle style={{ marginRight: "8px", color: "black" }} />4 Weeks Full Implementation</li>
          </ul>

          <p style={{ fontSize: "0.9rem", color: "#000", marginBottom: "20px", fontWeight: "500" }}>
            Best for businesses looking for comprehensive SEO solutions and long-term growth.
          </p>

          <div className="button-container-1" style={{ marginLeft: "auto" }}>
            <button type="button" style={{ background: "linear-gradient(45deg, #002266, #000436)", color: "white", borderRadius: "9px" }}>
              View SEO Services
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

export default Seo;
