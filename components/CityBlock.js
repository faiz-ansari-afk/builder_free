import React, { Component } from "react";
import CityCard from "./common/CityCard";

import delhi from "../assets/city/delhi.png";
import bang from "../assets/city/bang.png";
import goa from "../assets/city/goa.png";
import hyd from "../assets/city/hyd.png";
import mumbai from "../assets/city/mumbai.png";

export default class CityBlock extends Component {
  render() {
    
    return (
      <div className="block City__block">
        <div className="cb-wrap">
          <div className="cb-video__container">
            <h4>
              We are wherever<span> You need Us!</span>
            </h4>
          </div>
          <div className="cb-icon">
            <div className="cb-icon-item">
              <CityCard icon={delhi} cityName="Delhi" />
            </div>
            <div className="cb-icon-item">
              <CityCard icon={mumbai} cityName="Mumbai" />
            </div>
            <div className="cb-icon-item">
              <CityCard icon={bang} cityName="Bangalore" />
            </div>
            <div className="cb-icon-item">
              <CityCard icon={goa} cityName="Goa" />{" "}
            </div>
            <div className="cb-icon-item">
              <CityCard icon={hyd} cityName="Hyderabad" />
            </div>
          </div>

        
        </div>
      </div>
    );
  }
}
