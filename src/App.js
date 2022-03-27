import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

function App() {
  return (
    <BrowserRouter>
      <div className='page'>
        <Navbar/>
        <Routes>
          <Route exact path='/aboutme' element={<AboutMe/>}/>
          <Route exact path='/portfolio' element={<Portfolio/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/resume' element={<Resume/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
