import React, { useState } from "react";
import HoverContent from "./common/HoverContent";
import Image from "next/image";
import tbilogo from "../assets/tbilogo.png";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import linkedinLogo from "../assets/socials/linkedin-logo.png";
import twitter from "../assets/socials/twitter.png";

export default function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("h-nav__toggler");
  const [togglehNavPanel, setTogglehNavPanel] = useState("h-toggle-panel");

  const physicalProgArr = [
    { link: "Indoor", addr: "#" },
    { link: "Outdoor", addr: "#" },
    { link: "Music", addr: "#" },
    { link: "CSR", addr: "#" },
    { link: "Wellness", addr: "#" },
    { link: "Tech based", addr: "#" },
    { link: "Experiences by tbi", addr: "#" },
  ];
  const virtualProgArr = [
    { link: "Software based", addr: "#" },
    { link: "instructor led", addr: "#" },
    { link: "experiences", addr: "#" },
  ];
  const expProgArr = [
    { link: "Outbound", addr: "#" },
    { link: "design thinking", addr: "#" },
    { link: "leadership training", addr: "#" },
    { link: "value integration", addr: "#" },
    { link: "business simulations", addr: "#" },
    { link: "college induction programs ", addr: "#" },
    { link: "college to corporate transitions", addr: "#" },
    { link: "soft skills training", addr: "#" },
    { link: "public speaking", addr: "#" },
  ];

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");
    toggleIcon === "h-nav__toggler"
      ? setToggleIcon("h-nav__toggler toggle")
      : setToggleIcon("h-nav__toggler");
    togglehNavPanel === "h-toggle-panel"
      ? setTogglehNavPanel("h-toggle-panel hp-toggle")
      : setTogglehNavPanel("h-toggle-panel");
  };
  return (
    <nav className="nav">
      <a href="#" className="extra__link">
        Virtual Programs
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <span className="nav__link-span" data-text="Physical Program">
              Physical Program
            </span>
          </a>
          <HoverContent arrayOfHoverContent={physicalProgArr} />
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <span className="nav__link-span" data-text="Virtual Program">
              Virtual Program
            </span>
          </a>
          <HoverContent arrayOfHoverContent={virtualProgArr} />
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            <span className="nav__link-span" data-text="Experiential Learning">
              Experiential Learning
            </span>
          </a>
          <HoverContent arrayOfHoverContent={expProgArr} />
        </li>
      </ul>

      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <div className={togglehNavPanel}>
        <div className="vnp__container">
          
          {/* this divs toggle on click ? hide : show */}
          <div className="vnp-logo">
            <Image src={tbilogo} alt="brand logo" />
          </div>

          <div className="vnp-nav-list-wrap">
            <ul className="vnp-nav-list">
              <li className="vnp-nav__item"><a href="" className="vnp-nav__link">About</a></li>
              <li className="vnp-nav__item"><a href="" className="vnp-nav__link">Physical Programs</a></li>
              <li className="vnp-nav__item"><a href="" className="vnp-nav__link">Virtual programs</a></li>
              <li className="vnp-nav__item"><a href="" className="vnp-nav__link">Experiential Learning</a></li>
              <li className="vnp-nav__item"><a href="" className="vnp-nav__link">faq's</a></li>
              <li className="vnp-nav__item"><a href="" className="vnp-nav__link">career</a></li>
              <li className="vnp-nav__item"><a href="" className="vnp-nav__link">blog</a></li>
              <li className="vnp-nav__item"><a href="" className="vnp-nav__link">contact us</a></li>
            </ul>
          </div>

          <div className="brochure">
            <p><a href="" className="">corporate brochure</a></p>
          </div>

          <div className="vnp-contact-details">
              

              <div className="vnp-sb-contact">
                <p>+91-9953169855 | +91-9953988355</p>
              </div>

              <div className="vnp-sb-email">
                <p>info@teambuilders.co.in</p>
              </div>

              <div className="vnp-social-icon">
                <Image src={facebook} alt="facebook" />
                <Image src={twitter} alt="twitter" />
                <Image src={instagram} alt="instagram" />
                <Image src={linkedinLogo} alt="linkedinLogo" />
              </div>
          </div>
        </div>
      </div>
      {/* create new div and display that div on toggle */}
    </nav>
  );
}
