import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import guia from '../services/guiaFotos'

function Album({ index }) {
  const [ pagina, setPagina ] = useState(0);
  // const { pathname } = useLocation();
  // const arrayPath = pathname.split('/');

  // console.log(guia[index - 1].paginas[pagina].url);

  return (
    <section className='corpoAbum'>
      <div className='page'>
        <img src={guia[index - 1].paginas[pagina].url} alt="Pagina 0001" />
      </div>
      <div className='page'></div>
    </section>
  )
}

export default Album