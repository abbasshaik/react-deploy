import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Ku Ku </span>
          </div>
        </nav>
        <main className="container"></main>
      </React.Fragment>
    );
  }
}

export default NavBar;
