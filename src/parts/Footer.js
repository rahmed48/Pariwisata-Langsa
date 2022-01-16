import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import IconText from "parts/IconText";
export default function Footer() {
  return (
    <Fade>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-auto" style={{ width: 350 }}>
              <IconText />
              <p className="brand-tagline">Nikmati liburanmu di kota langsa</p>
            </div>
          </div>
          <div className="row">
            <div className="col text-center copyrights">
              Copyright 2022 • M.Ridho Pangestu • Pariwisata Kota Langsa
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
}
