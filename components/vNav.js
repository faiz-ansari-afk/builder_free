import React, { useState } from "react";

export default function VNav() {
  const [toggleIcon, setToggleIcon] = useState("v-nav__toggler");
  const navToggle = () => {
    toggleIcon === "v-nav__toggler"
      ? setToggleIcon("v-nav__toggler toggle")
      : setToggleIcon("v-nav__toggler");
  };
  return (
    <div>
      <nav className="v-navbar">
        
        
        <div className="navbar-nav">
          <div className="nav-item">
            <a href="#" className="nav-link">
              Hand Logo
            </a>
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              Virtual Program
            </a>
          </div>
          <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              Quick Inquiry
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
