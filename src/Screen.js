import React from "react";
import './app.css';
import Options from "./Options";


const Screen = (props) => {
    // console.log('isCardFlow: ',props.isCardFlow);
    // console.log('isMusic: ',props.isMusic);
    // console.log('isGame: ',props.isGame);
    // console.log('isSetting: ',props.isSetting);

    const handleClick = (e) =>{
        props.handleZesture(e);
        props.SelectOption();
    }
    // console.log('props.isCardFlow', props.isCardFlow);
    // console.log('props.isMusic', props.isMusic);
    // console.log('props.isSetting', props.isSetting);
    // console.log('props.isGame', props.isGame);
    return (
        <div className="outer">
            <div className="screen"> 
                <img className="images" id="background" src="https://wallpaper.dog/large/10928464.jpg" alt="wallpaper" />
                <div className="screen-options">
                    <span className="ipod">iPod</span>
                    <button className={`screen-btn option1 ${props.isCardFlow ? 'active-option' : '' }`} >CardFlow</button>
                    <button className={`screen-btn option2 ${props.isMusic ? 'active-option' : '' }`} >Music</button>
                    <button className={`screen-btn option3 ${props.isGame ? 'active-option' : '' }`} >Games</button>
                    <button className={`screen-btn option4 ${props.isSetting ? 'active-option' : '' }`}>Settings</button>
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
