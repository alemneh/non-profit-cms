import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransactionInfo from '../../components/TransactionInfoComponent/TransactionInfo';


class TransactionInfoContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <TransactionInfo transaction={this.props.transaction} />
      </section>
    )
  }
}

function mapPropsToState(state) {
  return {
    transaction: state.account.activeTransaction
  }
}

export default connect(mapPropsToState)(TransactionInfoContainer);
