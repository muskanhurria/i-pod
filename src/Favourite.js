import React from "react";
import './app.css';
import Options from "./Options";

const Favourite = (props) => {
  return (
    <div className="outer">
        <div className="components">
          <span className="component-span"> Favourites </span>
          <Options handleMenuClick = {props.handleMenuClick}/>
        </div>
    </div>
  );
}

export default Favourite;
