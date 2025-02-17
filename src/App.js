// Filename - App.js

import React from "react";
import "./App.css";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

    
function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src= {require("./images/Awkward-4x.gif")} alt="logo"/>
                    </div>
                    <li>
                        <a href="#courses">WOW</a>
                    </li>
                    <li>
                        <a href="#tutorials">A</a>
                    </li>
                    <li>
                        <a href="#jobs">Cat</a>
                    </li>
                    <li>
                        <a href="#student">!</a>
                    </li>
                </ul>

                <div class="rightNav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        Search
                    </button>
                </div>
            </nav>
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
            </section>\
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    );
}

export default App;
