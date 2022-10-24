import React, { useEffect, useState } from 'react'
import guia from '../services/guiaFotos'

function Album({ index }) {
  const [ pagina, setPagina ] = useState(0);
  const [ flip, setFlip ] = useState({ num1: true, num2: false });
  const album = guia[index - 1];

  console.log(flip);
  console.log(pagina);

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

    console.log(actual - 1 % 2);
    if (actual - 1 % 2 === 0) {
      pagLeft.style.zIndex = "1"; 
      pagRigth.style.zIndex = "0";
      setPagina((prev) => prev + 1);
      setFlip((prev) => ({ ...prev, num1: false}));
      pagRigth.classList.remove('pageNext');
      pagLeft.classList.add('pageNext');
      setFlip((prev) => ({ ...prev, num2: true }));
    } else {
      pagLeft.style.zIndex = "0"; 
      pagRigth.style.zIndex = "1";
      setPagina((prev) => prev + 1);
      setFlip((prev) => ({ ...prev, num2: false }));
      pagLeft.classList.remove('pageNext');
      pagRigth.classList.add('pageNext');
      setFlip((prev) => ({ ...prev, num1: true }));
    }

    if (actual < album.paginas.length - 1) {
      console.log('teste');

    }
  }

  function navClick({ target }) {
    // console.log(album.paginas.length);
    if (target.id === 'navNext' && pagina + 1 < album.paginas.length - 1) {
      navNext(pagina + 1);
    }
  }

  return (
    <section className='corpoAbum'>
      {/* <div className='page num1'>
        <img className='imgFoto' src={album.paginas[pagina].url} alt={ `Pagina ${pagina}` } />
      </div> */}
      { (flip.num1) ? (
          <div className='page num1'>
            <img className='imgFoto' src={album.paginas[pagina].url} alt={ `PaginaA ${pagina}` } />
          </div>
        ) : (
          <div className='page num1'>
            <img className='imgFoto' src={album.paginas[pagina + 1].url} alt={ `PaginaA ${pagina + 1}` } />
          </div>
        )
      }
      { (flip.num2) ? (
          <div className='page num2'>
            <img className='imgFoto' src={album.paginas[pagina].url} alt={ `PaginaB ${pagina}` } />
          </div>
        ) : (
          <div className='page num2'>
            <img className='imgFoto' src={album.paginas[pagina + 1].url} alt={ `PaginaB ${pagina + 1}` } />
          </div>
        )
      }
      
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