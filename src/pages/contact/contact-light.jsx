/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import ContactHeader from "../../components/Contact-header/contact-header";
import ContactForm from "../../components/Contact-form/contact-form";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <ContactHeader blackStar />
      <div className="main-content">
        <ContactForm />
        <div className="map" id="ieatmaps">
          <iframe
            src="https://www.google.com/maps/place/Mega+Rose+Dale/@23.7430872,90.3699819,17z/data=!4m14!1m7!3m6!1s0x3755bf7620b12b3b:0xccc05bfe94f29037!2sMega+Rose+Dale!8m2!3d23.7430823!4d90.3725568!16s%2Fg%2F11rvcspqsc!3m5!1s0x3755bf7620b12b3b:0xccc05bfe94f29037!8m2!3d23.7430823!4d90.3725568!16s%2Fg%2F11rvcspqsc?entry=ttu"
            loading="lazy"
          ></iframe>
        </div>
        <Footer hideBGCOLOR />
      </div>
    </LightTheme>
  );
};

export default Contact;
