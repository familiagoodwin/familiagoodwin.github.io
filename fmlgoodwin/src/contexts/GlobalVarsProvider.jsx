import React from 'react'
import GlobalVarsContext from './context/GlobalVars'

function GlobalVarsProvider({children}) {
  return (
    <GlobalVarsContext.Provider value={123}>
      {children}
    </GlobalVarsContext.Provider>
  )
}

export default GlobalVarsProvider