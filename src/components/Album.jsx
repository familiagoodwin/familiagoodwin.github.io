import React, { useEffect, useState } from 'react'
import guia from '../services/guiaFotos'

function Album({ index }) {
  const [ pagina, setPagina ] = useState(0);
  const [ nav , setNav ] = useState(0);
  const [ end, setEnd ] = useState(false);
  // const [ flip, setFlip ] = useState({ num1: true, num2: false });
  const album = guia[index - 1];

  // console.log(flip);
  // console.log(pagina);

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

  const navNext = (actual) => {
    const pagLeft = document.querySelector('.num1');
    const pagRigth = document.querySelector('.num2');

    if (actual % 2 === 0) {
      setNav((prev) => prev + 1);
      pagRigth.classList.remove('pageNext');
      pagLeft.classList.add('pageNext');
      pagRigth.style.zIndex = "1";
    } else {
      setPagina((prev) => prev + 2);
      setNav((prev) => prev + 1);
      pagLeft.classList.remove('pageNext');
      pagRigth.classList.add('pageNext');
      pagLeft.style.zIndex = "1"; 
    }
  }

  function navClick({ target }) {
    if (target.id === 'navNext' && nav + 1 < album.paginas.length - 1) {
      window.scrollTo(0, 70);
      setEnd(false)
      navNext(nav);
    } else {
      window.scrollTo(0, 0)
      setEnd(true);
    }
  }

  return (
    <section className='corpoAbum'>
      { (end) && (<p>Fim do Album</p>) }
      <div className='page num1'>
        <img className='imgFoto' src={album.paginas[nav].url} alt={ `Pagina ${pagina}` } />
      </div>
      <div className='page num2'>
        <img className='imgFoto' src={album.paginas[pagina + 1].url} alt={ `Pagina ${pagina + 1}` } />
      </div>
      <i 
        id='navPrev'
        onClick={ navClick }
        class="fa-regular fa-circle-left fa-4x iconeNav" 
      />
      <i 
        id='navNext'
        onClick={ navClick }
        class="fa-regular fa-circle-right fa-4x iconeNav" 
      />
    </section>
  )
}

export default Album