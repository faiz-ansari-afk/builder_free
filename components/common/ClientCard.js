import React from "react";
import Image from "next/image";

export default function ClientCard({ clientLogo, clientText }) {
  return (
    <div style={{position:"relative",width:"440px"}}>
    <div className="client__card">
      <div className="client__logo-wrap">
        <Image src={clientLogo} alt={clientText} />
      </div>
      <div className="client__text-wrap">
        <p className="client__text">{clientText}</p>
      </div>
    </div>
    </div>
  );
}
