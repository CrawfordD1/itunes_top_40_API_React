import React from 'react';
import SongList from '../components/SongList.jsx'

class SongContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=40/json"
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if(request.status === 200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        const entries = data.feed.entry;
        this.setState({
          data: entries
        });
      }
    });
    request.send();
  }

  render(){
    return(
      <div className="song-container">
      <SongList data={this.state.data}/>
      </div>
      )
  }
}

export default SongContainer;