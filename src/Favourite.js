import React from "react";
import './app.css';
import Options from "./Options";

//favourite music's screen
const Favourite = (props) => {
  return (
    <div className="outer">
        <div className="components">
          <span className="component-span"> Favourites </span>
          <img className="component-image" style={{top: "40%", left:"70%"}} src="https://cdn-icons-png.flaticon.com/512/833/833472.png" />
          <Options handleMenuClick = {props.handleMenuClick}/>
        </div>
    </div>
  );
}

export default Favourite;
