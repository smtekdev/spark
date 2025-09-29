import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import footerimage from "../../images/spark.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* Footer Main */}
      <div
        className="footer-main bg-contain"
        style={{ background: "linear-gradient(45deg, #002266, #000436)" }}
      >
        <div className="footer-top">
          <Container>
            <Row className="footer-custom-row" style={{ gap: "0" }}>
              {/* Brand Widget */}
              <Col md={6}>
                <div className="footer-widget footer-widget-brand" data-aos="fade-up" data-aos-anchor=".footer-top">
                  <a className="footer-logo" href="/" aria-label="Consulo Logo">
                    <img
                      src={footerimage}
                      alt="Consulo Logo"
                      width="189"
                      height="32"
                      loading="lazy"
                    />
                  </a>
                  <p className="text text-16">
                    Each demo built with Teba will look different. You can customize almost anything
                    in the appearance of your website with only a few
                  </p>
                  <ul className="social-icons list-unstyled d-flex gap-2" data-aos="fade-up" data-aos-anchor=".footer-top">
                    <li>
                      <a className="social-link text" href="https://web.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                        <span className="visually-hidden">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a className="social-link text" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                        <span className="visually-hidden">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a className="social-link text" href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                        <span className="visually-hidden">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a className="social-link text" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                        <span className="visually-hidden">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>

              {/* Quick Links & Services & Info */}
              <Col md={6}>
                <Row style={{ gap: "0" }} >
                  <Col md={4}>
                    <div className="footer-widget footer-widget-menu" data-aos="fade-up" data-aos-anchor=".footer-top">
                      <div className="widget-heading heading text-22">Quick Link</div>
                      <ul className="footer-menu list-unstyled">
                       <li>
                        <Link as={Link} to="/"  className="text text-16 link">Home</Link>
                       </li>
                       <li>
                        <Link as={Link}  to="/AboutUs" className="text text-16 link">About Us</Link>
                       </li>
                       <li>
                        <Link as={Link} to="/Services"  className="text text-16 link">Services</Link>
                       </li>
                       <li>
                        <Link as={Link}  to="/Blogs"  className="text text-16 link">Blogs</Link>
                       </li>
                       <li>
                        <Link as={Link}  to="/Events" className="text text-16 link">Events</Link>
                       </li>
                      <li>
                         <Link as={Link}  to="/Contact_Us" className="text text-16 link">Contact Us</Link>
                      </li>
                      </ul>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="footer-widget footer-widget-menu" data-aos="fade-up" data-aos-anchor=".footer-top">
                      <div className="widget-heading heading text-22">Services</div>
                      <ul className="footer-menu list-unstyled">
                        <li><a href="project.html" className="text text-16 link">Logo Design</a></li>
                        <li><a href="team.html" className="text text-16 link">App Development</a></li>
                        <li><a href="services.html" className="text text-16 link">Website Development</a></li>
                        <li><a href="blog.html" className="text text-16 link">Search Engine Optimization (SEO)</a></li>
                        <li><a href="contact.html" className="text text-16 link">Digital Services</a></li>
                      </ul>
                    </div>
                  </Col>

                  <Col md={4}>
                    <div className="footer-widget footer-widget-menu" data-aos="fade-up" data-aos-anchor=".footer-top">
                      <div className="widget-heading heading text-22">Information</div>
                      <ul className="footer-menu list-unstyled">
                        <li>
                          <Link as={Link} to="/Privecy" className="text text-16 link">Privacy Policy</Link>
                          </li>
                        <li>
                          <Link as={Link} to="/Condition" className="text text-16 link">Terms & Conditions</Link>
                          </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom py-3">
          <Container>
            <Row className="align-items-center" style={{ gap: "0" }}>
              <Col md={6}>
                <div className="footer-copyright text text-16">
                  &copy; <span className="current-year"></span> 2025 SparkLab. All rights reserved.
                </div>
              </Col>
              <Col md={6}>
                <ul className="footer-menu footer-policies list-unstyled d-flex justify-content-end gap-3 mb-0">
                  <li>
                    <Link as={Link} to="/Privecy" className="text text-16 link">Privacy Policy</Link>
                    </li>
                  <li>
                    <Link as={Link} to="/Contact_Us" className="text text-16 link">Contact</Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
