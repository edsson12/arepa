import React from "react";
import { useState } from "react";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import "./NavArepa.scss";
import imgNav from "../../img/ArepaehuevoLOGO.png";

const NavArepa = () => {
  const [navColorScroll, setNavColorScroll] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavColorScroll(true);
    } else {
      setNavColorScroll(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav className={navColorScroll ? "o-nav-arepa scrolled" : "o-nav-arepa"}>
      <div className="o-img-nav-container">
      <img src={imgNav} alt="Arepa e huevo logo png" />
      </div>
      
      <div className="o-nav-right">
        <a href="">¿Quiénes somos</a>
        <a href="">Menú</a>
        <a href="">Contacto</a>
      </div>

      <div className="o-nav-left">
        <div className="o-logo-container">
     
     <ImFacebook color={navColorScroll ? 'white': '#090a0a' }></ImFacebook>
     <BsInstagram color={navColorScroll ? 'white': '#090a0a'}></BsInstagram>
     </div>
      </div>
    </nav>
  );
};

export default NavArepa;
