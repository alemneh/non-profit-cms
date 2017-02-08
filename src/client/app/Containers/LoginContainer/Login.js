import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/loginActions';
import Login from '../../components/LoginComponent/Login';


class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null
    }
    console.log(this);

    this.handleLogin          = this.handleLogin.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(e) {
    this.setState( {username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState( { password: e.target.value});
  }

  handleLogin(e) {
      e.preventDefault();
      const { username, password } = this.state;
      const validateLoginInput = this.validateLoginInput(username, password);
      if(validateLoginInput) {
        this.setState({
          error: validateLoginInput
        });
        return;
      }

      this.props.login(username, password);
  }

  validateLoginInput(username, password) {
    if(!username) {
      return 'Please enter username';
    } else if(!password) {
      return 'Please enter password';
    } else {
      return null;
    }
  }


  render() {
    console.log(this.handleUsernameChange);
    // const { handleLogin, handleUsernameChange, handlePasswordChange} = this;
    return (
      <section>
        <Login handleLogin={ this.handleLogin }
               handleUsernameChange={ this.handleUsernameChange }
               handlePasswordChange={ this.handlePasswordChange }/>
      </section>
    )
  }
}

function mapPropsToState(state) {
  return {
    token: state.login.token
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(Login)
