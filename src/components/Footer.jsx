import React from "react";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "rgba(11, 15, 233, 0.81)", // Blue background
    color: "white",           // Navy blue text
    textAlign: "center",
    padding: "25px 10px",
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
  };

  return (
    <footer style={footerStyle}>
      © 2026 Durkkas InfoTech. All rights reserved.
    </footer>
  );
}
