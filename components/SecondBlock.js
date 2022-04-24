import React from "react";
import Image from "next/image";
import CardReliable from "./common/CardReliable";

import tbiLogo from "../assets/tbilogo.png";
import physicalGif from "../assets/physical-programs.gif";
import virtualGif from "../assets/virtual-programs.gif";
import experientialGif from "../assets/experimental-learning.gif";

export default function SecondBlock() {
  return (
    <section className="block">
      <div className="second__block-wrapper">
        <div className="brand__logo">
          <Image className="" src={tbiLogo} alt="brand logo"  />
        </div>
        <div className="brand__info">
          <p className="brand__info-text">
            Team Builders India offers an array of Employee Engagement
            Activities segregated on three fronts namely <b>Physical</b>,
            <b> Virtual</b> &<b> Experiential Learning Programs</b>.
          </p>
        </div>
        <div className="brand__work">
          <div className="brand__work-wrapper">
            <CardReliable iconName={physicalGif} cardText="Physical Program" />
            <CardReliable iconName={virtualGif} cardText="Virtual Program" />
            <CardReliable iconName={experientialGif} cardText="Experiential Program" />
          </div>
        </div>
      </div>
    </section>
  );
}
