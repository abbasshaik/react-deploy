import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Post from './components/post';
class  App extends Component {
  
  render() { 
    return (  
      <React.Fragment>
        < NavBar/>
        < Post/>
      </React.Fragment>
    );
  }
}
 
export default App;
