import React from "react";

export default function About() {
  const pageStyle = {
    padding: "20px",
    maxWidth: "1200px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    backgroundColor: "#0735b3ff",
    overflowX: "hidden",
    

  };

  const sectionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    marginBottom: "80px",
    flexWrap: "wrap",
    width: "100%",
    boxSizing: "border-box",
  };

  const textStyle = {
    flex: "1 1 300px",
    textAlign: "left",
    color: "white",
    minWidth: 0,
  };

  const imgContainer = {
    flex: "1 1 300px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 0,
  };

  const circleStyle = {
    width: "330px",
    height: "350px",
    borderRadius: "70%",
    padding: "20px",
    border: "4px solid #ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "rotate 15s linear infinite",
    boxSizing: "border-box",
    maxWidth: "100%",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "80%",
    objectFit: "cover",
    display: "block",
  };

  const headingStyle = {
    fontSize: "2.7rem",
    color: "#0ffdfdef",
    marginBottom: "15px",
    wordBreak: "break-word",
  };

  const paragraphStyle = {
    fontSize: "1.3rem",
    color: "white",
    marginBottom: "10px",
  };

  return (
    <section id="about" style={pageStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", color: "white", marginTop: "80px",  }}>
        About Us
      </h2>

      <style>
        {`
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @media (max-width: 768px) {
            div[style*="display: flex"][style*="flex-wrap: wrap"] {
              flex-direction: column !important;
              gap: 20px !important;
              margin-bottom: 40px !important;
              align-items: center !important;
              text-align: center !important;
            }

            div[style*="flex: 1 1 300px"] {
              flex: 1 1 100% !important;
              min-width: auto !important;
            }

            h1 {
              font-size: 1.8rem !important;
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

      {/* About sections */}
      {[
        {
          title: "Affordable Pricing",
          text: [
            "We believe that quality digital marketing should be accessible to every business. Our pricing plans are designed to fit startups, small businesses, and growing enterprises without compromising on results.",
            "With transparent pricing, no hidden costs, and flexible packages, you get maximum ROI for every rupee you invest.",
          ],
          img: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=1200&q=80",

          reverse: false,
        },
        {
          title: "Experienced Professionals",
          text: [
            "Our team consists of highly skilled digital marketers, designers, developers, and strategists with years of industry experience.",
            "We stay updated with the latest trends, tools, and algorithms to ensure your brand always stays ahead of the competition.",
          ],
          img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
          reverse: true,
        },
        {
          title: "Customized Strategies",
          text: [
            "Every business is unique, and so are our marketing strategies. We analyze your business goals, target audience, and competitors before crafting a tailored digital marketing plan.",
            "This personalized approach ensures higher engagement, better leads, and long-term growth.",
          ],
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
,

          reverse: false,
        },
        {
          title: "Client Satisfaction",
          text: [
            "Client success is our top priority. We focus on building long-term relationships by delivering measurable results and continuous support.",
            "Your growth is our success, and we work closely with you at every stage of your digital journey.",
          ],
          img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
          reverse: true,
        },
        {
          title: "Analytics & Reporting",
          text: [
            "We provide detailed analytics and performance reports to help you understand how your marketing campaigns are performing.",
            "By tracking KPIs, conversion rates, and traffic, we optimize every campaign to maximize ROI and ensure continuous growth.",
          ],
          img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
          reverse: false,
        },
      ].map((section, idx) => (
        <div
          key={idx}
          style={{
            ...sectionStyle,
            flexDirection: section.reverse ? "row-reverse" : "row",
          }}
        >
          <div style={textStyle}>
            <h1 style={headingStyle}>{section.title}</h1>
            {section.text.map((p, i) => (
              <p style={paragraphStyle} key={i}>
                {p}
              </p>
            ))}
          </div>
          <div style={imgContainer}>
            <div style={circleStyle} className="circle-image">
              <img src={section.img} alt={section.title} style={imageStyle} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
