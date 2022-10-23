import React from 'react'
import { useLocation } from 'react-router-dom';
import AlbumCard from '../components/AlbumCard'

function Albuns() {
  const { pathname } = useLocation();
  const arryPath = pathname.split('/');

  return (
    <div>
      <AlbumCard numAlbum={ arryPath[2].replaceAll('0','') } />
    </div>
  )
}

export default Albuns