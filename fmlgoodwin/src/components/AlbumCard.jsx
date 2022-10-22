import React, { useContext } from 'react'
import GlobalVarsContext from '../contexts/context/GlobalVars';

function AlbumCard() {
  const { setClassCss } = useContext(GlobalVarsContext);

  function handleClick() {
    setClassCss((prev) => ({...prev, mainCape: `noBody`}));;
  }

  return (
    <div className='cardAlbum' onClick={ handleClick }>
      <h1 className='titleCardAlbum'>Album 0001</h1>
    </div>
  )
}

export default AlbumCard