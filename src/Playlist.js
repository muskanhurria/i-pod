import React from "react";
import './app.css';
import Options from "./Options";

//playlist screen created
const Playlist = (props) => {
  return (
    <div className="outer">
        <div className="components">
          <span className="component-span"> My Playlist </span>
          <img className="component-image"  style={{left: "73%", top: "38%"}} src="https://cdn-icons-png.flaticon.com/512/907/907786.png" />
          <Options handleMenuClick = {props.handleMenuClick}/>
        </div>
    </div>
  );
}

export default Playlist;
