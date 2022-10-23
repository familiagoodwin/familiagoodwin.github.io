import React, { useEffect, useState } from 'react'
import guia from '../services/guiaFotos'

function Album({ index }) {
  const [ pagina ] = useState(0);

  useEffect(()=> {
    const btnNext = document.querySelector('.fa-circle-right');
    const btnPrev = document.querySelector('.fa-circle-left');
    
    if (btnNext) {
      btnNext.addEventListener('mousemove',()=>{btnNext.classList.add('fa-beat-fade')});
      btnNext.addEventListener('mouseout',()=>{btnNext.classList.remove('fa-beat-fade')});
      btnPrev.addEventListener('mousemove',()=>{btnPrev.classList.add('fa-beat-fade')});
      btnPrev.addEventListener('mouseout',()=>{btnPrev.classList.remove('fa-beat-fade')});
    }
  },[]);

  return (
    <section className='corpoAbum'>
      <div className='page num1'>
        <img className='imgFoto' src={guia[index - 1].paginas[pagina].url} alt={ `Pagina ${pagina}` } />
      </div>
      <div className='page num2'>
        <img className='imgFoto' src={guia[index - 1].paginas[pagina + 1].url} alt={ `Pagina ${pagina + 1}` } />
      </div>
      <i class="fa-regular fa-circle-left fa-4x iconeNav" />
      <i class="fa-regular fa-circle-right fa-4x iconeNav"></i>
    </section>
  )
}

export default Album