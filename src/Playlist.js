import React from "react";
import './app.css';
import Options from "./Options";

const Playlist = (props) => {
  return (
    <div className="outer">
        <div className="components">
          <span className="component-span"> My Playlist </span>
          <Options handleMenuClick = {props.handleMenuClick}/>
        </div>
    </div>
  );
}

export default Playlist;
