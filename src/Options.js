import React from "react";
import './app.css';


const Options = (props) => {
  return (
    <div className="options" onClick={props.handleZesture}>
        <button className="btn" id="menu" onClick={props.handleMenuClick}>Menu</button>
        <button className="btn" id="back"> <img className="images" src="https://cdn-icons-png.flaticon.com/512/2/2147.png"/> </button>
        <button className="btn" id="next"> <img className="images" src="https://cdn-icons-png.flaticon.com/512/1/1371.png"/> </button>
        <button className="btn" id="play"> <img className="images" src="https://cdn-icons-png.flaticon.com/512/27/27223.png"/> </button>
        <div className="circle">
            <button className="circle" id="center-btn" onClick={ (e) => props.handleClick(e) }></button>
        </div>
    </div>
  );
}

export default Options;
