import React from "react";
import './app.css';
import Options from "./Options";

//screen for artist option
const Artist = (props) => {
  return (
    <div className="outer">
        <div className="components">
          <span className="component-span"> Artists </span>
          <img className="component-image"  style={{left: "50%", top: "38%"}} src="https://img-premium.flaticon.com/png/512/4140/premium/4140037.png?token=exp=1632993020~hmac=db09d9036661b8e31cebadb91594d205" />
          <Options handleMenuClick = {props.handleMenuClick}/>
        </div>
    </div>
  );
}

export default Artist;
