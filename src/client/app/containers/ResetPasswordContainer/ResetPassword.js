import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateAdmin } from '../../actions/userActions';

class ResetPassword extends Component {
  constructor(props) {
    super()

    this.state = {
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePasswordReset = this.handlePasswordReset.bind(this);
  }

  handleInputChange(e) {

    this.setState({password: e.target.value})
  }

  handleCancelBtnClick() {
    browserHistory.push('/');
  }

  handlePasswordReset(e) {
    e.preventDefault();
    const { token, updateAdmin, user } = this.props;

    console.log(this.state.password);
    user.password = this.state.password;
    updateAdmin(user, token);
  }

  render() {
    return (
      <form onSubmit={ this.handlePasswordReset } className="form-horizontal">
        <fieldset>
          <legend>Change Password</legend>
          <div className="form-group">
            <label for="inputPassword" className="col-lg-2 control-label">Password</label>
            <div className="col-lg-10">
              <input onChange={ this.handleInputChange }  name="password" type="text" className="form-control" id="inputPassword" placeholder="Password" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-10 col-lg-offset-2">
              <button onClick={ this.handleCancelBtnClick } type="reset" className="btn btn-default">Cancel</button>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
    )
  }
}

function mapPropsToState(state) {
  return {
    token: state.login.token,
    user: state.login.user
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ updateAdmin }, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(ResetPassword);
