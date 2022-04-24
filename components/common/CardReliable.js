import React from "react";
import Image from "next/image";

export default function CardReliable({ iconName, cardText }) {
  return (
    <div>
      <div className="card__container">
        <div className="card__icon">
          <Image
            src={iconName}
            alt={cardText}
          />
        </div>
        <div className="card__text">
          <p>{cardText}</p>
        </div>
      </div>
    </div>
  );
}
