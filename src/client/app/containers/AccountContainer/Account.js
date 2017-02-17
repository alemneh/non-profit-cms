import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllAccounts, fetchAllTransactions, selectActiveTransaction } from '../../actions/accountActions';
import AccountInfo from '../../components/AccountComponent/AccountInfo';
import AccountHistory from '../../components/AccountComponent/AccountHistory';

class AccountContainer extends Component {
  constructor(props) {
    super(props);

    this.handleViewTransaction = this.handleViewTransaction.bind(this);
  }

  componentWillMount() {
    const { token, fetchAllTransactions, fetchAllAccounts } = this.props;

    fetchAllAccounts(token);
    fetchAllTransactions(token);
  }

  handleViewTransaction(transaction) {
    this.props.selectActiveTransaction(transaction);
  }

  render() {
    const { account, history } = this.props;
    if(!history) return <div>Loading....</div>
    return (
      <section>
        <AccountInfo account={account[0]}/>
        <AccountHistory history={history}
                        handleViewTransaction={this.handleViewTransaction}/>
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
  return bindActionCreators({
    fetchAllAccounts,
    fetchAllTransactions,
    selectActiveTransaction
  }, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(AccountContainer);
