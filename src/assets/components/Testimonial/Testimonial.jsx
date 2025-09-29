import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Ali Khan",
    role: "CEO, Company A",
    feedback: "Spark Lab’s services have boosted both our creativity and efficiency. The team’s approach is very innovative and supportive.",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Sara Ahmed",
    role: "Marketing Manager",
    feedback: "Spark Lab’s solutions perfectly meet our business needs. Their professionalism and timely delivery are highly impressive",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Omar Riaz",
    role: "Developer",
    feedback: "For every project, Spark Lab’s team delivered high-quality and customized results. Working with them was a seamless and enjoyable experience.",
    img: "https://i.pravatar.cc/150?img=3",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  return (
    <section className="testimonial-section">
      <h5 style={{ color: "#0A184A", textAlign: "center", marginTop: "70px" }}>
        Our Testimonials
      </h5>

      <h1
        style={{
          fontSize: "68px",
          fontWeight: "bold",
          lineHeight: "58px",
          color: "#0A184A",
          textAlign: "center",
        }}
      >
       Innovative Solutions, <br></br> Flawlessly Executed
      </h1>

      <p style={{ color: "#0A184A", textAlign: "center", marginTop: "21px" , marginLeft: "140px", marginRight: "140px" }}>
        We combine creativity and meticulous attention to detail to deliver designs and solutions that not only look stunning but also perform flawlessly. Every project is crafted to make a lasting impact and elevate your brand’s presence.
      </p>

      <div className="carousel">
        {testimonials.map((t, index) => {
          let className = "carousel-card";
          if (index === current) className += " active";
          else if (index === (current + 1) % length) className += " next";
          else if (index === (current - 1 + length) % length) className += " prev";
          else className += " hidden";

          return (
            <div key={index} className={className}>
              <img src={t.img} alt={t.name} className="carousel-img" />
              <p className="carousel-feedback">"{t.feedback}"</p>
              <h3 className="carousel-name">{t.name}</h3>
              <span className="carousel-role">{t.role}</span>
            </div>
          );
        })}
      </div>

      {/* Buttons at the bottom with navy blue and arrow icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "20px",
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            backgroundColor: "#0A184A",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "18px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#06103a")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0A184A")}
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          style={{
            backgroundColor: "#0A184A",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "18px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#06103a")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0A184A")}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
