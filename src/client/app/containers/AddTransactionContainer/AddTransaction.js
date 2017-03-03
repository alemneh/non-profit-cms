import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeTransaction } from '../../actions/accountActions';
import { fetchUsers } from '../../actions/userActions';
import AddTransactionComponent from '../../components/AddTransactionComponent/AddTransaction';

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

  componentWillMount() {
    const { token, fetchUsers } = this.props;
    fetchUsers(token);
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
    const { token, admin, makeTransaction} = this.props;
    let transaction = this.state.transaction;
    transaction.createdBy = admin.name;
    console.log(this.state.transaction);

    makeTransaction(transaction, token);
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
    members: state.user.users,
    admin: state.login.user
  }
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({ makeTransaction, fetchUsers}, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(AddTransactionContainer);
