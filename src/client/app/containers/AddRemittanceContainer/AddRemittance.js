import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeTransaction } from '../../actions/accountActions';
import AddRemittanceComponent from '../../components/AddRemittanceComponent/AddRemittance';

class AddRemittanceContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transaction: {
        name: '',
        amount: '',
        type: 'Remittance'
      }
    }

    this.handleAddRemittance = this.handleAddRemittance.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    const { admin } = this.props;
    if(!admin.isBoss) {
      if(!admin.isTreasure) {
        browserHistory.push('/')
      }
    }
  }


  handleCancelBtnClick() {
    browserHistory.push('/');
  }


  handleInputChange(e) {

    let key = e.target.name;
    let obj = {};
    obj[key] = e.target.value;
    console.log(key+': ' + e.target.value);
    let updatedValues = Object.assign({}, this.state.transaction, obj);
    this.setState({transaction: updatedValues});
  }

  handleAddRemittance(e) {
    e.preventDefault();
    const { token, makeTransaction, admin} = this.props;
    let transaction = this.state.transaction;
    transaction.createdBy = admin.name;
    transaction.notes = window.document.getElementById('textAreaRemittance').value;
    console.log(transaction);
    makeTransaction(transaction, token);
  }

  render() {
    return (
      <section>
        <AddRemittanceComponent
                            handleInputChange={this.handleInputChange}
                            handleCancelBtnClick={ this.handleCancelBtnClick}
                            handleAddRemittance={this.handleAddRemittance}
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
  return bindActionCreators({ makeTransaction}, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(AddRemittanceContainer);
