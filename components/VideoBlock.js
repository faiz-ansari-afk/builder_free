import Image from "next/image";
import React from "react";

import imageBg from "../assets/sample2.webp";


export default function VideoBlock() {
  return (
    // {/* <ReactPlayer url={videoFilePath} width="100%" height="100%" controls={true} loop /> */}
    // {/* <video loop autoPlay muted>
    //   <source src={video} type="video/mp4" />
    // </video> */}
    <div className="video__container">
      <Image
        className="nav__video"
        src={imageBg}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
