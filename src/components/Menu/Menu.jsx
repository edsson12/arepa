import React from 'react'
import "./Menu.scss";

const Menu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`menu ${menuOpen ? "active" : null}`}>
            <ul>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#intro">Nosotros</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#portfolio">Menú</a>
                </li>
                
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="#contact">Contacto</a>
                </li>
            </ul>
            
        </div>
  )
}

export default Menu