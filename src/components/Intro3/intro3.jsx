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
                <h6>Crafting Memorable Moments</h6>
              </div>
              <h1 className="mb-10 fw-600">Step into the Spotlight of Seamless Events with Cue Communication.</h1>
              <p>
              Elevate Your Events with Unmatched Precision and Creativity
                <br /> – Cue Communication, Your Event Partner Extraordinaire!
              </p>
              <ul>
                <li>
                  <div>
                    <span className="icon pe-7s-arc">
                      <span className="bord"></span>
                    </span>
                  </div>
                  <div className="cont">
                    <h6>Event Management</h6>
                    <p>
                    Cue Communication excels in event management, delivering seamless experiences with precision, creativity, and unmatched attention to detail.
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
                    <h6>Interior</h6>
                    <p>
                    Cue Communication: Elevating spaces through innovative interior design, blending creativity and functionality to transform your environment beautifully.
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
