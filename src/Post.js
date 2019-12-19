import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: "",
      description: "",
      list: [],
      upVote: 0,
      downVote: 0
    };
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addItem() {
    const newPost = {
      id: Math.floor(Math.random() * (100000000 - 100) + 100),
      value: this.state.newPost.slice(),
      description: this.state.description.slice(),
      upVote: 0,
      downVote: 0
    };

    const list = [...this.state.list];

    list.push(newPost);

    this.setState({
      list,
      newPost: "",
      description: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  upVote(id) {
    const tempList = [...this.state.list];
    var index = tempList.findIndex(item => item.id == id);
    console.log(index);
    tempList[index].upVote += 1;
    this.setState({
      list: tempList
    });
  }

  downVote(id) {
    const tempList = [...this.state.list];
    var index = tempList.findIndex(item => item.id == id);
    console.log(index);
    tempList[index].downVote += 1;
    this.setState({
      list: tempList
    });
  }

  render() {
    return (
      <div>
        <div>
          <div class="form-container">
            <h2>Post </h2>
            <input
              class="input"
              type="text"
              placeholder="Post Title"
              value={this.state.newPost}
              onChange={e => this.updateInput("newPost", e.target.value)}
            />

            <textarea
              class="textarea input"
              type="text"
              placeholder="Post Description"
              value={this.state.description}
              onChange={e => this.updateInput("description", e.target.value)}
            />

            <button
              class="add"
              onClick={() => this.addItem()}
              disabled={!this.state.newPost.length}
            >
              <i>
                <b> Add </b>
              </i>
            </button>
          </div>
          <div class="listItem">
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id} class="list-li">
                    <div class="title">{item.value}</div>
                    <div class="btn">
                      <button
                        id="cross"
                        onClick={() => this.deleteItem(item.id)}
                      >
                        <i> x </i>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr />
        <div class="container">
          <h2>Vote </h2>
          {this.state.list.map(item => {
            return (
              <div class="card">
                <div key={item.id}>
                  <div class="title">{item.value}</div>
                  <div class="description">{item.description}</div>

                  <div class="btn-container">
                    <button id="up" onClick={() => this.upVote(item.id)}>
                      <i> UpVote {item.upVote}</i>
                    </button>

                    <button id="down" onClick={() => this.downVote(item.id)}>
                      <i> DownVote {item.downVote}</i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Post;
