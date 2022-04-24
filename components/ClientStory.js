import React from "react";
import Image from "next/image";

import makeMyTrip from "../assets/client-logo/makemy-trip.png";
import americanExpress from "../assets/client-logo/american-express.png";
import airtel from "../assets/client-logo/airtel.png";
import autodesk from "../assets/client-logo/autodesk.png";
import azurePower from "../assets/client-logo/azure-power.png";
import bcg from "../assets/client-logo/bcg.png";
import bira91 from "../assets/client-logo/bira-91.png";
import capgemini from "../assets/client-logo/capgemini.png";
import cocaCola from "../assets/client-logo/coca-cola.png";
import cytiva from "../assets/client-logo/cytiva.png";
import dassaultSystemes from "../assets/client-logo/dassault-systemes.png";
import eicher from "../assets/client-logo/eicher.png";
import ericson from "../assets/client-logo/ericsson.png";
import ey from "../assets/client-logo/ey.png";
import gieseckeDevrient from "../assets/client-logo/g-d-giesecke-devrient.png";
import google from "../assets/client-logo/google.png";
import gsk from "../assets/client-logo/gsk.png";
import internationalManagementInstitute from "../assets/client-logo/imi-international-management-institute.png";
import intel from "../assets/client-logo/intel.png";
import johnsonJohnson from "../assets/client-logo/johnson-johnson.png";
import marutiSuzuki from "../assets/client-logo/maruti-suzuki.png";
import mi from "../assets/client-logo/mi.png";
import ntpc from "../assets/client-logo/ntpc.png";
import perfetti from "../assets/client-logo/perfetti.png";
import pwc from "../assets/client-logo/pwc.png";
import reckittBenckiser from "../assets/client-logo/reckitt-benckiser.png";
import renewPower from "../assets/client-logo/renew-power.png";
import salesforce from "../assets/client-logo/salesforce.png";
import thomasCook from "../assets/client-logo/thomas-cook.png";

const clientLogoData = [
  makeMyTrip,
  americanExpress,
  google,
  cocaCola,
  bira91,
  ntpc,
  marutiSuzuki,
  ey,
  pwc,
  airtel,
  mi,
  ericson,
  internationalManagementInstitute,
  thomasCook,
  gieseckeDevrient,
  eicher,
  salesforce,
  capgemini,
  johnsonJohnson,
  intel,
  bcg,
  reckittBenckiser,
  azurePower,
  cytiva,
  perfetti,
  autodesk,
  renewPower,
  gsk,
  dassaultSystemes,
];

export default function ClientStory() {
  console.log(clientLogoData.src);
  return (
    <section className="block">
      <div className="client-story__block">
        <h4 className="cs-head">Our Clients & Their Unique Stories </h4>

        <div className="grid-6x5">
          {clientLogoData.map((logoData) => (
            <div className="grid-6x5-flex" key={logoData}>
              <div className="grid-6x5-flex-item">
                <a href="#">
                  <Image src={logoData} alt={logoData} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
