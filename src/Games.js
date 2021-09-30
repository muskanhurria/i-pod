import React from "react";
import './app.css';
import Options from "./Options";

const games = (props) => {
  return (
    <div className="outer">
        <div className="components">
          <span className="component-span"> Games </span>
          <img src="https://cdn-icons-png.flaticon.com/512/808/808439.png" style={{left: "55%", top: "35%"}} className="component-image" />
          <Options handleMenuClick = {props.handleMenuClick}/>
        </div>
    </div>
  );
}

export default games;
