import React, { useState } from "react";
import Image from "next/image";

import logo from '../assets/logo.gif'
import tbiLogo from "../assets/tbilogo.png";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import linkedinLogo from "../assets/socials/linkedin-logo.png";
import twitter from "../assets/socials/twitter.png";

export default function VNav() {
  const [toggleIcon, setToggleIcon] = useState("v-nav__toggler");
  const [toggleVnavPanel, setToggleVnavPanel] = useState("v-toggle-panel")
  const navToggle = () => {
    toggleIcon === "v-nav__toggler"
      ? setToggleIcon("v-nav__toggler toggle")
      : setToggleIcon("v-nav__toggler");
    toggleVnavPanel === "v-toggle-panel" ? setToggleVnavPanel("v-toggle-panel vp-toggle") : setToggleVnavPanel("v-toggle-panel")
    console.log("=====================")
    console.log(toggleVnavPanel);
    console.log(toggleIcon);
  };
  return (
    <div>
      <nav className="v-navbar">
        <div className="navbar-nav">
          <div className="nav-item v-nav-img">
            <Image src={logo} alt="left hand" />
          </div>
          <div className="v-toggle-wrap">
            <div className="nav-item">
              <a href="#" className="nav-link">
                Virtual Programs
              </a>
            </div>
            <div onClick={navToggle} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              Quick Inquiry
            </a>
          </div>
        </div>
      </nav>





      {/* vnp = vertical nav toggle panel  but name swap in horizontal navbar, here using hnp prefix  */}
      <div className={toggleVnavPanel}>
        <div className="hnp__container">

          <div className="grid-1x1">

            <div className="col1">
              <div className="hnp-logo">
                <Image src={tbiLogo} alt="brand logo" />
              </div>
              <div className="h-brochure">
                <p><a href="" className="">corporate brochure</a></p>
              </div>
              <div className="hnp-nav-list-wrap">
                <ul className="hnp-nav-list">
                  <li className="hnp-nav__item"><a href="" className="hnp-nav__link">About</a></li>

                  <li className="hnp-nav__item"><a href="" className="hnp-nav__link">faq's</a></li>
                  <li className="hnp-nav__item"><a href="" className="hnp-nav__link">career</a></li>
                  <li className="hnp-nav__item"><a href="" className="hnp-nav__link">blog</a></li>
                  <li className="hnp-nav__item"><a href="" className="hnp-nav__link">contact us</a></li>
                </ul>
              </div>



              <div className="hnp-contact-details">


                <div className="hnp-sb-contact">
                  <p>+91-9953169855 , &nbsp;&nbsp;+91-9953988355 , &nbsp;&nbsp;&nbsp;info@teambuilders.co.in</p>
                
                </div>
                <div className="hnp-social-icon">
                  <Image src={facebook} alt="facebook" />
                  <Image src={twitter} alt="twitter" />
                  <Image src={instagram} alt="instagram" />
                  <Image src={linkedinLogo} alt="linkedinLogo" />
                </div>
              </div>
            </div>
            <div className="col2">
            <div className="parent">
              <div className="cr1">
                
              <a href="" className="hnp-nav__link">Physical Programs</a>
              </div>
              </div>
              <div className="parent">
              <div className="cr2">
              <a href="" className="hnp-nav__link">Virtual programs</a>

              </div>
              </div>
              <div className="parent">
              <div className="cr3">
              <a href="" className="hnp-nav__link">Experiential Learning</a>

              </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
