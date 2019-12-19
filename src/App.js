import React, { Component } from "react";
import Post from "./Post";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <div class="title">Voting App</div>
        </header>
        <Post />
      </div>
    );
  }
}

export default App;
