import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/loginActions';
import NavComponent from '../components/NavBarComponent/NavBar';

class NavBarContainer extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogout(e) {
      e.preventDefault();

      this.props.logout();
  }

  render() {
    return (
      <header>
        <NavComponent token={this.props.token}
                      handleLogout={ this.handleLogout }
                    />
      </header>
    )
  }
}

function mapPropsToState(state) {
  return {
    token: state.login.state
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({logout}, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(NavComponent);
