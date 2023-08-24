/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const Kidsportfolio = ({ grid, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
           
              <h3 className="wow color-font">
                Our Kids Products Collection
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`${grid === 3 ? "container-fluid" : "container"}`}>
        <div className="row">
         

          <div className="gallery full-width">
            <div
              className={`${
                grid === 3
                  ? "col-lg-3 col-md-6"
                  : grid === 2
                  ? "col-md-6 lg-mr"
                  : "col-12"
              } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/kids/kids-wear-1.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Creativity Demand</h6>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-3 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items kids-wear wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/kids/kids-wear-2.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>GIRLS LONG SLEEVE</h6>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-3 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/kids/kids-wear-3.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Through The Breaking</h6>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-3 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items kids-wear wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/kids/kids-wear-4.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Create With Creatives</h6>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-3 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/kids/kids-wear-5.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Energies of Love</h6>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-3 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items kids-wear wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/kids/kids-wear-6.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Blast From The Past</h6>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-3 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/kids/kids-wear-7.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>See It Yourself</h6>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-3 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items kids-wear wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/kids/kids-wear-8.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Blast From The Past</h6>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-3 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items kids-wear wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/kids/kids-wear-9.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Blast From The Past</h6>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-3 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items kids-wear wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/kids/kids-wear-10.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Blast From The Past</h6>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-3 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items kids-wear wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/kids/kids-wear-11.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Blast From The Past</h6>
              </div>
            </div>
            <div
              className={`${
                grid === 3
                  ? "col-lg-3 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items kids-wear wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/kids/kids-wear-12.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Blast From The Past</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kidsportfolio;