import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from "react-icons/fa";
import leftimage from "../../images/medium-shot-colleagues-working-together_23-2150152266.jpg"
import left_second_image from "../../images/2-1-1.jpg"
import left_third_image from "../../images/photo-1454165804606-c3d57bc86b40.jpg"

export class Main_about extends Component {
  render() {
    return (
      <Fragment>
        <Container  fluid>
            <Row style={{ marginTop:"3rem" }}>
                <Col lg={6} md={12} sm={12} >
                    <div className='about-us'>
                        <h1>Innovative Web Solutions, Powered by Spark Lab</h1>
                        <p>At Spark Lab, we go beyond traditional web design to deliver cutting-edge digital solutions that drive impact. Our team blends innovation, creativity, and technology to craft websites and applications that are fast, modern, and built to scale. Whether you’re launching a new brand, showcasing your portfolio, or growing your business online, Spark Lab provides the tools and expertise to make it happen.</p>
                        <ul style={{ listStyle : "none" , paddingLeft: "1rem" }}>
                          <li><FaCheck style={{ color: "002266", marginRight: "8px"  , fontSize: "2rem"}} />Helping businesses grow with innovative web solutions.</li>
                          <li><FaCheck style={{ color: "002266", marginRight: "8px"  , fontSize: "2rem"}} />Unique, modern, and eye-catching designs.</li>
                          <li><FaCheck style={{ color: "002266", marginRight: "8px"  , fontSize: "2rem"}} />Fast, secure, and responsive websites.</li>
                          <li><FaCheck style={{ color: "002266", marginRight: "8px"  , fontSize: "2rem"}} />Always here for your questions and needs.</li>
                          <li><FaCheck style={{ color: "002266", marginRight: "8px"  , fontSize: "2rem"}} />Turning your ideas into successful digital results.</li>
                        </ul>
                         <div className="button-container-1" style={{ marginLeft:"-0.5rem" , width: "11rem" }}>
                            <span className="mas text-black"> View Our Services</span>
                            <button  id="work" type="button"  name="Hover" style={{  background: "linear-gradient(45deg, #002266, #000436)", color: "white",borderRadius: "9px",  }}
                            >  View Our Services
                            </button>
                        </div>
                    </div>
                </Col>  
                <Col lg={6} md={12} sm={12} style={{ alignItems:"center" , justifyContent: "center" , display: "flex" }}>
                  <div className='About-imaage'>
                    <img src={leftimage} alt=""  style={{ width:" 38rem" , borderRadius: "2rem" }}/>
                    <div className="left-imaage">
                        <h1>12+</h1>
                        <p>Expert Team Members</p>
                         <img src={left_second_image} alt="" style={{ width: "16rem", borderRadius: "2rem" }} />
                      </div>

                       <div className="left-image">
                        <h1>150k</h1>
                        <p>Clients Satisfaction Survey <br></br>  for a Spark Lab</p>
                         <img src={left_third_image} alt="" style={{  borderRadius: "2rem" }} />
                      </div>
                  </div>
                </Col>
            </Row>
        </Container >
      </Fragment>
    )
  }
}

export default Main_about