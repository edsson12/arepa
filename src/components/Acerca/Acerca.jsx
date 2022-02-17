import React from "react";
import "./Acerca.scss";
const Acerca = () => {
  return (
    <div className="o-acerca-container">
      <div className="o-left"></div>
      <div className="o-right">
        <div className="o-txt-container">
          <h1>Probame la arepa! </h1>
          <h2>En arepaehuevo nos encargamos de preparar las mejores arepas de huevo costeñas, hechas con los productos de mejor calidad. ¡Animate a probar la tuya!</h2>
          <button>Ver galería</button>
        </div>
        <div className="space"></div>
      </div>
    </div>
  );
};

export default Acerca;
