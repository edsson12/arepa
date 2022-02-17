import React from "react";
import { useState } from "react";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";






import "./NavArepa.scss";
import imgNav from "../../img/ArepaehuevoLOGO.png";

const NavArepa = ({ menuOpen, setMenuOpen }) => {


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
    <>
      <nav className={navColorScroll ? "o-nav-arepa scrolled" : "o-nav-arepa"}>
        <div className="o-img-nav-container">
          <img src={imgNav} alt="Arepa e huevo logo png" />
        </div>

        <div className="o-nav-right">
          <a href="">Nosotros</a>
          <a href="">Menú</a>
          <a href="">Contacto</a>
        </div>

        <div className="o-nav-left">
          <div className="o-logo-container">
            <ImFacebook
              color={navColorScroll ? "white" : "#090a0a"}
            ></ImFacebook> 
            <BsInstagram
              color={navColorScroll ? "white" : "#090a0a"}
            ></BsInstagram>

          </div>
          
         
         <div className={menuOpen ? "hamburger_activo":"hamburger"} onClick={() => setMenuOpen(!menuOpen)}>

         
            {menuOpen  ? <ImCross size={"1.6rem"} color={"#f9ae19"} />:  <GiHamburgerMenu size={"2rem"} color={"#f9ae19"}/>}

            


           
              
            </div>
        </div>
      </nav>
    </>
  );
};

export default NavArepa;
