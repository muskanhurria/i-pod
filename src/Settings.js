import React from "react";
import './app.css';
import Options from "./Options";

//settings screen
const Settings = (props) => {
  return (
    <div className="outer">
        <div className="components">
          <span className="component-span"> Settings </span>
          <img src="https://cdn-icons-png.flaticon.com/512/3132/3132084.png" style={{left: "55%", top: "38%"}} className="component-image" />
          <Options handleMenuClick = {props.handleMenuClick}/>
        </div>
    </div>
  );
}

export default Settings;
