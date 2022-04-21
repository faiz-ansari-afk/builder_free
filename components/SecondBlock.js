import React from "react";
import Image from "next/image";
import CardReliable from "../components/CardReliable";
import {
  faCoffee,
  faYinYang,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";

import tbiLogo from "../assets/tbiLogo.png";

export default function SecondBlock() {
  return (
    <section className="second__block">
      <div className="second__block-wrapper">
        <div className="brand__logo">
          <Image className="" src={tbiLogo} alt="brand logo" width="450px" />
        </div>
        <div className="brand__info">
          <p className="brand__info-text">
            Team Builders India offers an array of Employee Engagement
            Activities segregated on <br /> three fronts namely <b>Physical</b>, <b>Virtual</b> & 
            <b> Experiential Learning Programs</b>.
          </p>
        </div>
        <div className="brand__work">
          <div className="brand__work-wrapper">
            <CardReliable iconName={faCoffee} cardText="Physical Program" />
            <CardReliable iconName={faYinYang} cardText="Virtual Program" />
            <CardReliable
              iconName={faAngleDoubleDown}
              cardText="Experiential Program"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
