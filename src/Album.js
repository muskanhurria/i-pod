import React from "react";
import './app.css';
import Options from "./Options";

//album screen 
const Album = (props) => {
  return (
    <div className="outer">
        <div className="components">
          <span className="component-span"> Albums </span>
          <img className="component-image"  style={{left: "55%", top: "38%"}} src="https://img-premium.flaticon.com/png/512/1950/premium/1950057.png?token=exp=1632993637~hmac=c3547dd4a5159c2741a95ee9cc784d6c" />
          <Options handleMenuClick = {props.handleMenuClick}/>
        </div>
    </div>
  );
}

export default Album;
