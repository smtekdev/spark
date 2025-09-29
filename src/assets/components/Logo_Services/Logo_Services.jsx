import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoimage from "../../images/91f637b852 (1).jpg"

gsap.registerPlugin(ScrollTrigger);

const Logo_Services = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".pricing-section",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".pricing-section",
          start: "top 85%",
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
          <Col lg={6} md={12} sm={12} className="mb-4 mb-lg-0">
            <h2 className="title">Logo Design</h2>
            <p className="description">
              We craft unique and memorable logo designs that perfectly represent
              your brand identity. Our focus is on creating professional,
              versatile, and impactful logos that leave a lasting impression and
              help your business stand out.
            </p>

            <h3 className="offer-title">What we offer:</h3>
            <ul className="services-list">
              <li>
                <FaCheckCircle className="icon" /> Unique logo concepts
              </li>
              <li>
                <FaCheckCircle className="icon" /> Vector & scalable designs
              </li>
              <li>
                <FaCheckCircle className="icon" /> Multiple revisions
              </li>
              <li>
                <FaCheckCircle className="icon" /> Brand mark, wordmark, or combo logos
              </li>
              <li>
                <FaCheckCircle className="icon" /> Full brand identity kits (upon request)
              </li>
            </ul>
          </Col>

          <Col lg={6} md={12} sm={12} className="text-center services-image">
            <div className="image-wrapper">
              <img
                src={logoimage}
                alt="Our Services"
                className="img-fluid rounded shadow"
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Pricing Section - Navy Background */}
{/* Pricing Section - Navy Background */}
<div className="pricing-section" style={{ background: "#0A184A", padding: "60px 0"  , borderRadius: "2rem"}}>
  <Container>
    <h2 className="text-center mb-5" style={{ color: "#ffffff" , fontSize: "3rem" , fontWeight: "bold" }}>
     Affordable Logo Pricing Plans
    </h2>
    <p className="text-center text-white" style={{ marginTop: "-2rem"  , marginBottom: "2rem" }}>Choose a package that fits your brand’s journey. Whether you’re just starting out or building a complete identity, our pricing is simple, transparent, and designed to give you professional results without hidden costs.</p>
    <Row className="justify-content-center">
      <Col lg={4} md={6} sm={12} className="mb-4">
        <div  style={{  background: "#fff",  borderRadius: "12px", padding: "30px 25px",   boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",   textAlign: "center",   border: "1px solid #eee", }}>

          <div style={{  display: "flex",  justifyContent: "space-between"}}>
            <h4 style={{ fontWeight: "700", color: "#000" , fontSize: "2rem" }}>Basic</h4>
          <div style={{  display: "flex", flexDirection: "column", alignItems: "center" }}>
  
            <span style={{  fontSize: "2rem",  fontWeight: "800",   color: "#000",  }}   >
              $49.99
            </span>

            {/* Original Price with Red Strikethrough */}
            <span  style={{   marginTop: "5px", marginLeft: "4rem",  textDecoration: "line-through", textDecorationColor: "red",  color: "red",  fontSize: "1.5rem",   fontWeight: "bold", marginTop: "-7px" }}  >
              $79
            </span>
          </div>
           </div>

          {/* Static Features */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
              <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
              4 to 5 concepts
            </li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
              <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
              Unlimited revision rounds
            </li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
              <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
              Final Deliverables: PNG, PSD, AI, JPG, PDF
            </li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
              <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
              Turn Around Time (TAT) 24hrs
            </li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
              <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
              100% Satisfaction Guaranteed
            </li>
            <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
              <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
              100% Money Back Guaranteed
            </li>
          </ul>

          <p style={{   fontSize: "0.9rem",  color: "#000",  marginBottom: "20px",  fontWeight: "500",  }}  >
            Perfect for startups or individuals taking their first step into the
            digital world.
          </p>
           <div className="button-container-1" style={{ marginLeft:"auto"  }}>
                <span className="mas text-black"> View Our Services</span>
                <button  id="work" type="button"  name="Hover" style={{  background: "linear-gradient(45deg, #002266, #000436)", color: "white",borderRadius: "9px",  }}
                >  View Our Services
                </button>
            </div>
        </div>
      </Col>
        <Col lg={4} md={6} sm={12} className="mb-4">
        <div  style={{  background: "#fff",  borderRadius: "12px", padding: "30px 25px",   boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",   textAlign: "center",   border: "1px solid #eee", }}>

          <div style={{  display: "flex",  justifyContent: "space-between"}}>
            <h4 style={{ fontWeight: "700", color: "#000", fontSize: "2rem" }}>Standerd</h4>
          <div style={{  display: "flex", flexDirection: "column", alignItems: "center" }}>
  
            <span style={{  fontSize: "2rem",  fontWeight: "800",   color: "#000",  }}   >
              $79.99
            </span>

            {/* Original Price with Red Strikethrough */}
            <span  style={{   marginTop: "5px", marginLeft: "4rem",  textDecoration: "line-through", textDecorationColor: "red",  color: "red",  fontSize: "1.5rem",   fontWeight: "bold", marginTop: "-7px" }}  >
              $119
            </span>
          </div>
           </div>

          {/* Static Features */}
           <ul className="custom-scroll" style={{  listStyle: "none",  padding: 0,  marginBottom: "20px",  textAlign: "left",  }}>
      <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
        <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
        6 to 8 unique logo concepts
      </li>
      <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
        <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
        Unlimited revision rounds
      </li>
      <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
        <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
        Final Deliverables: PNG, PSD, AI, JPG, PDF, SVG
      </li>
      <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
        <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
        Turn Around Time (TAT) 12–24hrs
      </li>
      <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
        <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
        Stationery Design (Business Card, Letterhead)
      </li>
      <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
        <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
        Social Media Kit (Facebook, Instagram, LinkedIn banners)
      </li>
      <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
        <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
        100% Satisfaction Guaranteed
      </li>
      <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
        <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
        100% Money Back Guaranteed
      </li>
    </ul>
        <p  style={{  fontSize: "0.9rem",  color: "#000",   marginBottom: "20px",   fontWeight: "500",     }} >
            Perfect for startups or individuals taking their first step into the
            digital world.
          </p>

           <div className="button-container-1" style={{ marginLeft:"auto"  }}>
                <span className="mas text-black"> View Our Services</span>
                <button  id="work" type="button"  name="Hover" style={{  background: "linear-gradient(45deg, #002266, #000436)", color: "white",borderRadius: "9px",  }}
                >  View Our Services
                </button>
            </div>
        </div>
      </Col>
        <Col lg={4} md={6} sm={12} className="mb-4">
        <div  style={{  background: "#fff",  borderRadius: "12px", padding: "30px 25px",   boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",   textAlign: "center",   border: "1px solid #eee", }}>

          <div style={{  display: "flex",  justifyContent: "space-between"}}>
            <h4 style={{ fontWeight: "700", color: "#000",  fontSize: "2rem"}}>Premium</h4>
          <div style={{  display: "flex", flexDirection: "column", alignItems: "center" }}>
  
            <span style={{  fontSize: "2rem",  fontWeight: "800",   color: "#000",  }}   >
              $149.99
            </span>

            {/* Original Price with Red Strikethrough */}
            <span  style={{   marginTop: "5px", marginLeft: "4rem",  textDecoration: "line-through", textDecorationColor: "red",  color: "red",  fontSize: "1.5rem",   fontWeight: "bold", marginTop: "-7px" }}  >
             $200
            </span>
          </div>
           </div>

          {/* Static Features */}
          <ul className="custom-scroll" style={{  listStyle: "none",  padding: 0,  marginBottom: "20px",  textAlign: "left",   overflowY: "auto",  }}>
              <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
                <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
                6 to 8 unique logo concepts
              </li>
              <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
                <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
                Unlimited revision rounds
              </li>
              <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
                <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
                Final Deliverables: PNG, PSD, AI, JPG, PDF, SVG
              </li>
              <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
                <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
                Turn Around Time (TAT) 12–24hrs
              </li>
              <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
                <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
                Stationery Design (Business Card, Letterhead)
              </li>
              <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
                <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
                Social Media Kit (Facebook, Instagram, LinkedIn banners)
              </li>
              <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
                <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
                100% Satisfaction Guaranteed
              </li>
              <li style={{ marginBottom: "10px", fontSize: "0.95rem", color: "#000" }}>
                <FaCheckCircle style={{ marginRight: "8px", color: "black" }} />
                100% Money Back Guaranteed
              </li>
            </ul>

          <p style={{  fontSize: "0.9rem",  color: "#000",  marginBottom: "20px", fontWeight: "500",  }} >
            Perfect for startups or individuals taking their first step into the
            digital world.
          </p>

           <div className="button-container-1" style={{ marginLeft:"auto"  }}>
                <span className="mas text-black"> View Our Services</span>
                <button  id="work" type="button"  name="Hover" style={{  background: "linear-gradient(45deg, #002266, #000436)", color: "white",borderRadius: "9px",  }}
                >  View Our Services
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

export default Logo_Services;
