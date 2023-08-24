import React from "react";
import Link from "next/link";

const Team2 = () => {
  const categories = [
    {
      title: "KIDS WEAR",
      description: "Playful Fashion for Little Ones",
      image: "/img/categories/cat1.jpg",
      route: "/kids/kids",
    },
    {
      title: "LADIES",
      description: "Elegance Redefined with Every Style",
      image: "/img/categories/cat2.jpg",
      route: "/ladies/ladies",
    },
    {
      title: "MENS",
      description: "Timeless Looks for Modern Gents",
      image: "/img/categories/cat3.jpg",
      route: "/mens/mens",
    },
    {
      title: "OUTERWEAR",
      description: "Embrace the Elements in Style",
      image: "/img/categories/cat4.jpg",
      route: "/outerwear/outerwear",
    },
    {
      title: "PYJAMA SETS",
      description: "Cozy Comfort for Restful Nights",
      image: "/img/categories/cat5.jpg",
      route: "/pyjama/pyjama",
    },
  ];

  return (
    <section className="team section-padding">
      <div className="container-fluid">
      <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Categories
              </h6>
              <h3 className="wow color-font">
                Unveiling Elegance and Comfort: A Complete Range of Fashion for Everyone
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-lg-4 col-md-6 mb-80" key={index}>
              <div className="item cir md-mb50">
                <Link href={category.route}>
                  <a>
                    <div className="img">
                      <img src={category.image} alt={category.title} />
                      <div className="info">
                        <h6>{category.title}</h6>
                        <span>{category.description}</span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team2;
