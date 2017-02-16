import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllAccounts, fetchAllTransactions } from '../../actions/accountActions';
import AccountInfo from '../../components/AccountComponent/AccountInfo';
import AccountHistory from '../../components/AccountComponent/AccountHistory';

class AccountContainer extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    const { token, fetchAllTransactions, fetchAllAccounts } = this.props;

    fetchAllAccounts(token);
    fetchAllTransactions(token);
  }

  render() {
    const { account, history } = this.props;
    if(!history) return <div>Loading....</div>
    return (
      <section>
        <AccountInfo account={account[0]}/>
        <AccountHistory history={history}/>
      </section>
    )
  }
}

function mapPropsToState(state) {
  return {
    account: state.account.accounts,
    history: state.account.transactions,
    token: state.login.token
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllAccounts, fetchAllTransactions }, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(AccountContainer);
