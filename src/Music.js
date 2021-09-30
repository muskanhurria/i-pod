import React from "react";
import './app.css';
import AddMusic from "./addMusic";
import ZingTouch from "zingtouch";
import Playlist from "./Playlist";
import Favourite from "./Favourite";
import Album from "./Album";
import Artist from "./Artist";
import App from "./App";

class Music extends React.Component {
  constructor(){
    super();
    this.state = {
      isAlbum: false,
      isArtist: false,
      isFavourite: false,
      isPlaylist: false,
      isMusicComponent: false,
    }
  }

  

  handleZesture = (e) => {
    const options = this;
    var distance = 0;
    var region = new ZingTouch.Region(e.target);
    region.bind(e.target, "rotate", function (e) {
    console.log('target: ', e.target);
      console.log("last distancce details", e.detail.distanceFromLast);
      console.log("rotate details", e.detail.distanceFromOrigin);
      distance = e.detail.distanceFromOrigin;

      if (distance > 0 && distance < 90) {
        console.log('inside if');
        options.setState({
          isAlbum: true,
          isFavourite: false,
          isArtist: false,
          isPlaylist: false,
          isAddMusic: false
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
    console.log("round");
  };

  SelectOption = () => {
    this.setState({isMusicComponent: true});
  }

  handleMenuClick = () => {
    this.setState({isMusicComponent: false});
    // this.setState({isAddMusic: true});
  }

  handleMainMenuClick = () => {
    // this.state({isAddMusic : false});
  }

  render(){
    const { handleMenuClick } = this.props;
    const { isAlbum, isArtist, isPlaylist, isFavourite, isMusicComponent,isAddMusic } = this.state;
    return (
      <div className="out">
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
        ): //isAddMusic ? (
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
        // ) : ( <App />)
      }
      </div>
    );
  }
}

export default Music;
