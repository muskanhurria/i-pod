import React from "react";
import './Main.css';

class Main extends React.Component {
    render() {
        return(
            <div className="main">
                <div className="outer">
                    <div className="screen"> 
                        <img className="images" id="background" src="https://wallpaper.dog/large/10928464.jpg" />
                        <div className="screen-options">
                            <span className="ipod">iPod</span>
                            <button className="screen-btn" id="music">Music</button>
                            <button className="screen-btn" id="games">Games</button>
                            <button className="screen-btn" id="settings">Settings</button>
                        </div>

                        <div className="options">
                            <button className="btn" id="menu">Menu</button>
                            <button className="btn" id="back"> <img className="images" src="https://cdn-icons-png.flaticon.com/512/2/2147.png"/> </button>
                            <button className="btn" id="next"> <img className="images" src="https://cdn-icons-png.flaticon.com/512/1/1371.png"/> </button>
                            <button className="btn" id="play"> <img className="images" src="https://cdn-icons-png.flaticon.com/512/27/27223.png"/> </button>
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main; 