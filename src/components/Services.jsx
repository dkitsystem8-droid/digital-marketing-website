import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      name: "SEO",
      path: "/seo",
      color: "#ef4444",
      img: "/images/seo1.jpg",
      desc: "Professional SEO solutions to improve your website ranking and visibility.",
    },
    {
      name: "Social Media Marketing",
      path: "/social-media",
      color: "#22c55e",
      img: "/images/socialmedia.jpg",
      desc: "Grow your brand and engage customers through powerful social media strategies.",
    },
    {
      name: "Google Ads",
      path: "/google-ads",
      color: "#3b82f6",
      img: "/images/gooleads.jpg",
      desc: "Target the right audience and generate leads using effective Google Ads campaigns.",
    },
    {
      name: "Website Development",
      path: "/web-development",
      color: "#a855f7",
      img: "/images/web2.jpg",
      desc: "Modern, responsive and high-performance websites for your business growth.",
    },
    {
      name: "Content Marketing",
      path: "/content-marketing",
      color: "#f59e0b",
      img: "/images/content1.jpg",
      desc: "Attractive content strategies to build trust and boost conversions.",
    },
    {
      name: "Email Marketing",
      path: "/email-marketing",
      color: "#c939d6",
      img: "/images/email3.jpg",
      desc: "Reach your customers directly with personalized and effective email campaigns.",
    },
  ];

  return (
    <section style={{ padding: "80px 20px", background: "#f9fafb" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#2563eb" }}>
        Our Services
      </h2>

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          background: "#1e3a8a",
          padding: "30px",
          borderRadius: "24px",
        }}
      >
        <div className="services-grid">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="service-card"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{
                  borderRadius: "20px",
                  padding: "25px",
                  background: "white",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                  boxShadow: isActive
                    ? `0 20px 35px ${service.color}55`
                    : `0 12px 25px rgba(0,0,0,0.15)`,
                  transition: "0.3s",
                  cursor: "pointer",
                  width: "100%", // ensures card fills the grid column
                  boxSizing: "border-box",
                }}
              >
                {/* IMAGE */}
                <img
                  src={service.img}
                  alt={service.name}
                  style={{
                    width: "100%", // responsive
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "14px",
                    marginBottom: "15px",
                  }}
                />

                {/* CONTENT */}
                <h3 style={{ color: service.color, marginBottom: "10px" }}>
                  {service.name}
                </h3>

                <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  {service.desc}
                </p>

                {/* BUTTON */}
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <button
                    onClick={() => navigate(service.path)}
                    style={{
                      backgroundColor: "#22c55e",
                      color: "white",
                      border: "none",
                      padding: "10px 24px",
                      borderRadius: "30px",
                      fontWeight: "650",
                      cursor: "pointer",
                    }}
                  >
                    Click Here
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
