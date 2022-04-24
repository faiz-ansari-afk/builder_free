import React from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Counter from "./common/Counter";

import rightArr from '../assets/rightArr.png'

export default function CounterBlock() {
  return (
    <div className="block counter__block">
                    <div className="counter__block-wrapper">
                                <div className="counter__block-heading">
                                  <p className="cb-heading">
                                    Endless Motivation.
                                    <span> Limitless Learning. </span>
                                     Priceless Value.
                                  </p>
                                </div>

                                <div className="counter__block-para">
                                  <p className="cb-para">
                                    Team Builders India is an award-winning employee engagement company{" "}
                                    that builds custom team-building programs delivered in a high-energy
                                    format that results in improved team dynamics, higher productivity
                                    and off-the -charts motivation.
                                  </p>
                                </div>

                                <div className="play-wrapper">
                                  <FontAwesomeIcon icon={faCirclePlay} size="3x" />
                                </div>

                                <div className="counter__icons">
                                  <Counter count="1500 +" title="Experiences Created" />
                                  <Counter count="328" title="Teams Built" />
                                  <Counter count="8470" title="Programs Delivered" />
                                </div>

                                <div className="counter__block-about">
                                  <a className="cb-about" href="#"><span className="cb-about-span" data-text="about team builders india">ABOUT TEAM BUILDERS INDIA</span> </a>
                                  <Image className="ab-about-img" src={rightArr} alt="right arrow" />
                                </div>
                    </div>
    </div>
  );
}
