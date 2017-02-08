import React, { Component } from 'react';
import NavBar from './containers/NavBarContainer/NavBar';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <NavBar />
        { this.props.children }
      </main>
    )
  }
}

export default App;
