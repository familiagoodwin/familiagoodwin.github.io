import React from 'react'
import { useState } from 'react'
import GlobalVarsContext from './context/GlobalVars'

function GlobalVarsProvider({children}) {
  const [classCss, setClassCss] =useState({mainCape: 'bodyCape'});

  const objProvider = {
    classCss,
    setClassCss
  }

  return (
    <GlobalVarsContext.Provider value={objProvider}>
      {children}
    </GlobalVarsContext.Provider>
  )
}

export default GlobalVarsProvider