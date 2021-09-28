import React from "react";
import './app.css';
import Options from "./Options";


const Settings = (props) => {
  return (
    <div className="outer">
        <div className="components">
          <span className="component-span"> Settings </span>
          <Options handleMenuClick = {props.handleMenuClick}/>
        </div>
    </div>
  );
}

export default Settings;
