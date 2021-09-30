import React from "react";
import './app.css';
import Options from "./Options";

const Artist = (props) => {
  return (
    <div className="outer">
        <div className="components">
          <span className="component-span"> Artists </span>
          <Options handleMenuClick = {props.handleMenuClick}/>
        </div>
    </div>
  );
}

export default Artist;
