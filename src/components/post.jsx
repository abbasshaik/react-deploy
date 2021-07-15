import React, { Component } from "react";
import PostDisplay from "./postDisplay";
class Post extends Component {
  state = {
    context: [],
    currentDateTime: Date().toLocaleString(),
  };
  getPostContext = () => {
    const context = document.getElementById("postArea").value;
    this.setState({ context: this.state.context.concat(context) });
    this.setState({ currentDateTime: Date().toLocaleString() });
    console.log(context);
  };

  handleDelete = (postId) => {
    const context = this.state.context.filter((c) => c !== postId);
    this.setState(context);
  };
  render() {
    return (
      <React.Fragment>
        <div className="form-outline">
          <label className="form-label">Post Anything!</label>
          <textarea
            style={{ width: 683 }}
            className="form-control"
            id="postArea"
            rows="4"
            placeholder="Write anything!"
          ></textarea>
          <center>
            <button
              onClick={this.getPostContext}
              className="btn-primary btn-sm m-2"
            >
              Post
            </button>
          </center>
        </div>
        <div id="display">
          {this.state.context.map((context) => (
            <PostDisplay
              context={context}
              key={context.key}
              currentDateTime={this.state.currentDateTime}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Post;
