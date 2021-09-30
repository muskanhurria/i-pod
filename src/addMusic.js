import React from "react";
import './app.css';
import Options from "./Options";


const AddMusic = (props) => {
  const handleClick = (e) =>{
    props.handleZesture(e);
    props.SelectOption();
  }

  return (
    <div className="outer">
        <div className="components">
            <span className="ipod">Music</span>
            <img src="https://img-premium.flaticon.com/png/512/2995/premium/2995101.png?token=exp=1632993993~hmac=1d7b7f020f6dc4ebc598fcb9929511a2" className="component-image" style={{left: "70%", top: "10%"}} />
            {/* all the menu options - checked if respective boolean is true to highlight each option */}
            <button className={`screen-btn option1 ${props.isAlbum ? 'active-option' : '' }`} >Albums</button>
            <button className={`screen-btn option2 ${props.isArtist ? 'active-option' : '' }`} >Artist</button>
            <button className={`screen-btn option3 ${props.isFavourite ? 'active-option' : '' }`} >Favourites</button>
            <button className={`screen-btn option4 ${props.isPlaylist ? 'active-option' : '' }`}>My Playlist</button>
            
            {/* the wheel of control with menu button */}
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

export default AddMusic;
