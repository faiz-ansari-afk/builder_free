import React from "react";

export default function HoverContent({ arrayOfHoverContent }) {
  return (
    <ul className="hover-list">
      {arrayOfHoverContent.map((hoverContent) => (
        <li key={hoverContent.link} className="hover-list__item">
          <a href={hoverContent.addr}>{hoverContent.link}</a>
        </li>
      ))}
    </ul>
  );
}
