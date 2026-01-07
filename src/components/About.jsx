import React from "react";

export default function About() {
  const pageStyle = {
    padding: "20px",
    maxWidth: "1200px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.7",
    backgroundColor: "#0b1c4d",
    overflowX: "hidden",
  };

  const sectionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    marginBottom: "90px",
    flexWrap: "wrap",
  };

  const textStyle = {
    flex: "1 1 300px",
    color: "white",
  };

  const imgContainer = {
    flex: "1 1 300px",
    display: "flex",
    justifyContent: "center",
  };

  /* 🔄 Rotating Circle */
  const circleStyle = {
    width: "330px",
    height: "350px",
    borderRadius: "70%",
    padding: "18px",
    border: "4px solid #ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "rotateCircle 18s linear infinite",
    overflow: "hidden",
  };

  /* 🖼 Image Wrapper – reverse rotation */
  const imageWrapper = {
    width: "100%",
    height: "100%",
    borderRadius: "80%",
    animation: "reverseRotate 18s linear infinite",
    overflow: "hidden",
  };

  /* 🔍 Image Zoom */
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.6s ease",
  };

  const headingStyle = {
    fontSize: "2.6rem",
    color: "#0ffdfd",
    marginBottom: "15px",
  };

  const paragraphStyle = {
    fontSize: "1.15rem",
    marginBottom: "10px",
  };

  return (
    <section id="about" style={pageStyle}>
      <h2
        style={{
          textAlign: "center",
          marginTop: "80px",
          marginBottom: "50px",
          color: "white",
          fontSize: "2.8rem",
        }}
      >
        About Durkkas InfoTech
      </h2>

      <style>
        {`
        @keyframes rotateCircle {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes reverseRotate {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .zoom-img:hover img {
          transform: scale(1.15);
        }

        @media (max-width: 768px) {
          div[style*="flex-direction"] {
            flex-direction: column !important;
            text-align: center;
          }

          h1 {
            font-size: 1.9rem !important;
          }

          p {
            font-size: 1rem !important;
          }

          .circle-image {
            width: 250px !important;
            height: 250px !important;
          }
        }
        `}
      </style>

      {/* REUSABLE SECTION */}
      {[
        {
          title: "Who We Are",
          img: "/images/about1.jpg",
          content: [
            "As an ISO 9001:2015 Certified company, Durkkas InfoTech is more than just a digital service provider — we are your extended creative and technical workforce.",
            "We bring digital ideas to life through professional website development, e-commerce solutions, redesign, maintenance, and result-driven digital marketing services.",
            "Founded to empower startups, small businesses, and growing brands — we help businesses not just exist online but thrive.",
          ],
          reverse: false,
        },
        {
          title: "Our Approach",
           img: "/images/about3.jpg",
          content: [
            "We balance design, strategy, and execution to deliver meaningful digital experiences.",
            "From the first pixel of your website to the voice of your social media marketing, every touchpoint is crafted with purpose.",
            "We never provide generic solutions — every brand deserves its own identity.",
          ],
          reverse: true,
        },
        {
          title: "Our Mission",
           img: "/images/about4.jpg",
          content: [
            "Our mission is to deliver powerful digital solutions that help businesses succeed online.",
            "From responsive websites to creative content and performance-driven digital marketing, everything is customized.",
            "We handle the digital hustle so you can focus on growing your core business.",
          ],
          reverse: false,
        },
        {
          title: "Our Vision",
          img: "/images/about7.jpg",
          content: [
            "We envision a digital world where every business has a bold online identity.",
            "Through smart design and impactful marketing, we bridge creativity and technology.",
            "Our goal is to create digital experiences that leave a lasting impression.",
          ],
          reverse: true,
        },
      ].map((sec, idx) => (
        <div
          key={idx}
          style={{
            ...sectionStyle,
            flexDirection: sec.reverse ? "row-reverse" : "row",
          }}
        >
          <div style={textStyle}>
            <h1 style={headingStyle}>{sec.title}</h1>
            {sec.content.map((txt, i) => (
              <p style={paragraphStyle} key={i}>
                {txt}
              </p>
            ))}
          </div>

          <div style={imgContainer}>
            <div style={circleStyle} className="circle-image zoom-img">
              <div style={imageWrapper}>
                <img src={sec.img} alt={sec.title} style={imageStyle} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
