import React from 'react'
import { useContext } from 'react'
import GlobalVarsContext from '../contexts/context/GlobalVars'

function MainMenu() {
  const { classCss } = useContext(GlobalVarsContext);

  return (
    <nav className={ classCss.mainCape }>
      <ul>
        <li>Albuns</li>
        <li>teste 01</li>
        <li>teste 02</li>
      </ul>
    </nav>
  )
}

export default MainMenu