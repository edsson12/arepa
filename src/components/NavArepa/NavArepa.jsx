import React from "react";
import { useState } from "react";
import "./NavArepa.scss";
import imgNav from '../../img/ArepaehuevoLOGO.png'

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
      <div className="o-nav-right">
        <a href="">Acerca</a>
        <a href="">Productos</a>
      </div>

      <img src={imgNav} alt="Arepa e huevo logo png" />

      <div className="o-nav-left">
        <a href="">Galeria</a>
        <a href="">Otra</a>
      </div>
    </nav>

  );
};

export default NavArepa;
