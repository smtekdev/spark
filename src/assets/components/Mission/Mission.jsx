import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import missionimage from "../../images/360_F_96545306_cX6N4Fv2TTVRMKahA3aoCvxlUOGm2KkV.jpg";
import vissionimage from "../../images/our-vision-background-light-bulb-words-drawn-blackboard-chalkboard-business-concept-40008857.webp";




gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const sectionRef = useRef(null);
  const [bg, setBg] = useState("#ffffff");

  useEffect(() => {
     const white = "#ffffff";
    const navy = "#0A184A";
    const scrollMax = 1000;

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

  if (t < 0.5) t = t * 0.2;  
  else t = (t - 0.5) * 1.6;

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
    <div style={{ backgroundColor: bg, transition: "background-color 0.1s linear", marginTop: "5rem" }}>
     
            <section style={{ padding: "80px 0" }}>
            <Container>
                <Row className="align-items-center">
                
                <Col lg={6} md={12} sm={12}>
                    <h2 style={{ color: bg === "#ffffffff" ? "#0A184A" : "#ffffff",  marginLeft: "-1rem" , fontSize: "6rem" , marginBottom: "13px"}}>
                    Our Mission
                    </h2>
                    <p style={{ color: bg === "#ffffff" ? "#0A184A" : "#ffffff", marginLeft: "-12px", marginTop: "-15px" }}>
                        At Spark Lab, our mission is to ignite ideas and transform
                        them into powerful digital experiences that fuel success. We
                        believe every brand, whether emerging or established, deserves
                        a digital presence that truly reflects its vision and
                        potential. That’s why we combine creativity, innovation, and
                        cutting-edge technology to craft solutions that are not only
                        visually striking but also scalable, secure, and growth-driven.
                    </p>
                    <br></br>
                     <p style={{ color: bg === "#ffffff" ? "#0A184A" : "#ffffff", marginLeft: "-12px", marginTop: "-15px" }}>
                        Our focus is on delivering strategies and designs that inspire
                        trust, generate measurable impact, and create long-term value
                        for our clients. With a passion for innovation and a
                        commitment to continuous excellence, we go beyond just
                        building digital solutions—we aim to be your trusted partner
                        in sparking growth and shaping the future of your brand.
                    </p>
                </Col>

                
                <Col lg={6} md={12} sm={12} className="text-center">
                    <img src={missionimage} alt="Our Mission" className="imagebox"  style={{ maxWidth: "100%", borderRadius: "20px" }}
                    />
                </Col>
                </Row>
            </Container>
            </section>

            <section style={{ padding: "8px 0" , paddingBottom: "3rem" }}>
            <Container>
                <Row className="align-items-center">

                 <Col lg={6} md={12} sm={12} className="text-center">
                    <img src={vissionimage} alt="Our Mission" className="imageleftbox"  style={{ maxWidth: "100%", borderRadius: "20px" , marginLeft: "-49px"}}   />
                </Col>
                
                <Col lg={6} md={12} sm={12}>
                    <h2 style={{ color: bg === "#ffffffff" ? "#0A184A" : "#ffffff",  marginLeft: "-1rem" , fontSize: "6rem" , marginBottom: "13px"}}>
                    Our Vision
                    </h2>
                    <p style={{ color: bg === "#ffffff" ? "#0A184A" : "#ffffff", marginLeft: "-12px", marginTop: "-15px" }}>
                        At Spark Lab, our mission is to ignite ideas and transform
                        them into powerful digital experiences that fuel success. We
                        believe every brand, whether emerging or established, deserves
                        a digital presence that truly reflects its vision and
                        potential. That’s why we combine creativity, innovation, and
                        cutting-edge technology to craft solutions that are not only
                        visually striking but also scalable, secure, and growth-driven.
                    </p>
                    <br></br>
                     <p style={{ color: bg === "#ffffff" ? "#0A184A" : "#ffffff", marginLeft: "-12px", marginTop: "-15px" }}>
                        Our focus is on delivering strategies and designs that inspire
                        trust, generate measurable impact, and create long-term value
                        for our clients. With a passion for innovation and a
                        commitment to continuous excellence, we go beyond just
                        building digital solutions—we aim to be your trusted partner
                        in sparking growth and shaping the future of your brand.
                    </p>
                </Col>
                </Row>
            </Container>
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

export default Mission;
