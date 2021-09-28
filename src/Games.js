import React from "react";
import './app.css';
import Options from "./Options";

const games = (props) => {
  return (
    <div className="outer">
        <div className="components">
          <span className="component-span"> Games </span>
          <Options handleMenuClick = {props.handleMenuClick}/>
        </div>
    </div>
  );
}

export default games;
