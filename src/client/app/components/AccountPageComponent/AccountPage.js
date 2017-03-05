import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAllAccounts } from '../../actions/accountActions';
import { Link } from 'react-router';

class AccountPage extends Component {
  constructor(props) {
    super()
  }

  componentWillMount() {
    const { token, fetchAllAccounts } = this.props;

    fetchAllAccounts(token);
  }

  render() {
    return (
      <section>
        <Link to="/accounts-info"
              className="btn btn-default btn-lg btn-block">View Account
        </Link>
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
  return bindActionCreators({ fetchAllAccounts }, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(AccountPage);
