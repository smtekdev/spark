import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserAlt, FaCalendarAlt, FaTag } from "react-icons/fa";


const BlogDetail = () => {
  return (
    <div className="blog-detail-page">
      {/* ===== Page Banner ===== */}
      <Container fluid className="Main-background">
        <div
          className="bg-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format')",
          }}
        ></div>
        <div className="overlay"></div>

        <Container>
          <Row>
            <Col lg={12} className="page-top-content text-center">
              <h1 className="page-title">
                The Ultimate Guide to Creating Better First Experiences
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ===== Blog Content ===== */}
      <Container className="blog-content-section py-5">
        <Row className="justify-content-center">
          <Col lg={12} md={10}>
            <div className="blog-detail-wrapper">
              <p className="lead-text">
                Creating a strong first impression is one of the most important
                aspects of design and user experience. In this guide, we’ll walk
                you through the steps to craft meaningful experiences that truly
                resonate with your audience.
              </p>

              <h2>Understanding User Expectations</h2>
              <p>
                Before designing any experience, it’s crucial to understand what
                your users expect. Conduct surveys, research, and analyze user
                behavior to align your product or service with their needs.
              </p>

              <h2>Designing for Impact</h2>
              <p>
                Your design should not only look good but also serve a purpose.
                Clear navigation, strong visuals, and intuitive layouts make a
                significant difference in how users interact with your product.
              </p>

              <h2>Key Takeaways</h2>
              <ul className="takeaway-list">
                <li>Focus on user-centered design.</li>
                <li>Keep navigation clean and simple.</li>
                <li>Use visuals to create emotional connections.</li>
                <li>Test and improve continuously.</li>
              </ul>

              <p>
                By implementing these strategies, you can build experiences that
                not only look appealing but also build trust and engagement with
                your audience.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogDetail;
