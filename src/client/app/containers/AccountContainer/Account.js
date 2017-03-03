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
    account[0].amount = USDformatter.format(account[0].amount);
    const formatedHistory = history.map((t) => {
      t.amount = USDformatter.format(t.amount);
      t.createdAt   = Dateformatter(t.createdAt);
      return t;
    });
    console.log(formatedHistory);

    if(!history) return <div>Loading....</div>

    return (
      <section>
        <AccountInfo account={account[0]}/>
        <AccountHistory history={formatedHistory}
                        handleViewTransaction={this.handleViewTransaction}/>
      </section>
    )
  }
}

const  USDformatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

const Dateformatter = (date) => {
  let dateArray = date.slice(0,10).split('-');
  const y = dateArray[0],
        m = dateArray[1],
        d = dateArray[2];
  return m + '/' + d + '/' + y;
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
