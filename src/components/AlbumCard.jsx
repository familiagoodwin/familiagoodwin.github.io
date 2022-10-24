import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import GlobalVarsContext from '../contexts/context/GlobalVars';
import guia from '../services/guiaFotos';

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
  console.log(guia[numAlbum - 1].data);
  return (
    <div className={ classeMain } onClick={ handleClick } style={{ marginLeft, marginTop }}>
      <h1 className={ classTitle }>
        Album 
        {' '}
        { urlAlbum }
        <br />
        <br />
        { (guia[numAlbum - 1].data) ? guia[numAlbum - 1].data : '1960' }
      </h1>
    </div>
  )
}

export default AlbumCard