import React, { useState } from 'react';
import GlobalVarsContext from './context/GlobalVars';

function GlobalVarsProvider({children}) {
  const [classCss, setClassCss] =useState({mainCape: 'noBody', locBookX: 0, locBookY: 0});
  const [optionsMenu, setOptionsMenu] = useState({ opAlbum: false, newMenu: false })
  const [navItens, setNavItens] = useState({ pagina: 0, nav: 0, end: false });

  const objProvider = {
    classCss,
    optionsMenu,
    navItens,
    setClassCss,
    setOptionsMenu,
    setNavItens
  }

  return (
    <GlobalVarsContext.Provider value={objProvider}>
      {children}
    </GlobalVarsContext.Provider>
  )
}

export default GlobalVarsProvider