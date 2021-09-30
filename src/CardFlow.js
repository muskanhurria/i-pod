import React from "react";
import './app.css';
import Options from "./Options";

//screen for cardflow
const CardFlow = (props) => {
  return (
    <div className="outer">
        <div className="components">
            <span className="component-span"> CardFlow </span>
            <Options handleMenuClick = {props.handleMenuClick}/>
        </div>
    </div>
  );
}

export default CardFlow;
