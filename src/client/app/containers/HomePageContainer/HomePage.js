import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllAccounts, fetchAllTransactions } from '../../actions/accountActions';
import { fetchUsers } from '../../actions/userActions';
import HomePageComponent from '../../components/HomePageComponent/HomePage';

class HomePageContainer extends Component {
  constructor(props) {
    super();
  }

  componentWillMount() {
    const { token, fetchUsers, fetchAllAccounts, fetchAllTransactions } = this.props;
    fetchUsers(token);
    fetchAllAccounts(token);
    fetchAllTransactions(token);
  }

  render() {

    return (<HomePageComponent />);
  }
}

function mapPropsToState(state) {
  return {
    token: state.login.token
  }
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAllAccounts,
    fetchAllTransactions,
    fetchUsers
  }, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(HomePageContainer);
