import React from 'react'
import guia from '../services/guiaFotos';
import AlbumCard from './AlbumCard'

function MenuAlbuns() {
  return (
    <section className='menuAlbuns'>
      {guia.map((_item, index)=><AlbumCard key={ index } numAlbum={ index + 1 } classeMain='cardAlbum' classTitle='titleCardAlbum' marginTop={'10px'} />)}
    </section>
  )
}

export default MenuAlbuns