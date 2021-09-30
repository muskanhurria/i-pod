import React from "react";
import './app.css';
import AddMusic from "./addMusic";
import ZingTouch from "zingtouch";
import Playlist from "./Playlist";
import Favourite from "./Favourite";
import Album from "./Album";
import Artist from "./Artist";

class Music extends React.Component {
  constructor(){
    super();
    //state created to check what has to be displayed on screen
    this.state = {
      isAlbum: false,
      isArtist: false,
      isFavourite: false,
      isPlaylist: false,
      isMusicComponent: false,
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
          isAlbum: true,
          isFavourite: false,
          isArtist: false,
          isPlaylist: false
        });
      }

      else if (distance > 90 && distance < 180) {
        console.log('inside if');
        options.setState({
          isArtist: true,
          isFavourite: false,
          isPlaylist: false,
          isAlbum: false
        });
      }

      else if (distance > 180 && distance < 270) {
        options.setState({
          isAlbum: false,
          isFavourite: true,
          isArtist: false,
          isPlaylist: false
        });
      }

      else if (distance > 270 && distance < 360) {
        options.setState({
          isAlbum: false,
          isPlaylist: true,
          isArtist: false,
          isFavourite: false
        });
      }

      //rotation in anticlockwise direction
      if (distance > -90 && distance < 0) {
        options.setState({
          isAlbum: false,
          isPlaylist: true,
          isArtist: false,
          isFavourite: false
        });
      } else if (distance > -180 && distance < -90) {
        options.setState({
          isFavourite: true,
          isAlbum: false,
          isArtist: false,
          isPlaylist: false,
        });
      } else if (distance > -270 && distance < -180) {
        options.setState({
          isPlaylist: false,
          isAlbum: false,
          isArtist: true,
          isFavourite: false
        });
      } else if (distance > -360 && distance < -270) {
        options.setState({
          isPlaylist: false,
          isAlbum: true,
          isArtist: false,
          isFavourite: false
        });
      }
    });
  };

  //center button click handle
  SelectOption = () => {
    this.setState({isMusicComponent: true});
  }

  //menu button click
  handleMenuClick = () => {
    this.setState({isMusicComponent: false});
  }

  render(){
    const { handleMenuClick } = this.props;
    const { isAlbum, isArtist, isPlaylist, isFavourite, isMusicComponent } = this.state;
    return (
      <div className="out">
        {/* checking boolean variables to display components on screen */}
      {
        isMusicComponent ?(
        isPlaylist ? (
          <Playlist handleMenuClick = {this.handleMenuClick}/>
        ): isFavourite ? (
          <Favourite handleMenuClick = {this.handleMenuClick}/>
        ):isArtist ?(
          <Artist handleMenuClick = {this.handleMenuClick}/>
        ): (
          <Album handleMenuClick = {this.handleMenuClick}/>
        )
        ): 
        <AddMusic 
          handleZesture = {this.handleZesture}
          handleMenuClick = { handleMenuClick }
          SelectOption = {this.SelectOption}
          isArtist = {isArtist}
          isAlbum = {isAlbum}
          isFavourite = {isFavourite}
          isPlaylist = {isPlaylist}
          isMusicComponent = {isMusicComponent}
        />
      }
      </div>
    );
  }
}

export default Music;
