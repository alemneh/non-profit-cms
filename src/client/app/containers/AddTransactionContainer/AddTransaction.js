import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeTransaction } from '../../actions/accountActions';
import AddTransactionComponent from '../../components/AddTransactionComponent/AddTransaction';
console.log(makeTransaction);
class AddTransactionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transaction: {
        name: '',
        amount: '',
        type: 'Payment'
      }
    }

    this.handleAddTransaction = this.handleAddTransaction.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }



  handleInputChange(e) {

    let key = e.target.name;
    let obj = {};
    obj[key] = e.target.value;
    console.log(key+': ' + e.target.value);
    let updatedValues = Object.assign({}, this.state.transaction, obj);
    this.setState({transaction: updatedValues});
  }

  handleAddTransaction(e) {
    e.preventDefault();
    console.log(this.props);
    const { token, makeTransaction} = this.props;
    console.log(this.state.transaction);
    makeTransaction(this.state.transaction, token);
  }

  render() {
    return (
      <section>
        <AddTransactionComponent
                            handleInputChange={this.handleInputChange}
                            handleAddTransaction={this.handleAddTransaction}
                            members={this.props.members}
                          />
      </section>
    )
  }
}

function mapPropsToState(state) {
  return {
    token: state.login.token,
    members: state.user.users
  }
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({ makeTransaction}, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(AddTransactionContainer);
