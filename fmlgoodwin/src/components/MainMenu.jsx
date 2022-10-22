import React from 'react'
import { useContext } from 'react'
import GlobalVarsContext from '../contexts/context/GlobalVars'
import MenuAlbuns from './MenuAlbuns';

function MainMenu() {
  const { classCss, optionsMenu: { opAlbum } } = useContext(GlobalVarsContext);
  const { setOptionsMenu, setClassCss } = useContext(GlobalVarsContext);

  function newSubMenu() {
    setOptionsMenu({ opAlbum: false });
    setClassCss((prev) => ({...prev, mainCape: 'noBody animateSec'}));
  }

  function handleClick({ target }) {
    console.log(target.id);
    newSubMenu();
    setOptionsMenu((prev) => ({ ...prev, [target.id]: true}));
    setClassCss((prev) => ({...prev, mainCape: `noBody animateSec ${target.id}`}));
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