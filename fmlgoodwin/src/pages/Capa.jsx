import React from 'react'
import { useContext } from 'react'
import GlobalVarsContext from '../contexts/context/GlobalVars'

function Capa() {
  const { setClassCss } = useContext(GlobalVarsContext);

  // console.log(classCss);

  function hanldeClinkTitle() {
    const animated = document.querySelector('.bodyCape');

    setClassCss((prev) => ({...prev, mainCape: 'noBody animateSec'}));
    animated.classList.remove('fullBody');
    animated.classList.add('animationUP');
  }

  return (
    <main
      className={'bodyCape fullBody'}
      role='presentation'
      onClick={ hanldeClinkTitle }
    >
      <h1 className='mainTitle'>Houses and Cars</h1>
      <h3 className='mainSubTitle'>Familia Goodwin</h3>
    </main>
  )
}

export default Capa