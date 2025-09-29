import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import discoverImg from "../../images/light-bulb.png";
import researchImg from "../../images/market-research.png";
import strategyImg from "../../images/planning.png";
import creativeImg from "../../images/ai-image.png";
import launchImg from "../../images/shuttle.png";
import growImg from "../../images/growth.png";

//services images
import webdeveloper from "../../images/unnamed (4).png"
import appdeveloper from "../../images/unnamed.png"
import graphicdesigner from "../../images/unnamed (1).png"
import smm from "../../images/unnamed (2).png"
import seo from "../../images/unnamed (3).png"
import videoediting from "../../images/unnamed (5).png"
import animation from "../../images/unnamed (6).png"




gsap.registerPlugin(ScrollTrigger);

const CombinedSection = () => {
  const sectionRef = useRef(null);
  const [bg, setBg] = useState("#ffffff");

  useEffect(() => {
     const white = "#ffffff";
    const navy = "#0A184A";
    const scrollMax = 2000;

    const lerp = (a, b, t) => Math.round(a + (b - a) * t);
    const lerpHex = (c1, c2, t) => {
      const r = lerp(parseInt(c1.slice(1, 3), 16), parseInt(c2.slice(1, 3), 16), t);
      const g = lerp(parseInt(c1.slice(3, 5), 16), parseInt(c2.slice(3, 5), 16), t);
      const b = lerp(parseInt(c1.slice(5, 7), 16), parseInt(c2.slice(5, 7), 16), t);
      return `#${r.toString(16).padStart(2, "0")}${g
        .toString(16)
        .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
    };

   const handleScroll = () => {
  const scrollTop = window.scrollY;
  let t = scrollTop / scrollMax;

  if (t < 0.5) t = t * 0.2;  // 👈 half scroll tak white ke qareeb rahega
  else t = (t - 0.5) * 1.6; // 👈 baad me fast navy aa jayega

  t = Math.min(t, 1);
  setBg(lerpHex(white, navy, t));
};

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    gsap.fromTo(
      ".working-card",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".working-card",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: bg, transition: "background-color 0.1s linear" }}>
      {/* Working Process Section */}
      <section style={{ padding: "80px 0 ", overflow:"hidden" }}>
        <Container fluid>
          <h5 style={{ color: bg === "#ffffff" ? "#0A184A" : "#000000ff", textAlign: "center", }} > How We Work</h5>
          <h1 style={{ fontSize: "68px",  fontWeight: "bold",  lineHeight: "58px",  color: bg === "#000000ff" ? "#0A184A" : "#0A184A",  textAlign: "center", }}  >  This is How We <br /> Get Things Done </h1>
          <p  style={{  color: bg === "#ffffff" ? "#0A184A" : "#0A184A",  textAlign: "center",  marginTop: "21px",  }}> We combine data-driven strategies and creative expertise to build impactful websites,
            campaigns, <br /> and content for your business.
          </p>

          <Row className="justify-content-center mt-4">
            <Col lg={4} md={6} sm={12} className="mb-4 working-card">
              <Card className="text-center h-100 p-4" style={cardStyle(bg)}>
                <Card.Body>
                  <img src={discoverImg} alt="Discover & Define" width="60" />
                  <Card.Title  style={{ color: "#0A184A"  , fontWeight: "bold"}}>Discover & Define</Card.Title>
                  <Card.Text  style={{ color: "#0A184A" }}>Deep discovery to understand your brand, audience, and goals.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12} className="mb-4 working-card">
              <Card className="text-center h-100 p-4" style={cardStyle(bg)}>
                <Card.Body>
                  <img src={researchImg} alt="Research & Insights" width="60" />
                  <Card.Title style={{ color: "#0A184A"  , fontWeight: "bold"}}>Research & Insights</Card.Title>
                  <Card.Text  style={{ color: "#0A184A" }}>Analyze market trends, competitors, and audience behavior.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12} className="mb-4 working-card">
              <Card className="text-center h-100 p-4" style={cardStyle(bg)}>
                <Card.Body>
                  <img src={strategyImg} alt="Strategy & Roadmap" width="60" />
                  <Card.Title style={{ color: "#0A184A"  , fontWeight: "bold"}}>Strategy & Roadmap</Card.Title>
                  <Card.Text  style={{ color: "#0A184A" }}>Step-by-step digital marketing plan with KPIs and channels.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12} className="mb-4 working-card">
              <Card className="text-center h-100 p-4" style={cardStyle(bg)}>
                <Card.Body>
                  <img src={creativeImg} alt="Creative & Content" width="60" />
                  <Card.Title style={{ color: "#0A184A"  , fontWeight: "bold"}}>Creative & Content</Card.Title>
                  <Card.Text  style={{ color: "#0A184A" }}>Engaging campaigns, visuals, and content for your audience.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12} className="mb-4 working-card">
              <Card className="text-center h-100 p-4" style={cardStyle(bg)}>
                <Card.Body>
                  <img src={launchImg} alt="Build, Launch & Optimize" width="60" />
                  <Card.Title style={{ color: "#0A184A"  , fontWeight: "bold"}}>Build, Launch & Optimize</Card.Title>
                  <Card.Text  style={{ color: "#0A184A" }}>Design, develop, launch, and optimize campaigns.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6} sm={12} className="mb-4 working-card">
              <Card className="text-center h-100 p-4" style={cardStyle(bg)}>
                <Card.Body>
                  <img src={growImg} alt="Grow & Scale" width="60" />
                  <Card.Title style={{ color: "#0A184A"  , fontWeight: "bold"}}>Grow & Scale</Card.Title>
                  <Card.Text  style={{ color: "#0A184A" }}> Expand winning campaigns and refine messaging.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

  <section ref={sectionRef}>
  <div className="services-stack-section">
    <h5  style={{     color: bg === "#ffffff" ? "#0A184A" : "#fff",     textAlign: "center",   }} >
      Our Services
    </h5>

    <h1 style={{   fontSize: "68px",   fontWeight: "bold",   lineHeight: "58px",   color: bg === "#ffffff" ? "#0A184A" : "#fff",   textAlign: "center", }}>
      For Every Problem, <br /> There's a Solution
    </h1>

    <p style={{   color: bg === "#ffffff" ? "#0A184A" : "#fff",   textAlign: "center",   marginTop: "21px",  }}>
      We combine data-driven strategies and creative expertise to build impactful websites,
      campaigns, <br /> and content for your business.
    </p>

    {/* First Service Card */}
    <div className="service-stack-card" style={{ top: `0px` }}>
      <img src={webdeveloper} alt="Discover" />
      <div className="services-detail">
        <h2 className="service-title">Website Development</h2>
        <p>
          We design and develop responsive, user-friendly websites tailored to your brand and business goals.
          From visually appealing layouts to seamless functionality, our websites are optimized for performance,
          speed, and SEO. Whether it’s an e-commerce platform, a corporate site, or a personal portfolio, we ensure
          your online presence is engaging, modern, and fully functional across all devices.
        </p>

        {/* Button below paragraph */}
       <div className="button-container-1" style={{ marginLeft:"-0.5rem"  }}>
          <span className="mas text-black">Get Started</span>
          <button  id="work" type="button"  name="Hover" style={{  background: "linear-gradient(45deg, #002266, #000436)", color: "white",borderRadius: "9px",  }}
          >  Get Started
          </button>
        </div>
      </div>
    </div>
    

    {/* Third Service Card */}
    <div className="service-stack-card" style={{ top: `40px` }}>
      <img src={appdeveloper} alt="Discover" />
      <div className="services-detail">
        <h2 className="service-title">Application Development</h2>
        <p>
           We design and develop robust, user-friendly applications tailored to your business needs.
  From intuitive interfaces to seamless functionality, our applications are optimized for performance,
  speed, and security. Whether it’s a mobile app, web app, or enterprise solution, we ensure
  your digital product is engaging, scalable, and fully functional across all platforms.
        </p>

        {/* Button below paragraph */}
        <div className="button-container-1" style={{ marginLeft:"-0.5rem"  }}>
          <span className="mas text-black">Get Started</span>
          <button  id="work" type="button"  name="Hover" style={{  background: "linear-gradient(45deg, #002266, #000436)", color: "white",borderRadius: "9px",  }}
          >  Get Started
          </button>
        </div>
      </div>
    </div>

    {/* Fourth Service Card */}
    <div className="service-stack-card" style={{ top: `90px` }}>
      <img src={graphicdesigner} alt="Discover" />
      <div className="services-detail">
        <h2 className="service-title">Graphic Desginer</h2>
        <p>
         We craft creative and impactful graphic designs tailored to your brand and vision.
          From eye-catching visuals to professional layouts, our designs are optimized for clarity, aesthetics, and engagement.
          Whether it’s branding, social media creatives, marketing materials, or custom illustrations, we ensure your visuals stand out, communicate effectively, and leave a lasting impression.
        </p>

        {/* Button below paragraph */}
    <div className="button-container-1" style={{ marginLeft:"-0.5rem"  }}>
          <span className="mas text-black">Get Started</span>
          <button  id="work" type="button"  name="Hover" style={{  background: "linear-gradient(45deg, #002266, #000436)", color: "white",borderRadius: "9px",  }}
          >  Get Started
          </button>
        </div>
      </div>
    </div>

      <div className="service-stack-card" style={{ top: `120px` }}>
      <img src={smm} alt="Discover" />
      <div className="services-detail">
        <h2 className="service-title">SocialMedia Marketing</h2>
        <p>
          We create and manage impactful social media marketing strategies tailored to your brand and business goals.
From eye-catching content to targeted campaigns, our strategies are optimized for engagement, reach, and conversions.
Whether it’s Facebook, Instagram, LinkedIn, or any other platform, we ensure your online presence is strong, modern, and results-driven to connect with your audience effectively.
        </p>

        {/* Button below paragraph */}
        <div className="button-container-1" style={{ marginLeft:"-0.5rem"  }}>
          <span className="mas text-black">Get Started</span>
          <button  id="work" type="button"  name="Hover" style={{  background: "linear-gradient(45deg, #002266, #000436)", color: "white",borderRadius: "9px",  }}
          >  Get Started
          </button>
        </div>
      </div>
    </div>

     <div className="service-stack-card" style={{ top: `150px` }}>
      <img src={seo} alt="Discover" />
      <div className="services-detail">
        <h2 className="service-title">Search Engine Optimization</h2>
        <p>
         We provide result-driven SEO services tailored to your brand and business goals.
From keyword research to on-page optimization and high-quality backlinks, our strategies are designed to boost your rankings, website traffic, and visibility on search engines.
Whether you run an e-commerce store, a corporate website, or a personal blog, we ensure your online presence is optimized, modern, and built to achieve long-term success.
        </p>

        {/* Button below paragraph */}
        <div className="button-container-1" style={{ marginLeft:"-0.5rem"  }}>
          <span className="mas text-black">Get Started</span>
          <button  id="work" type="button"  name="Hover" style={{  background: "linear-gradient(45deg, #002266, #000436)", color: "white",borderRadius: "9px",  }}
          >  Get Started
          </button>
        </div>
      </div>
    </div>

    {/* six Service Card */}
    <div className="service-stack-card" style={{ top: `180px` }}>
       <img src={videoediting} alt="Discover" />
      <div className="services-detail">
        <h2 className="service-title">Video Editing</h2>
        <p>
          We design and develop responsive, user-friendly websites tailored to your brand and business goals.
          From visually appealing layouts to seamless functionality, our websites are optimized for performance,
          speed, and SEO. Whether it’s an e-commerce platform, a corporate site, or a personal portfolio, we ensure
          your online presence is engaging, modern, and fully functional across all devices.
        </p>

        {/* Button below paragraph */}
        <div className="button-container-1" style={{ marginLeft:"-0.5rem"  }}>
          <span className="mas text-black">Get Started</span>
          <button  id="work" type="button"  name="Hover" style={{  background: "linear-gradient(45deg, #002266, #000436)", color: "white",borderRadius: "9px",  }}
          >  Get Started
          </button>
        </div>
      </div>
    </div>


    {/* seven Service Card */}
    <div className="service-stack-card" style={{ top: `200px` }}>
       <img src={animation} alt="Discover" />
      <div className="services-detail">
        <h2 className="service-title">3D Animation</h2>
        <p>
         We create stunning and immersive 3D animations tailored to your brand and business goals.
From visually captivating motion graphics to realistic product visualizations, our 3D animations are designed to engage, inspire, and tell your story in a dynamic way.
Whether it’s for advertising, presentations, games, or brand promotions, we ensure your visuals are modern, impactful, and bring your ideas to life with creativity and precision.
        </p>

        {/* Button below paragraph */}
        <div className="button-container-1" style={{ marginLeft:"-0.5rem"  }}>
          <span className="mas text-black">Get Started</span>
          <button  id="work" type="button"  name="Hover" style={{  background: "linear-gradient(45deg, #002266, #000436)", color: "white",borderRadius: "9px",  }}
          >  Get Started
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

// Common Styles
const cardStyle = (bg) => ({
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(10px)",
  borderRadius: "30px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  color: bg === "#ffffff" ? "#0A184A" : "#fff",
});

const titleStyle = { fontWeight: "700", fontSize: "1.5rem", marginTop: "15px" };

export default CombinedSection;
