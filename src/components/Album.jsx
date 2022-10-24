import React, { useContext, useEffect } from 'react'
import GlobalVarsContext from '../contexts/context/GlobalVars';
import guia from '../services/guiaFotos'

function Album({ index }) {
  const { navItens, setNavItens } =useContext(GlobalVarsContext);
  const { pagina, nav, end } = navItens;
  const album = guia[index - 1];
  console.log(navItens);


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
      setNavItens((prev) => ({ ...prev, nav: prev.nav + 1 }));
      pagRigth.classList.remove('pageNext');
      pagLeft.classList.add('pageNext');
      pagRigth.style.zIndex = "1";
    } else {
      setNavItens((prev) => ({ ...prev, pagina: prev.pagina + 2 }));
      setNavItens((prev) => ({ ...prev, nav: prev.nav + 1 }));
      pagLeft.classList.remove('pageNext');
      pagRigth.classList.add('pageNext');
      pagLeft.style.zIndex = "1"; 
    }
  }

  function navClick({ target }) {
    if (target.id === 'navNext' && nav + 1 < album.paginas.length - 1) {
      window.scrollTo(0, 70);
      setNavItens((prev) => ({ ...prev, end: false }));
      navNext(nav);
    } else {
      window.scrollTo(0, 0)
      setNavItens((prev) => ({ ...prev, end: true }));
    }
  }

  const zeraAlbum = () => {
    setNavItens({ pagina: 0, nav: 0, end: false });
  }

  return (
    <section className='corpoAbum'>
      { (end) && (<p>Fim do Album</p>) }
      <div>
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
      </div>
      {/* { (nav > album.paginas.length - 1) ? zeraAlbum() : (
        <div>
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
        </div>
      ) } */}
    </section>
  )
}

export default Album