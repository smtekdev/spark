import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Event_card = () => {
  return (
    <Container>
      {/* First Row */}
      <Row className="mb-4" style={{ gap:"0rem" }}>
        {/* Event 1 */}
        <Col lg={4} md={6} sm={12}>
          <div className="event-card">
            <div className="event-card-image">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format"
                alt="Tech Conference 2025"
              />
            </div>
            <div className="event-card-content">
              <div className="event-card-meta">
                <span className="event-type">Conference</span>
                <span className="event-date">Oct 12, 2025</span>
              </div>
              <h3 className="event-title">Tech Conference 2025</h3>
              <p>
              Celebrate music, art, and culture with performances from international artists and local talents.
              </p>
              <div className="button-container-1" style={{ marginLeft: "-0.5rem" }}>
                <span className="mas text-black">Learn More</span>
                <button
                  id="register"
                  type="button"
                  style={{
                    background: "linear-gradient(45deg, #002266, #000436)",
                    color: "white",
                    borderRadius: "9px",
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </Col>

        {/* Event 2 */}
        <Col lg={4} md={6} sm={12}>
          <div className="event-card">
            <div className="event-card-image">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format"
                alt="Startup Workshop"
              />
            </div>
            <div className="event-card-content">
              <div className="event-card-meta">
                <span className="event-type">Workshop</span>
                <span className="event-date">Nov 5, 2025</span>
              </div>
              <h3 className="event-title">Startup Workshop</h3>
              <p>
                Hands-on workshop on launching your startup, pitching to investors, and growing your business.
              </p>
              <div className="button-container-1" style={{ marginLeft: "-0.5rem" }}>
                <span className="mas text-black">Learn More</span>
                <button
                  id="register"
                  type="button"
                  style={{
                    background: "linear-gradient(45deg, #002266, #000436)",
                    color: "white",
                    borderRadius: "9px",
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </Col>

        {/* Event 3 */}
        <Col lg={4} md={6} sm={12}>
          <div className="event-card">
            <div className="event-card-image">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format"
                alt="Music Festival 2025"
              />
            </div>
            <div className="event-card-content">
              <div className="event-card-meta">
                <span className="event-type">Festival</span>
                <span className="event-date">Dec 20, 2025</span>
              </div>
              <h3 className="event-title">Music Festival 2025</h3>
              <p>
                Celebrate music, art, and culture with performances from international artists and local talents.
              </p>
              <div className="button-container-1" style={{ marginLeft: "-0.5rem" }}>
                <span className="mas text-black">Learn More</span>
                <button
                  id="register"
                  type="button"
                  style={{
                    background: "linear-gradient(45deg, #002266, #000436)",
                    color: "white",
                    borderRadius: "9px",
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Event_card;
