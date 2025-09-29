import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import rocketimage from "../../images/dXxMzF.png";

export class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
    };
  }

  handleScroll = () => {
    this.setState({ scrollY: window.scrollY });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
   const { scrollY } = this.state;

  // rotation ko 90 deg tak limit karna
  const rotation = Math.min(scrollY * 0.2, 90);

  const transformStyle = {
    transform: `translateY(-${scrollY * 2}px) rotate(-${rotation}deg)`,
    transition: "transform 0.1s linear",
  };
    return (
      <Fragment>
        <div className="hero-background">
          <Container fluid className="hero-content">
            <Row className="align-items-center">
              
              {/* Left Column: Text */}
              <Col lg={7} md={12} sm={12}>
               <div>
                <h1 className=" hero-heading" style={{  color: "#002266",  }}  > Searching for a digital star? <br></br> <span style={{color: "#FEA831",}}> We Got You. </span>
                </h1>

                <p className="text-black" style={{   marginLeft: "44px", fontSize: "23px" }} >
                   We combine data-driven strategies and creative expertise to build impactful websites, campaigns, and content for your business.
                </p>

                <div
                    className="button-container-1"
                    style={{ marginLeft: "41px" }}  >
                    <span className="mas text-black">Get Started</span>
                    <button  id="work" type="button"  name="Hover"
                    style={{  background: "linear-gradient(45deg, #002266, #000436)",  color: "white", borderRadius: "9px",   }}  >Get Started </button>
                </div>
            </div>

              </Col>

              {/* Right Column: Image with Scroll Animation */}
              <Col lg={5} md={12} sm={12} className="text-center">
                <img src={rocketimage}alt="rocket image" style={{ maxWidth: "100%", height: "auto", ...transformStyle }}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Hero;
