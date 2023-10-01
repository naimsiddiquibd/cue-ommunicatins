/* eslint-disable @next/next/no-img-element */
import React from "react";

const Intro3 = () => {
  return (
    <header className="slider-stwo valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img">
              <img src="/img/slid/002.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <div className="sub-title mb-5">
                <h6>Efficient event coordination platform</h6>
              </div>
              <h1 className="mb-10 fw-600">Simplify Event Organization Process</h1>
              <p>
              Event management website streamlines planning, registration, communication,
                <br /> and coordination, ensuring seamless and successful events for clients.
              </p>
              <ul>
                <li>
                  <div>
                    <span className="icon pe-7s-arc">
                      <span className="bord"></span>
                    </span>
                  </div>
                  <div className="cont">
                    <h6>Renovating</h6>
                    <p>
                    Enhancing your space through expert craftsmanship, innovative designs, and tailored solutions for lasting beauty and functionality.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <span className="icon pe-7s-help2">
                      <span className="bord"></span>
                    </span>
                  </div>
                  <div className="cont">
                    <h6>Decorating</h6>
                    <p>
                    Infusing style, personality, and warmth into your interiors with impeccable taste and a keen eye for detail.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro3;
