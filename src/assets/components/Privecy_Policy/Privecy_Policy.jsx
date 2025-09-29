import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";


const Privecy_Policy = () => {
  return (
    <Fragment>
      <div className="privacy-page">
        <Container className="py-5">
          <Row>
            <Col md={12} className="mb-4">
              <div className="privacy-box">
                <h3>1. Information We Collect</h3>
                <p>
                  Spark Lab collects information you provide directly when signing up, using our services, or contacting us. This includes your name, email, phone number, and other details you choose to provide.
                </p>
              </div>
            </Col>

            <Col md={12} className="mb-4">
              <div className="privacy-box">
                <h3>2. How We Use Your Information</h3>
                <p>
                  We use your information to improve our services, communicate with you, and provide personalized experiences. We may also send promotional updates about Spark Lab products, but only with your consent.
                </p>
              </div>
            </Col>

            <Col md={12} className="mb-4">
              <div className="privacy-box">
                <h3>3. Data Sharing and Security</h3>
                <p>
                  We never sell your personal information. Your data is securely stored using modern encryption methods. Only authorized personnel access your info to provide the best service.
                </p>
              </div>
            </Col>

            <Col md={12} className="mb-4">
              <div className="privacy-box">
                <h3>4. Cookies and Tracking</h3>
                <p>
                  Spark Lab uses cookies to enhance your browsing experience and understand website usage. This helps us improve content and services.
                </p>
              </div>
            </Col>

            <Col md={12} className="mb-4">
              <div className="privacy-box">
                <h3>5. Your Rights</h3>
                <p>
                  You can access, update, or delete your personal data at any time. Contact us at <a href="mailto:hr@sparklabpk.com">hr@sparklabpk.com</a> for assistance.
                </p>
              </div>
            </Col>

            <Col md={12} className="mb-4">
              <div className="privacy-box">
                <h3>6. Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy occasionally. Any changes will be reflected here with the effective date updated.
                </p>
              </div>
            </Col>

            <Col md={12} className="mb-4">
              <div className="privacy-box">
                <h3>7. Contact Us</h3>
                <p>
                  Email: <a href="mailto:hr@sparklabpk.com">hr@sparklabpk.com</a><br />
                  Phone: +92 3335855502
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Privecy_Policy;
