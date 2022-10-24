import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalVarsContext from '../contexts/context/GlobalVars';
import MenuAlbuns from './MenuAlbuns';

function MainMenu() {
  const { classCss, optionsMenu: { opAlbum, opTimeLine } } = useContext(GlobalVarsContext);
  const { setOptionsMenu, setClassCss } = useContext(GlobalVarsContext);
  const push = useNavigate();

  function handleClick({ id }) {
    // console.log(id);
    push('/');
    setClassCss((prev) => ({...prev, mainCape: `noBody ${id}`}));
    setOptionsMenu((prev) => ({ ...prev, [id]: true}));
  }

  function goToTimeLine() {
    setOptionsMenu((prev) => ({ ...prev, opTimeLine: false, opAlbum: false}));
    push('/timeline')
  }

  return (
    <nav className={ classCss.mainCape }>
      { opTimeLine &&  goToTimeLine()}
      <ul
        role='presentation'
        className='menu'
        onClick={ ({ target }) => handleClick(target) }
      >
        <li id='opAlbum'>Albuns</li>
        <li id='opTimeLine'>Time Line</li>
        <li>Extras</li>
      </ul>
      { opAlbum && <MenuAlbuns /> }
    </nav>
  )
}

export default MainMenu