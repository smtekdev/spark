import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCalendarAlt, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

const Events_Detail = () => {
  return (
    <div className="event-detail-page">
      {/* ===== Hero Section ===== */}
      <Container fluid className="Main-background">
        <div
          className="bg-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=800&auto=format')",
          }}
        ></div>
        <div className="overlay"></div>

        <Container>
          <Row>
            <Col lg={12} className="page-top-content text-center">
              <h1 className="page-title">Design & Innovation Conference <br></br> 2025</h1>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ===== Event Content ===== */}
      <Container className="event-content-section py-5">
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="event-detail-wrapper">
              <p className="lead-text">
                Join us for an inspiring day of design, creativity, and
                innovation. The Design & Innovation Conference 2025 brings
                together global leaders, creators, and entrepreneurs to share
                insights and shape the future.
              </p>

              <h2>About the Event</h2>
              <p>
                This conference is crafted for designers, developers, marketers,
                and entrepreneurs who believe in the power of design to drive
                change. With keynote sessions, hands-on workshops, and
                networking opportunities, you’ll leave with fresh ideas and
                strategies to transform your work.
              </p>

              <h2>Why Attend?</h2>
              <ul className="takeaway-list">
                <li>Exclusive keynote talks by industry pioneers</li>
                <li>Hands-on design workshops</li>
                <li>Global networking opportunities</li>
                <li>Latest trends in UX, AI, and product innovation</li>
              </ul>

              <p>
                Whether you are a designer, founder, or innovator, this event is
                your chance to gain knowledge, connect with peers, and fuel your
                creative journey.
              </p>

              {/* ===== Image Gallery Section ===== */}
              <h2 className="mt-5">Event Highlights</h2>
              <Row className="g-4 mt-2">
                <Col md={4} sm={6}>
                  <img
                    src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=800&auto=format"
                    alt="Highlight 1"
                    className="img-fluid rounded shadow-sm"
                  />
                </Col>
                <Col md={4} sm={6}>
                  <img
                    src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=800&auto=format"
                    alt="Highlight 2"
                    className="img-fluid rounded shadow-sm"
                  />
                </Col>
                <Col md={4} sm={6}>
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format"
                    alt="Highlight 3"
                    className="img-fluid rounded shadow-sm"
                  />
                </Col>
                <Col md={4} sm={6}>
                  <img
                    src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800&auto=format"
                    alt="Highlight 4"
                    className="img-fluid rounded shadow-sm"
                  />
                </Col>
                <Col md={4} sm={6}>
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format"
                    alt="Highlight 5"
                    className="img-fluid rounded shadow-sm"
                  />
                </Col>
                <Col md={4} sm={6}>
                  <img
                    src="https://images.unsplash.com/photo-1504386106331-3e4e71712b38?q=80&w=800&auto=format"
                    alt="Highlight 6"
                    className="img-fluid rounded shadow-sm"
                  />
                </Col>
              </Row>
            </div>
          </Col>

          {/* Event Info Sidebar */}
          <Col lg={4} md={12} className="mt-4 mt-lg-0">
            <div className="event-info-box shadow p-4 rounded">
              <h3 className="mb-3">Event Details</h3>
              <p>
                <FaCalendarAlt /> <strong>Date:</strong> Oct 12, 2025
              </p>
              <p>
                <FaMapMarkerAlt /> <strong>Location:</strong> New York Convention
                Center
              </p>
              <p>
                <FaUserAlt /> <strong>Organizer:</strong> SparkLab
              </p>
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default Events_Detail;
