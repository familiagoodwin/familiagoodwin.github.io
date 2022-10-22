import React from 'react'
import { useContext } from 'react'
import GlobalVarsContext from '../contexts/context/GlobalVars'

function MainMenu() {
  const { classCss } = useContext(GlobalVarsContext);

  function handleClick({ target }) {
    console.log(target.id);
  }

  return (
    <nav className={ classCss.mainCape }>
      <ul
        role='presentation'
        onClick={ handleClick }
      >
        <li id='opAlbum'>Albuns</li>
        <li>Time Line</li>
        <li>Extras</li>
      </ul>
    </nav>
  )
}

export default MainMenu