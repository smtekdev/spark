import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";


const Terms_Condition = () => {
  return (
    <Fragment>
      <div className="terms-page">
        <Container className="py-5">
          <Row>
            <Col md={12} className="mb-4">
              <div className="terms-box">
                <h3>1. Acceptance of Terms</h3>
                <p>
                  By accessing or using Spark Lab services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.
                </p>
              </div>
            </Col>

            <Col md={12} className="mb-4">
              <div className="terms-box">
                <h3>2. Use of Services</h3>
                <p>
                  You agree to use Spark Lab services only for lawful purposes. You must not use our services for any illegal, fraudulent, or harmful activities.
                </p>
              </div>
            </Col>

            <Col md={12} className="mb-4">
              <div className="terms-box">
                <h3>3. Account Responsibilities</h3>
                <p>
                  You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Notify us immediately of any unauthorized access.
                </p>
              </div>
            </Col>

            <Col md={12} className="mb-4">
              <div className="terms-box">
                <h3>4. Intellectual Property</h3>
                <p>
                  All content, logos, graphics, and materials on Spark Lab are owned by us or our licensors. You may not reproduce, distribute, or use them without written permission.
                </p>
              </div>
            </Col>

            <Col md={12} className="mb-4">
              <div className="terms-box">
                <h3>5. Limitation of Liability</h3>
                <p>
                  Spark Lab is not responsible for any direct, indirect, or consequential damages arising from the use or inability to use our services.
                </p>
              </div>
            </Col>

            <Col md={12} className="mb-4">
              <div className="terms-box">
                <h3>6. Modifications to Services</h3>
                <p>
                  We reserve the right to modify or discontinue any part of our services at any time without prior notice.
                </p>
              </div>
            </Col>

            <Col md={12} className="mb-4">
              <div className="terms-box">
                <h3>7. Governing Law</h3>
                <p>
                  These Terms & Conditions are governed by and construed in accordance with the laws of Pakistan. Any disputes will be subject to the exclusive jurisdiction of Pakistani courts.
                </p>
              </div>
            </Col>

            <Col md={12} className="mb-4">
              <div className="terms-box">
                <h3>8. Contact Information</h3>
                <p>
                  For questions regarding these Terms & Conditions, please contact us at <a href="mailto:hr@sparklabpk.com">hr@sparklabpk.com</a> or call +92 3335855502.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Terms_Condition;
