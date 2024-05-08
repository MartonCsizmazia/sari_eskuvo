// App.js
import React from 'react';
import MenuBar from './MenuBar';
import './App.css';
import backgroundImage from './pictures/IMG_3224-min.JPG';
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
                            <span className="handwriting">Sári & Peti</span>
                            <br/>
                            <br/>
                            <span className="generic-text">Szeretettel hívunk meg Titeket, hogy együtt ünnepeljük esküvőnk napját.</span>
                        </div>
                        <img className="decor2" src={decorImage2} alt="Decor Image 2"/>
                    </div>
                </div>
            </div>
            <div id="datum">
                <div className="segment-title">
                    Dátum
                    <br/>
                    <CountdownTimer/> {/* Place the CountdownTimer component here */}
                </div>
            </div>
            <div id="helyszin">
                <div className="segment-title">Helyszín</div>
            </div>
            <div id="program">
                <div className="segment-title">Program</div>
            </div>
            {/* Add more sections as needed */}
        </div>
    );
};

export default App;