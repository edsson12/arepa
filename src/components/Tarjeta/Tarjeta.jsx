import React from "react";
import "./Tarjeta.scss";
import imgCard from "../../img/banner4.jpeg";

const Tarjeta = () => {
  return (
    <div className="o-tarjeta-container">
      <div className="o-img-card-cont">
        <img src={imgCard} alt="arepa huevo" />
      </div>

      <div className="o-card-text-cont">
        <h2>Arepa e´ huevo chorizuda</h2>
        <p>
          La mas rica arepa e´ huevo rellena de chorizo, hechas con arina de
          maiz y preparadas con la mejor calidad.
        </p>
      </div>
    </div>
  );
};

export default Tarjeta;
