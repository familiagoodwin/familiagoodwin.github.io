import React from 'react'
import { useContext } from 'react'
import GlobalVarsContext from '../contexts/context/GlobalVars'
import MenuAlbuns from './MenuAlbuns';

function MainMenu() {
  const { classCss, optionsMenu: { opAlbum } } = useContext(GlobalVarsContext);
  const { setOptionsMenu } = useContext(GlobalVarsContext);

  function newSubMenu() {
    setOptionsMenu({ opAlbum: false });
  }

  function handleClick({ target }) {
    console.log(target.id);
    newSubMenu();
    setOptionsMenu((prev) => ({ ...prev, [target.id]: true}));
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
      { opAlbum && <MenuAlbuns /> }
    </nav>
  )
}

export default MainMenu