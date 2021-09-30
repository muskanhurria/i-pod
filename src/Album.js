import React from "react";
import './app.css';
import Options from "./Options";

const Album = (props) => {
  return (
    <div className="outer">
        <div className="components">
          <span className="component-span"> Albums </span>
          <Options handleMenuClick = {props.handleMenuClick}/>
        </div>
    </div>
  );
}

export default Album;
