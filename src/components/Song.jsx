import React from 'react';

class Song extends React.Component{
  render(){

    let songUrl = this.props.song['im:image'];
    let url = songUrl[2].label
    return(
      <div className="song-item">
        <h1>{this.props.index}</h1>
        <h3>{this.props.song['im:name'].label}</h3>
        <img src={url} alt="artwork"/>
        </div>
      )
  }
}

export default Song;