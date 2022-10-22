import React, { useContext } from 'react';
import GlobalVarsContext from '../contexts/context/GlobalVars';
import MenuAlbuns from './MenuAlbuns';

function MainMenu() {
  const { classCss, optionsMenu: { opAlbum } } = useContext(GlobalVarsContext);
  const { setOptionsMenu, setClassCss } = useContext(GlobalVarsContext);

  function handleClick({ id }) {
    // console.log(id);
    setOptionsMenu((prev) => ({ ...prev, [id]: true}));
    setClassCss((prev) => ({...prev, mainCape: `noBody ${id}`}));
  }

  return (
    <nav className={ classCss.mainCape }>
      <ul
        role='presentation'
        className='menu'
        onClick={ ({ target }) => handleClick(target) }
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