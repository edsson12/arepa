import React, { useState } from 'react'
import Acerca from './components/Acerca/Acerca'
import Menu from './components/Menu/Menu'

import NavArepa from './components/NavArepa/NavArepa'


const App = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    <NavArepa
    setMenuOpen={setMenuOpen}
    menuOpen={menuOpen}
    />

 

    <Menu
    setMenuOpen={setMenuOpen}
    menuOpen={menuOpen}
    />
    <Acerca/>

    

    <div style={{ height:"1800px"}}></div> 

    
    </>
  )
}

export default App