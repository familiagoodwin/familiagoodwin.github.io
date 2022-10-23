import React, { useState } from 'react';
import GlobalVarsContext from './context/GlobalVars';

function GlobalVarsProvider({children}) {
  const [classCss, setClassCss] =useState({mainCape: 'noBody'});
  const [optionsMenu, setOptionsMenu] = useState({ opAlbum: false, newMenu: false })

  const objProvider = {
    classCss,
    optionsMenu,
    setClassCss,
    setOptionsMenu
  }

  return (
    <GlobalVarsContext.Provider value={objProvider}>
      {children}
    </GlobalVarsContext.Provider>
  )
}

export default GlobalVarsProvider