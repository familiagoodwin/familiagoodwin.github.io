import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import GlobalVarsContext from '../contexts/context/GlobalVars';

function AlbumCard({ numAlbum }) {
  const { setClassCss } = useContext(GlobalVarsContext);
  const urlAlbum = (numAlbum < 10) ? `000${numAlbum}` : `00${numAlbum}`;
  const push = useNavigate();

  function handleClick() {
    setClassCss((prev) => ({...prev, mainCape: `noBody`}));;
    push(`/albuns/${urlAlbum}`);
  }

  return (
    <div className='cardAlbum' onClick={ handleClick }>
      <h1 className='titleCardAlbum'>
        Album 
        {' '}
        { urlAlbum }
        <br />
        <br />
        1900
      </h1>
    </div>
  )
}

export default AlbumCard