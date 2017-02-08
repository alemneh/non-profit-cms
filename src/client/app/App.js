import React, { Component } from 'react';
import NavBar from './containers/NavBarContainer/NavBar';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <main>
          <NavBar />
          { this.props.children }
        </main>
      </div>

    )
  }
}

export default App;
