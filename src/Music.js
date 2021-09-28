import React from "react";
import './app.css';
import Options from "./Options";


const Music = (props) => {
  return (
    <div className="outer">
        <div className="components">
          <span className="component-span"> Music </span>
          <Options handleMenuClick = {props.handleMenuClick}/>
        </div>
    </div>
  );
}

export default Music;
