import React, { Component } from 'react';
import './App.css';
import ChartContainer from './containers/SongContainer.jsx';
import Header from "./components/Header.jsx"

class App extends Component {
  render() {
    return (
      <div className="charts">
        <Header text="UK Top 40" />
        <ChartContainer />
      </div>
    );
  }
}

export default App;

