import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    servicesRequired: "",
    projectBudget: "",
    timeline: "",
    projectDetails: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    for (let key in formData) {
      if (!formData[key]) {
        setError("⚠️ Please fill in all the fields.");
        setSuccess("");
        return;
      }
    }

    setLoading(true);
    setError("");
    setSuccess("");

    emailjs
      .send(
        "service_yjgg3qf",
        "template_2rpk2ue",
        formData,
        "GE82Cqbt2o6SC-t37"
      )
      .then(
        () => {
          setSuccess("✅ Your message has been sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            companyName: "",
            servicesRequired: "",
            projectBudget: "",
            timeline: "",
            projectDetails: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setError("❌ Failed to send message. Please try again later.");
          setLoading(false);
        }
      );
  };

  const openGoogleMaps = () => {
    const address = encodeURIComponent(
      "Durkkas Info Tech, 58, MDR Nagar North, SBK college Road, Aruppukottai-626101, Virudhunagar District, TamilNadu, India"
    );
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, "_blank");
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#1e3a8a",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* ===== LEFT: LOCATION + MAP ===== */}
        <div
          style={{
            flex: "1 1 400px",
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "10px 16px",
              backgroundColor: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              marginBottom: "10px",
              width: "120px",
            }}
          >
            ⬅ Back
          </button>

          <h3 style={{ color: "#1e3a8a", marginBottom: "10px" }}>Our Location</h3>
          <p>
            Durkkas Info Tech <br />
            58, MDR Nagar North, SBK college Road <br />
            Aruppukottai-626101 <br />
            Virudhunagar District, TamilNadu, India
          </p>

          <iframe
            title="Durkkas Info Tech Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.5505539212276!2d77.97477327476538!3d9.481357892969424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b032f617f8c9c0f%3A0x6f42c94ef78b2147!2sDurkkas%20Info%20Tech!5e0!3m2!1sen!2sin!4v1701500000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <button
            onClick={openGoogleMaps}
            style={{
              marginTop: "10px",
              padding: "12px",
              backgroundColor: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Open in Google Maps
          </button>
        </div>

        {/* ===== RIGHT: CONTACT FORM ===== */}
        <div
          style={{
            flex: "1 1 400px",
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "32px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 className="shine-text" style={{ textAlign: "center", marginBottom: "25px", color: "#22c55e" }}>
            Contact Us
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required style={inputStyle} />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required style={inputStyle} />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} style={inputStyle} />

            <select name="servicesRequired" value={formData.servicesRequired} onChange={handleChange} required style={inputStyle}>
              <option value="">-- Services Required --</option>
              <option value="SEO">SEO</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="Google Ads">Google Ads</option>
              <option value="Website Development">Website Development</option>
              <option value="Content Marketing">Content Marketing</option>
              <option value="Email Marketing">Email Marketing</option>
            </select>

            <select name="projectBudget" value={formData.projectBudget} onChange={handleChange} required style={inputStyle}>
              <option value="">-- Project Budget --</option>
              <option value="Under ₹50,000">Under ₹50,000</option>
              <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
              <option value="₹1,00,000 - ₹2,00,000">₹1,00,000 - ₹2,00,000</option>
              <option value="₹2,00,000 - ₹5,00,000">₹2,00,000 - ₹5,00,000</option>
              <option value="Above ₹5,00,000">Above ₹5,00,000</option>
            </select>

            <select name="timeline" value={formData.timeline} onChange={handleChange} required style={inputStyle}>
              <option value="">-- Select Timeline --</option>
              <option value="ASAP (rush job)">ASAP (rush job)</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="2-3 months">2-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="Flexible timeline">Flexible timeline</option>
            </select>

            <textarea name="projectDetails" placeholder="Tell us about your project" rows="5" value={formData.projectDetails} onChange={handleChange} required style={{ ...inputStyle, resize: "vertical" }} />

            {loading && <p style={{ textAlign: "center" }}>⏳ Sending message...</p>}
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
            {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}

            <button type="submit" disabled={loading} style={{
              padding: "14px",
              backgroundColor: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
            }}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* ===== GREEN SHINE ANIMATION ===== */}
      <style>
        {`
          .shine-text {
            background: linear-gradient(90deg, #22c55e 0%, #ffffff 50%, #22c55e 100%);
            background-size: 200% auto;
            color: #22c55e;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shine 2s linear infinite;
          }
          @keyframes shine {
            to { background-position: 200% center; }
          }
        `}
      </style>
    </section>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};
