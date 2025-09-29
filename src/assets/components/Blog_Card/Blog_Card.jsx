import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog_card = () => {
  return (
    <Container>
      {/* First Row */}
      <Row className="mb-4" style={{ gap:"3rem" , marginBottom: "3rem" }}>
        {/* Card 1 */}
        <Col lg={12} md={6} sm={12}>
          <div className="blog-card">
            <div className="blog-card-image">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format"
                alt="The Ultimate Guide to Creating Better First Experiences"
              />
            </div>
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <span className="category">SaaS</span>
                <span className="date">Sep 24, 2025</span>
              </div>
              <h3 className="blog-title">The Ultimate Guide to Creating Better First Experiences</h3>
              <p>
                Learn how to design onboarding experiences that delight users and improve retention. 
                Step-by-step strategies and examples included.
              </p>
              <div className="button-container-1" style={{ marginLeft: "-0.5rem" }}>
                <span className="mas text-black">Get Started</span>
                <button
                  id="work"
                  type="button"
                  style={{
                    background: "linear-gradient(45deg, #002266, #000436)",
                    color: "white",
                    borderRadius: "9px",
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </Col>

         <Col lg={12} md={6} sm={12}>
          <div className="blog-card">
            <div className="blog-card-image">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format"
                alt="The Ultimate Guide to Creating Better First Experiences"
              />
            </div>
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <span className="category">SaaS</span>
                <span className="date">Sep 24, 2025</span>
              </div>
              <h3 className="blog-title">The Ultimate Guide to Creating Better First Experiences</h3>
              <p>
                Learn how to design onboarding experiences that delight users and improve retention. 
                Step-by-step strategies and examples included.
              </p>
              <div className="button-container-1" style={{ marginLeft: "-0.5rem" }}>
                <span className="mas text-black">Get Started</span>
                <button
                  id="work"
                  type="button"
                  style={{
                    background: "linear-gradient(45deg, #002266, #000436)",
                    color: "white",
                    borderRadius: "9px",
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </Col>

       
        {/* Card 3 */}
        <Col lg={12} md={6} sm={12}>
          <div className="blog-card">
            <div className="blog-card-image">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format"
                alt="Voice-Powered Onboarding: The Next Frontier"
              />
            </div>
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <span className="category">Onboarding</span>
                <span className="date">Sep 11, 2025</span>
              </div>
              <h3 className="blog-title">Voice-Powered Onboarding: The Next Frontier</h3>
              <p>
                Explore the future of voice interactions in onboarding. Tips on implementing voice-based
                guidance for better user engagement.
              </p>
              <div className="button-container-1" style={{ marginLeft: "-0.5rem" }}>
                <span className="mas text-black">Get Started</span>
                <button
                  id="work"
                  type="button"
                  style={{
                    background: "linear-gradient(45deg, #002266, #000436)",
                    color: "white",
                    borderRadius: "9px",
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Second Row */}
      <Row style={{ gap:"3rem" , marginTop: "3rem" }}>
        {/* Card 4 */}
        <Col lg={12} md={6} sm={12}>
          <div className="blog-card">
            <div className="blog-card-image">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format"
                alt="Maximizing Product Adoption in 2025"
              />
            </div>
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <span className="category">Growth</span>
                <span className="date">Sep 10, 2025</span>
              </div>
              <h3 className="blog-title">Maximizing Product Adoption in 2025</h3>
              <p>
                Tips and strategies to increase user adoption and engagement for your digital products.
                Learn what works in 2025.
              </p>
              <div className="button-container-1" style={{ marginLeft: "-0.5rem" }}>
                <span className="mas text-black">Get Started</span>
                <button
                  id="work"
                  type="button"
                  style={{
                    background: "linear-gradient(45deg, #002266, #000436)",
                    color: "white",
                    borderRadius: "9px",
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </Col>

        {/* Card 5 */}
                    <Col lg={12} md={6} sm={12}>
          <div className="blog-card">
            <div className="blog-card-image">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format"
                alt="Maximizing Product Adoption in 2025"
              />
            </div>
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <span className="category">Growth</span>
                <span className="date">Sep 10, 2025</span>
              </div>
              <h3 className="blog-title">Maximizing Product Adoption in 2025</h3>
              <p>
                Tips and strategies to increase user adoption and engagement for your digital products.
                Learn what works in 2025.
              </p>
              <div className="button-container-1" style={{ marginLeft: "-0.5rem" }}>
                <span className="mas text-black">Get Started</span>
                <button
                  id="work"
                  type="button"
                  style={{
                    background: "linear-gradient(45deg, #002266, #000436)",
                    color: "white",
                    borderRadius: "9px",
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </Col>

        {/* Card 6 */}
        <Col lg={12} md={6} sm={12}>
          <div className="blog-card">
            <div className="blog-card-image">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format"
                alt="Effective Growth Hacking Techniques"
              />
            </div>
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <span className="category">Growth</span>
                <span className="date">Sep 1, 2025</span>
              </div>
              <h3 className="blog-title">Effective Growth Hacking Techniques</h3>
              <p>
                Learn actionable growth hacking strategies to scale your product, attract users, 
                and boost conversions quickly.
              </p>
              <div className="button-container-1" style={{ marginLeft: "-0.5rem" }}>
                <span className="mas text-black">Get Started</span>
                <button
                  id="work"
                  type="button"
                  style={{
                    background: "linear-gradient(45deg, #002266, #000436)",
                    color: "white",
                    borderRadius: "9px",
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog_card;
