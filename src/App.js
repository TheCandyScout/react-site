// Filename - App.js

import React from "react";
import "./App.css";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { NavLink, Routes, Route } from 'react-router-dom';

const App = () => (
    <div className='app'>
      <Navigation />
      <Main />
    </div>
  );
  const Navigation = () => (
    <nav>
        <div class="logo">
            <NavLink to='/'>
                <img src= {require("./images/Awkward-4x.gif")} alt="logo"/>
            </NavLink>
        </div>
        <nav class="navbar background">
            
            <ul class="nav-list">
                <hr class="ends"/> 
                <li><NavLink className={({isActive}) => (isActive ? "current" : null)} to='/blog'>Blog</NavLink></li>
                <hr class="solid"/> 
                <li><NavLink className={({isActive}) => (isActive ? "current" : null)} to='/filmScanning'>Film Scanning</NavLink></li>
                <hr class="solid"/> 
                <li><NavLink className={({isActive}) => (isActive ? "current" : null)} to='/about'>About</NavLink></li>
                <hr class="solid"/> 
                <li><NavLink className={({isActive}) => (isActive ? "current" : null)} to='/contact'>Contact</NavLink></li>
                <hr class="ends"/> 
            </ul>
            
        </nav>
    </nav>
  );

  const Home = () => (
    <div>
        <section class="section">
            <div class="box-main">
                <div class="firstHalf">
                    <h1 class="text-big">
                        LMAO
                    </h1>
                    <p class="text-small">
                        HAHA part 1
                    </p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="box-main">
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        LMAO 2
                    </h1>
                    <p class="text-small">
                        HAHA part 2
                    </p>
                </div>
            </div>
        </section>
        <footer className="footer">
            <p className="text-footer">
                Copyright ©-All rights are reserved
            </p>
        </footer>
    </div>
  );
  const Blog = () => (
    <div>
        <section class="section">
            <div class="box-main">
                <div class="firstHalf">
                    <h1 class="text-big">
                        blog
                    </h1>
                    <p class="text-small">
                        Lorem Ipsom
                    </p>
                </div>
            </div>
        </section>
    </div>
  );

  const FilmScanning = () => (
    <div>
        
        <div class="container">
             <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={require("./images/Layer 0.png")}  alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={require("./images/Layer 1.png")}  alt="Image two" />}
            />
        </div>
        <section class="section">
            <div class="box-main">
                <div class="firstHalf">
                    <h1 class="text-big">
                        LMAO
                    </h1>
                    <p class="text-small">
                        HAHA part 1
                    </p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="box-main">
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        LMAO 2
                    </h1>
                    <p class="text-small">
                        HAHA part 2
                    </p>
                </div>
            </div>
        </section>
        <footer className="footer">
            <p className="text-footer">
                Copyright ©-All rights are reserved
            </p>
        </footer>
    </div>
  );

  const About = () => (
    <div>
        <section class="section">
            <div class="box-main">
                <div class="firstHalf">
                    <h1 class="text-big">
                        About Me
                    </h1>
                    <p class="text-small">
                        Lorem Ipsom
                    </p>
                </div>
            </div>
        </section>
    </div>
    
  );

  const Contact = () => (
    <div>
        <section class="section">
            <div class="box-main">
                <div class="firstHalf">
                    <h1 class="text-big">
                        Contact
                    </h1>
                    <p class="text-small">
                        Lorem Ipsom
                    </p>
                </div>
            </div>
        </section>
    </div>
  );



  const Main = () => (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/blog' element={<Blog />}></Route>
      <Route exact path='/filmScanning' element={<FilmScanning />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/contact' element={<Contact />}></Route>
    </Routes>
  );



 

export default App;
