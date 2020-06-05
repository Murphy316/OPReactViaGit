import React, { Component } from "react";
import "./App.css";
import FetchLatestNews from "./components/FetchLatestNews";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <FetchLatestNews />
      </div>
    );
  }
}

export default App;
