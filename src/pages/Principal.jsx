import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainMenu from '../components/MainMenu';
import Albuns from './Albuns';
import TimeLine from './TimeLine';

function Principal() {
  return (
    <main>
      <BrowserRouter>
        <MainMenu />
        <Routes>
          {/* <Route exact path="/" component={ <Albuns /> } /> */}
          {/* <Route exact path="/albuns" element={ <Albuns /> } /> */}
          <Route exact path="/albuns/:id" element={ <Albuns /> } />
          <Route exact path="/timeline" element={ <TimeLine /> } />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default Principal