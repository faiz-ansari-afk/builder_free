import React, { useState } from "react";
// import window from 'global/window'
//

export default function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  // const [colorChange, setColorChange] = useState(false);
  // const changeNavbarColor = () => {
  //     if (window.scrollY >= 80) {
  //       setColorChange(true);
  //     } else {
  //       setColorChange(false);
  //     }

  // };
  // useEffect(()=> window.addEventListener("scroll", changeNavbarColor) ,[])

  const navToggle = () => {
    console.log("first");
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
  return (
    <nav className="nav ">
      <a href="#" className="extra__link">
        About
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Physical Program
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Virtual Program
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Experiential Learning
          </a>
        </li>
      </ul>

      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      {/* create new div and display that div on toggle */}
    </nav>
  );
}
