import React, { useContext } from 'react'
import GlobalVarsContext from '../contexts/context/GlobalVars'
import NewMenu from '../services/NewMenu';

function Capa() {
  const { setOptionsMenu, optionsMenu: { newMenu } } = useContext(GlobalVarsContext);

  // console.log(newMenu);

  function handleClickTitle() {
    const animated = document.querySelector('.bodyCape');

    setOptionsMenu((prev) => ({ ...prev, newMenu: true }));
    animated.classList.remove('fullBody');
    animated.classList.add('animationUP');
  }

  return (
    <header
      className={'bodyCape fullBody'}
      role='presentation'
      onClick={ handleClickTitle }
    >
      <h1 className='mainTitle'>Houses and Cars</h1>
      <h3 className='mainSubTitle'>Familia Goodwin</h3>
      {newMenu && <NewMenu />}
    </header>
  )
}

export default Capa