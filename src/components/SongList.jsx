import React from 'react';
import Song from './Song.jsx'

class SongList extends React.Component{
  render(){

    let songNodes = this.props.data.map((song, index) => {
      return <Song song={song} index={index + 1} key={index}/>
    })

    return(
        <div className="song-list">
        {songNodes}
        </div>
      )
  }
}

export default SongList;