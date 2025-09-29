import React, { Component } from "react";
import { motion } from "framer-motion";
import protfolio_one from "../../images/fa4b393b88e3f68aaa9b4fb9e1b26523.jpg";
import protfolio_two from "../../images/The Peanut Podcast logo.jpg";
import protfolio_three from "../../images/var8.jpg";
import protfolio_four from "../../images/Design4.jpg";
import protfolio_five from "../../images/KKFINAL-LOGO.jpg";

//website
import website_one from "../../images/screencapture-localhost-travel-in-home-2025-08-11-09_03_41.png";
import website_two from "../../images/screencapture-logowebexpert-2025-09-23-03_11_30.png";
import website_three from "../../images/screencapture-localhost-built-2025-07-25-11_36_56.png";
import website_four from "../../images/screencapture-localhost-estatic-2025-08-05-09_41_56.png";
import website_five from "../../images/screencapture-localhost-nava-2025-08-26-08_23_14.png";

//illustration
import illustration_one from "../../images/1d464c707c4e47af7ace053ea9f3f3fc.jpg";
import illustration_two from "../../images/301c87c069004e7580c9925841b690ee.jpg";
import illustration_three from "../../images/0680684b61a2c89ea5a54d7c0178b1a7.jpg";
import illustration_four from "../../images/d1d99a2c7a7e9d657675e95cf9a95003.jpg";
import illustration_five from "../../images/ef66a86f5a27c2c25a7e140525565b29.jpg";



const MarqueeRow = ({ images, direction = "left", speed = 20, cardMode = false }) => {
  const duplicatedImages = [...images, ...images, ...images]; // triple for seamless

  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", margin: "20px 0" }}>
       <motion.div
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
        style={{ display: "inline-flex", gap: "20px" }}
      >
        {duplicatedImages.map((src, idx) =>
          cardMode ? (
            <div
              key={idx}
              className="marquee-card"
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          ) : (
            <img
              key={idx}
              src={src}
              alt={`img-${idx}`}
              style={{
                width: "300px",
                height: "319px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          )
        )}
      </motion.div>

    </div>
  );
};

export class Portfolio extends Component {
  render() {
    return (
      <div>
        <h5  style={{  color: "#0A184A",  textAlign: "center",  marginTop: "70px",  }}  >
          Our  Portfolio
        </h5>

        <h1
          style={{  fontSize: "68px",  fontWeight: "bold",  lineHeight: "58px",  color: "#0A184A",  textAlign: "center",  }} >
         Crafted with Passion <br></br> & Precision
        </h1>

        <p  style={{  color: "#0A184A",  textAlign: "center",  marginTop: "21px",  marginLeft: "140px", marginRight: "140px" }}  >
         We blend creativity and precision to craft designs and solutions that inspire, perform seamlessly, and make a lasting impact for your brand
        </p>

        {/* Row 1 */}
        <MarqueeRow
          images={[
              protfolio_one,
              protfolio_two,
              protfolio_three,
              protfolio_four,
              protfolio_five,
          ]}
          direction="left"
          speed={20}
        />

        {/* Row 2 */}
        <MarqueeRow
          images={[
           website_one,
             website_two ,
             website_three,
             website_four,
             website_five,
          ]}
          direction="right"
          speed={25}
          cardMode={true}
        />

        {/* Row 3 */}
        <MarqueeRow
          images={[
            illustration_one,
             illustration_two ,
             illustration_three,
             illustration_four,
             illustration_five,
          ]}
          direction="left"
          speed={20}
        />
      </div>
    );
  }
}

export default Portfolio;
