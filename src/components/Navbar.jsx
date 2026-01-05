import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const go = (path) => {
    navigate(path);
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <div style={navBar}>
        {/* LOGO */}
        <img
          src="/images/logodrukkas.jpg"
          alt="logo"
          style={{ height: 60, cursor: "pointer", marginLeft: 15 }}
          onClick={() => go("/")}
        />

        {/* DESKTOP MENU */}
        {!isMobile && (
          <div style={menuDesktop}>
            <NavItem text="Home" active={isActive("/")} onClick={() => go("/")} />
            <NavItem text="About" onClick={() => scrollToSection("about")} />
            <NavItem text="Process" onClick={() => scrollToSection("process")} />

            {/* Services Dropdown */}
            <div
              style={navItem}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Services <FaChevronDown size={12} />
              {servicesOpen && (
                <div style={dropdown}>
                  <DropItem onClick={() => go("/seo")}>SEO</DropItem>
                  <DropItem onClick={() => go("/social-media")}>Social Media</DropItem>
                  <DropItem onClick={() => go("/google-ads")}>Google Ads</DropItem>
                  <DropItem onClick={() => go("/web-development")}>Web Development</DropItem>
                  <DropItem onClick={() => go("/content-marketing")}>Content Marketing</DropItem>
                  <DropItem onClick={() => go("/email-marketing")}>Email Marketing</DropItem>
                </div>
              )}
            </div>

            <NavItem
              text="Contact"
              active={isActive("/contact")}
              onClick={() => go("/contact")}
            />
          </div>
        )}

        {/* MOBILE TOGGLE BUTTON */}
        {isMobile && (
          <div style={toggleBtn} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && (
        <div
          style={{
            ...mobileMenu,
            maxHeight: menuOpen ? "500px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
          }}
        >
          <MobileItem active={isActive("/")} onClick={() => go("/")}>
            Home
          </MobileItem>

          <MobileItem onClick={() => scrollToSection("about")}>About</MobileItem>

          <MobileItem onClick={() => scrollToSection("process")}>Process</MobileItem>

          {/* Services Mobile */}
          <div style={mobileItem} onClick={() => setServicesOpen(!servicesOpen)}>
            Services{" "}
            <FaChevronDown
              style={{
                transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.3s",
              }}
            />
          </div>

          {servicesOpen && (
            <div style={mobileSubMenu}>
              <SubItem onClick={() => go("/seo")}>SEO</SubItem>
              <SubItem onClick={() => go("/social-media")}>Social Media</SubItem>
              <SubItem onClick={() => go("/google-ads")}>Google Ads</SubItem>
              <SubItem onClick={() => go("/web-development")}>Web Development</SubItem>
              <SubItem onClick={() => go("/content-marketing")}>Content Marketing</SubItem>
              <SubItem onClick={() => go("/email-marketing")}>Email Marketing</SubItem>
            </div>
          )}

          <MobileItem active={isActive("/contact")} onClick={() => go("/contact")}>
            Contact
          </MobileItem>
        </div>
      )}

      {/* SPACE FOR FIXED NAV */}
      <div style={{ height: 80 }} />
    </>
  );
}

/* ===== COMPONENTS ===== */
const NavItem = ({ text, onClick, active }) => (
  <div
    onClick={onClick}
    style={{
      ...navItem,
      color: active ? "#2563eb" : "#000",
      borderBottom: active ? "2px solid #2563eb" : "none",
    }}
  >
    {text}
  </div>
);

const DropItem = ({ children, onClick }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...dropItem,
        backgroundColor: hover ? "#2563eb" : "#fff",
        color: hover ? "#fff" : "#000",
        transition: "0.2s ease",
      }}
    >
      {children}
    </div>
  );
};

const MobileItem = ({ children, onClick, active }) => (
  <div
    onClick={onClick}
    style={{
      ...mobileItem,
      background: active ? "#2563eb" : "transparent",
      color: active ? "#fff" : "#000",
    }}
  >
    {children}
  </div>
);

const SubItem = ({ children, onClick }) => (
  <div style={subItem} onClick={onClick}>
    {children}
  </div>
);

/* ===== STYLES ===== */
const navBar = {
  position: "fixed",
  top: 0,
  width: "100%",
  height: 80,
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px 10px 2px",
  boxShadow: "0 2px 30px rgba(0,0,0,0.1)",
  zIndex: 999,
};

const menuDesktop = {
  display: "flex",
  gap: 25,
  marginRight: 60,
  alignItems: "center",
};

const navItem = {
  cursor: "pointer",
  fontWeight: 500,
  position: "relative",
};

const dropdown = {
  position: "absolute",
  top: "100%",
  left: 0,
  background: "#fff",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  borderRadius: 6,
  overflow: "hidden",
  minWidth: "180px",
  zIndex: 1000,
};

const dropItem = {
  padding: "15px 16px",
  cursor: "pointer",
  whiteSpace: "nowrap",
};

const toggleBtn = {
  width: 42,
  height: 42,
  background: "#314bdfff",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 6,
  cursor: "pointer",
  position: "absolute",
  right: 50,
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1001,
};

const mobileMenu = {
  position: "fixed",
  top: 80,
  left: 0,
  width: "100%",
  background: "#fff",
  zIndex: 999,
  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
};

const mobileItem = {
  padding: "14px 20px",
  borderBottom: "1px solid #eee",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
};

const mobileSubMenu = {
  background: "#f1f5f9",
  paddingLeft: 20,
};

const subItem = {
  padding: "12px 20px",
  cursor: "pointer",
  borderBottom: "1px solid #ddd",
};
