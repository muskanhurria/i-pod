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
            <button className={`screen-btn option1 ${props.isAlbum ? 'active-option' : '' }`} >Albums</button>
            <button className={`screen-btn option2 ${props.isArtist ? 'active-option' : '' }`} >Artist</button>
            <button className={`screen-btn option3 ${props.isFavourite ? 'active-option' : '' }`} >Favourites</button>
            <button className={`screen-btn option4 ${props.isPlaylist ? 'active-option' : '' }`}>My Playlist</button>
            
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
