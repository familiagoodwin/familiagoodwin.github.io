import React from 'react'
import { useContext } from 'react'
import GlobalVarsContext from '../contexts/context/GlobalVars'

function Capa() {
  const { classCss, setClassCss } = useContext(GlobalVarsContext);

  console.log(classCss);

  function hanldeClinkTitle() {
    setClassCss((prev) => ({...prev, mainCape: 'animationUP'}));
  }

  return (
    <main className={classCss}>
      <h1
       role='presentation'
       onClick={ hanldeClinkTitle }
      >Houses and Cars</h1>
      <h3>Familia Goodwin</h3>
    </main>
  )
}

export default Capa