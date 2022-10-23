import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import AlbumCard from '../components/AlbumCard'
import GlobalVarsContext from '../contexts/context/GlobalVars';

function Albuns() {
  const { classCss: { locBookX, locBookY } } = useContext(GlobalVarsContext);
  const { pathname } = useLocation();
  const arryPath = pathname.split('/');
  console.log(locBookY);

  return (
    <div>
      <AlbumCard
        numAlbum={ arryPath[2].replaceAll('0','') } 
        classeMain='cardAlbum animateOpenAlbum' 
        classTitle='titleCardAlbum'
        marginLeft={ `${locBookX}px` }
        marginTop={ `${locBookY - 170}px` }
      />
    </div>
  )
}

export default Albuns