import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup } from '../../actions/loginActions';
import AddMemberComponent from '../../components/AddMemberComponent/AddMember';

class AddMemberContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      member: {
        name: '',
        email: '',
        role: '',
        committee: '',
        volunteer: '',
        email: '',
        telephone: '',
        street: '',
        city: '',
        state: '',
        zipCode: ''
      }
    }
  }

  handleInputChange(e) {
    let key = e.target.name;
    let obj = {};
    obj[key] = e.target.value;
    let updatedValues = Object.assign({}, this.state.values, obj);
    this.setState({values: updatedValues});
  }

  handleAddMember(e) {
    const { token, signup} = this.props;
    e.preventDefault();

    signup(this.state.member, token);
  }

  render() {
    return (
      <section>
        <AddMemberContainer handleInputChange={this.handleInputChange}
                            handleAddMember={this.handleAddMember}/>
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
  return bindActionCreators({ signup }, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(AddMemberContainer);
