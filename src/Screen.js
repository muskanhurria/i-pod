import React from "react";
import './app.css';
import Options from "./Options";


const Screen = (props) => {
    console.log('isCardFlow: ',props.isCardFlow);
    console.log('isMusic: ',props.isMusic);
    console.log('isGame: ',props.isGame);
    console.log('isSetting: ',props.isSetting);

    const handleClick = (e) =>{
        props.handleZesture(e);
        props.SelectOption();
    }
    return (
        <div className="outer">
            <div className="screen"> 
                <img className="images" id="background" src="https://wallpaper.dog/large/10928464.jpg" />
                <div className="screen-options">
                    <span className="ipod">iPod</span>
                    <button className={`screen-btn ${props.isCardFlow} ? 'active-option' : '' `} id="card">CardFlow</button>
                    <button className={`screen-btn ${props.isMusic} ? 'active-option' : '' `} id="music">Music</button>
                    <button className={`screen-btn ${props.isGame} ? 'active-option' : '' `} id="games">Games</button>
                    <button className={`screen-btn ${props.isSetting} ? 'active-option' : '' `} id="settings">Settings</button>
                </div>
                <Options 
                    handleZesture = {props.handleZesture}
                    handleMenuClick = {props.handleMenuClick}
                    SelectOption = {props.SelectOption}
                    handleClick = { handleClick }
                />
            </div>
        </div>
    );
}

export default Screen;
