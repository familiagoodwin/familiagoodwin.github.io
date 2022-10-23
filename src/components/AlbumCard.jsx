import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import GlobalVarsContext from '../contexts/context/GlobalVars';

function AlbumCard({ numAlbum, classeMain, classTitle, marginLeft, marginTop }) {
  const { setClassCss } = useContext(GlobalVarsContext);
  const urlAlbum = (numAlbum < 10) ? `000${numAlbum}` : `00${numAlbum}`;
  const push = useNavigate();

  function handleClick({ target }) {
    const locBookX = target.getBoundingClientRect().x;
    const locBookY = target.getBoundingClientRect().y;

    setClassCss((prev) => ({...prev, mainCape: `noBody`, locBookX, locBookY }));;
    push(`/albuns/${urlAlbum}`);
  }

  return (
    <div className={ classeMain } onClick={ handleClick } style={{ marginLeft, marginTop }}>
      <h1 className={ classTitle }>
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