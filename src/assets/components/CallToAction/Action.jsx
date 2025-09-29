import React from "react";
import bgImage from "../../images/dfaf3re.PNG"; // import local image


const Action = () => {
  const handleClick = () => {
    alert("Thanks for taking action!");
  };

  return (
    <section className="cta-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="cta-overlay"></div>
      <div className="cta-content">
        <h2>Ready to Get Started?</h2>
        <p>Take the first step towards growing your business with our expert solutions. Join thousands of satisfied clients and unlock exclusive insights, tips, and offers designed to help you succeed faster and smarter.</p>
        <button onClick={handleClick}>Get Started</button>
      </div>
    </section>
  );
};

export default Action;
