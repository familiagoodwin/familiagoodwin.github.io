import React from 'react'
import { useContext } from 'react'
import GlobalVarsContext from '../contexts/context/GlobalVars'

function MainMenu() {
  const { classCss } = useContext(GlobalVarsContext);

  return (
    <nav className={ classCss.mainCape }>
      <ul>
        <li>Albuns</li>
        <li>Time Line</li>
        <li>Extras</li>
      </ul>
    </nav>
  )
}

export default MainMenu