import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../actions/loginActions';
import NavBarComponent from '../../components/NavBarComponent/NavBar';

class NavBarContainer extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
      e.preventDefault();

      this.props.logout();
  }

  render() {
    return (
      <header >
        <NavBarComponent token={this.props.token}
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

export default connect(mapPropsToState, matchDispatchToProps)(NavBarContainer);
