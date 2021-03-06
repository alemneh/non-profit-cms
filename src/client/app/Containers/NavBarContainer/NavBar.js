import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../actions/loginActions';
import { fetchUsers } from '../../actions/userActions';
import NavBarComponent from '../../components/NavBarComponent/NavBar';

class NavBarContainer extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    const { token, fetchUsers } = this.props;
    if(!token) {
      browserHistory.push('/login-form');
    }
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
    token: state.login.token
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({logout, fetchUsers}, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(NavBarContainer);
