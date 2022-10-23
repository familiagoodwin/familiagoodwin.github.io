import React from 'react'
import AlbumCard from './AlbumCard'

function MenuAlbuns() {
  const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
  return (
    <section className='menuAlbuns'>
      {array.map((_item, index)=><AlbumCard key={ index } numAlbum={ index + 1 } classeMain='cardAlbum' classTitle='titleCardAlbum' />)}
    </section>
  )
}

export default MenuAlbuns