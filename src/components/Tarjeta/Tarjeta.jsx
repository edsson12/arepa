import "./Tarjeta.scss";/*
import imgCard from "../../img/banner4.jpeg";*/
import { tarjetasHuevo } from "../../data";

const Tarjeta = () => {

const data = tarjetasHuevo;

  return (
   
    <div className="o-tarjetas">
     {data.map((d)=>(
       

      <div className="o-tarjeta-container">
      <div className="o-img-card-cont">
        <img src={d.img} alt="arepa huevo" />
      </div>
        <div className="o-card-text-cont">
        <h2>{d.title}</h2>
        <p>
          {d.desc}
        </p>
      </div>

      </div>
      
     ))}
     </div>

  );
};

export default Tarjeta;
