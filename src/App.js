// App.js
import React from 'react';
import MenuBar from './MenuBar';
import './App.css';
import backgroundImage from './pictures/IMG_3224-min.JPG';
import backgroundImage2 from './pictures/DSC06939-min.JPG';
import decorImage1 from './pictures/Nevtelen-terv-17.png';
import decorImage2 from './pictures/Nevtelen-terv-18.png';
import CountdownTimer from "./CountdownTimer";
import "@fontsource/great-vibes"

const App = () => {

    return (
        <div className="App">
            <MenuBar/>
            <div id="kezdolap">
                <div id="kezdolap-content" style={{backgroundImage: `url(${backgroundImage})`}}>
                    <div id="kezdolap-content-text">
                        {/*<div className="segment-title">Kezdőlap</div>*/}
                        <img className="decor1" src={decorImage1} alt="Decor Image 1"/>
                        <div>
                            <div className="handwriting">Sári & Peti</div>
                            <span className="generic-text">Szeretettel hívunk meg Titeket, hogy együtt ünnepeljük esküvőnk napját.</span>
                            <div id="datum"></div>
                        </div>
                        {/*<img className="decor2" src={decorImage2} alt="Decor Image 2"/>*/}
                    </div>
                </div>
            </div>

            <div id="datum-outer">
                <div className="segment-title handwriting" style={{color: "black"}}>
                    Dátum
                </div>
                <div id="datum-wrapper" style={{backgroundImage: `url(${backgroundImage2})`}}>
                    <div className="datum-content">
                        <div className="date-text">
                            <div className="date-generic">VEGYÉL RÉSZT A NAGY NAPON</div>
                            <div className="line-container">
                                <div className="horizontal-line"></div>
                                <div className="actual-date"> 2024. Október 5.</div>
                                <div className="horizontal-line"></div>
                            </div>

                        </div>
                        <CountdownTimer/> {/* Place the CountdownTimer component here */}
                        <div id="helyszin"></div>
                    </div>
                </div>

            </div>


            <div id="helyszin-outer">
                <div className="segment-title handwriting">Helyszín</div>
            </div>


            <div id="program">
                <div className="segment-title handwriting">Fontos tudnivalók</div>
            </div>
            {/* Add more sections as needed */}
        </div>
    );
};

export default App;