import React from "react";
import Screen from "./Screen";
import Settings from "./Settings";
import Music from "./Music";
import Games from "./Games";
import CardFlow from "./CardFlow";
import ZingTouch from "zingtouch";

class App extends React.Component {
  constructor(){
    super();
    //state created to check what has to be displayed on screen
    this.state = {
      isCardFlow: false,
      isMusic: false,
      isSetting: false,
      isGame: false,
      isComponent: false
    }
  }

  //to create a rotating cursor action
  handleZesture = (e) => {
    const options = this;
    var distance = 0;
    var region = new ZingTouch.Region(e.target);
    region.bind(e.target, "rotate", function (e) {
    console.log('target: ', e.target);
      console.log("last distancce details", e.detail.distanceFromLast);
      console.log("rotate details", e.detail.distanceFromOrigin);
      distance = e.detail.distanceFromOrigin;

      //to change the option selected with the rotating cursor- clockwise
      if (distance > 0 && distance < 90) {
        console.log('inside if');
        options.setState({
          isCardFlow: true,
          isMusic: false,
          isSetting: false,
          isGame:false
        });
      }

      else if (distance > 90 && distance < 180) {
        console.log('inside if');
        options.setState({
          isMusic: true,
          isCardFlow: false,
          isGame: false,
          isSetting: false
        });
      }

      else if (distance > 180 && distance < 270) {
        options.setState({
          isMusic: false,
          isGame: true,
          isSetting: false,
          isCardFlow: false
        });
      }

      else if (distance > 270 && distance < 360) {
        options.setState({
          isGame: false,
          isSetting: true,
          isCardFlow: false,
          isMusic: false
        });
      }

      //rotation in anticlockwise direction
      if (distance > -90 && distance < 0) {
        options.setState({
          isCardFlow: false,
          isSetting: true,
          isGame: false,
          isMusic: false
        });
      } else if (distance > -180 && distance < -90) {
        options.setState({
          isGame: true,
          isSetting: false,
          isMusic: false,
          isCardFlow: false,
        });
      } else if (distance > -270 && distance < -180) {
        options.setState({
          isSetting: false,
          iCardFlow: false,
          isMusic: true,
          isGame: false
        });
      } else if (distance > -360 && distance < -270) {
        options.setState({
          isSetting: false,
          isCardFlow: true,
          isMusic: false,
          isGame: false
        });
      }
    });
  };

  //center button click handle
  SelectOption = () => {
    this.setState({isComponent: true});
  }

  //menu button click
  handleMenuClick = () => {
    this.setState({isComponent: false});
    console.log("handleMenuClick");
  }

  render(){
    const { isGame, isCardFlow, isComponent, isMusic, isSetting } = this.state;
    console.log('iscomponent: ', isComponent);
    return (
      <div className="App">
        {/* checking boolean variables to display components on screen */}
      {
        isComponent ?(
          isSetting ? (
            <Settings handleMenuClick = {this.handleMenuClick}/>
          ): isGame ? (
            <Games handleMenuClick = {this.handleMenuClick}/>
          ):isMusic ?(
            <Music handleMenuClick = {this.handleMenuClick}/>
          ): (
            <CardFlow handleMenuClick = {this.handleMenuClick}/>
          )
        ): (
        <Screen 
          isCardFlow = {isCardFlow}
          isComponent = {isComponent}
          isMusic = {isMusic}
          isSetting = {isSetting}
          isGame = {isGame}
          handleZesture = {this.handleZesture}
          handleMenuClick = {this.handleMenuClick}
          SelectOption = {this.SelectOption}
        /> 
        )
      }
    </div>
    );
  }
}

export default App;
