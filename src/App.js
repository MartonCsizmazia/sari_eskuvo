// App.js
import React from 'react';
import MenuBar from './MenuBar';
import './App.css';
import backgroundImage from './pictures/IMG_3224-min.JPG';
import backgroundImage2 from './pictures/DSC06939-min.JPG';
import backgroundImage3 from './pictures/IMG_3209-min.JPG';
import decorImage1 from './pictures/Nevtelen-terv-17.png';
import decorImage2 from './pictures/Nevtelen-terv-18.png';
import decorImage3 from './pictures/9.png';
import decorImage4 from './pictures/Nevtelen-terv-25.png';
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
                            <span className="generic-text">Szeretettel hívunk meg Titeket, hogy együtt ünnepeljük az esküvőnk napját.</span>
                        </div>
                        {/*<img className="decor2" src={decorImage2} alt="Decor Image 2"/>*/}
                    </div>
                </div>
            </div>

            <div id="datum"></div>
            <img className="decor3" src={decorImage3} alt="Decor Image 3"/>
            <div id="datum-outer">
                <div className="segment-title handwriting" style={{color: "black"}}>
                    Dátum
                </div>
                {/*<div id="datum-wrapper" style={{backgroundImage: `url(${backgroundImage2})`}}>*/}
                <div id="datum-wrapper">
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
                    </div>
                </div>
            </div>
            <img className="decor4" src={decorImage3} alt="Decor Image 4"/>

            <div className="datum-utani-kep" style={{backgroundImage: `url(${backgroundImage2})`}}>
            </div>

            <div id="helyszin"></div>
            <img className="decor5" src={decorImage4} alt="Decor Image 5"/>
            <div id="helyszin-outer">
                <div className="segment-title handwriting">Helyszín & tudnivalók</div>
                <div></div>
            </div>
            <img className="decor6" src={decorImage4} alt="Decor Image 6"/>


            {/*<div className="datum-utani-kep" style={{backgroundImage: `url(${backgroundImage3})`}}>*/}
            {/*</div>*/}
            {/*<div id="program">*/}
            {/*    <div className="segment-title handwriting">Fontos tudnivalók</div>*/}
            {/*</div>*/}
            {/* Add more sections as needed */}
        </div>
    );
};

export default App;