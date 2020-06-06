/*
 * @Author: your name
 * @Date: 2020-05-24 00:16:20
 * @LastEditTime: 2020-06-06 13:38:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \OPReactViaGit\src\App.js
 */ 
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
