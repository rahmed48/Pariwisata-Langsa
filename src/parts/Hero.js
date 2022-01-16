import React from "react";
import Fade from "react-reveal/Fade";

import ImageHero from "assets/images/picture/picture.png";
import ImageHeroFrame from "assets/images/picture/img-hero-frame.jpg";
// import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";

import Button from "elements/Button";

import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          {/* Column Left */}
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Pariwisata Kota Langsa
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              Tempat wisata di kota langsa, dan beberapa penginapan yang tersedia
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Lihat Sekarang
            </Button>
            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                  width="36"
                  height="36"
                  src={IconTreasure}
                  alt={`${props.data.penginapan} Treasure`}
                />                
                <h6 className="mt-3">
                  {formatNumber(props.data.wisata)}{" "}
                  <br></br>
                  <span className="text-gray-500 font-weight-light">
                    Tempat Wisata
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                  width="36"
                  height="36"
                  src={IconTraveler}
                  alt={`${props.data.wisata} Travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.penginapan)}{" "}
                  <br></br>
                  <span className="text-gray-500 font-weight-light">
                    Penginapan
                  </span>
                </h6>
              </div>
            </div>
          </div>
          {/* Column Left */}
          {/* Column Right */}
          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHeroFrame}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
          {/* Column Right */}
        </div>
      </section>
    </Fade>
  );
}
