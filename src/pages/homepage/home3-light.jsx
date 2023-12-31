import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Intro3 from "../../components/Intro3/intro3";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import Team from "../../components/Team/team";
import Blogs3 from "../../components/blogs/Blogs3/blogs3";
import Services2 from "../../components/Services2/services2";
import Works2 from "../../components/Works2/works2";
import Numbers2 from "../../components/Numbers2/numbers2";
import Clients from "../../components/Clients/clients";

const Homepage3 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
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
  }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <Intro3 />
      <Services2 style="4item" />
      <Works2 />
      <Numbers2 />
      {/* <FullTestimonials withCOLOR /> */}
      <Team />
      <Clients />

      <Footer hideBGCOLOR />
    </LightTheme>
  );
};

export default Homepage3;
