import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainMenu from '../components/MainMenu';
import Albuns from './Albuns';

function Principal() {
  return (
    <main>
      <BrowserRouter>
        <MainMenu />
        <Routes>
          {/* <Route exact path="/" component={ <Albuns /> } /> */}
          {/* <Route exact path="/albuns" element={ <Albuns /> } /> */}
          <Route exact path="/albuns/:id" element={ <Albuns /> } />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default Principal