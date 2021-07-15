import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import SimpleModal from "./modal";
class PostDisplay extends Component {
  state = {
    open: false,
    setOpen: false,
    currentDateTime: Date().toLocaleString(),
    count: 0,
  };

  incrementMe = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };
  decrementMe = () => {
    if (this.state.count > 0) {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount,
      });
    }
  };
  modal = () => {
    var myModal = document.getElementById("myModal");
    var myInput = document.getElementById("myInput");

    myModal.addEventListener("shown.bs.modal", function () {
      myInput.focus();
    });
  };

  render() {
    return (
      <React.Fragment>
        <link
          rel="stylesheet"
          href="//cdn.materialdesignicons.com/3.7.95/css/materialdesignicons.min.css"
        ></link>
        <center>
          <div>
            <h6>
              Abbas
              <small className="ml-4 text-muted">
                <i className="mdi mdi-clock mr-1"></i>
              </small>
            </h6>
            <div
              style={{
                backgroundColor: "lightblue",
                width: "600px",
                padding: "25px",
                overflow: "hidden",
              }}
            >
              {this.props.context}
            </div>
            <span className="badge badge-pill badge-sm m-2">
              &hearts;{this.state.count}
            </span>
            <button
              onClick={this.incrementMe}
              className="btn-danger btn-sm m-2"
            >
              Like
            </button>
            <button
              onClick={this.decrementMe}
              className="btn-danger btn-sm m-2"
            >
              Dislike
            </button>

            <SimpleModal />
            <hr></hr>
          </div>
        </center>
        <br></br>
      </React.Fragment>
    );
  }
}
export default PostDisplay;
