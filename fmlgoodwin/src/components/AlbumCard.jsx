import React, { useContext } from 'react'
import GlobalVarsContext from '../contexts/context/GlobalVars';

function AlbumCard({ numAlbum }) {
  const { setClassCss } = useContext(GlobalVarsContext);

  function handleClick() {
    setClassCss((prev) => ({...prev, mainCape: `noBody`}));;
  }

  return (
    <div className='cardAlbum' onClick={ handleClick }>
      <h1 className='titleCardAlbum'>
        Album 
        { (numAlbum < 10) ? ' 000' : ' 00' }
        { numAlbum }
        <br />
        <br />
        1900
      </h1>
    </div>
  )
}

export default AlbumCard