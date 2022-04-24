import React from "react";
import Image from "next/image";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import linkedinLogo from "../assets/socials/linkedin-logo.png";
import twitter from "../assets/socials/twitter.png";
import logo from "../assets/lefthand.png";

export default function Socials() {
  return (
    <div className="block socials-block">
      <div className="contact-details">
          <div className="social-icon">
            <Image src={facebook} alt="facebook" />
            <Image src={twitter} alt="twitter" />
            <Image src={instagram} alt="instagram" />
            <Image src={linkedinLogo} alt="linkedinLogo" />
          </div>
          <div className="sb-contact">
            <p>+91-9953169855 | +91-9953988355</p>
          </div>
          <div className="sb-email">
            <p>info@teambuilders.co.in</p>
          </div>
      </div>
      <div className="mrque-div">
        <div className="mrque-div-inner">
        <span> Team Builders India&nbsp;</span>
        <span> Team Builders India&nbsp;</span>
        <span> Team Builders India&nbsp;</span>
        <span> Team Builders India&nbsp;</span>
        </div>
      </div>

      <div className="scb-lefthand-wrap">
      <div className="scb-lefthand">
        <Image src={logo} alt="hand gif" />
      </div>
      </div>
    </div>
  );
}
