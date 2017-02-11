import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../../actions/loginActions';
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

    this.handleAddMember = this.handleAddMember.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {

    let key = e.target.name;
    let obj = {};
    obj[key] = e.target.value;
    console.log(key+': ' + e.target.value);
    let updatedValues = Object.assign({}, this.state.member, obj);
    this.setState({member: updatedValues});
  }

  handleAddMember(e) {
    e.preventDefault();
    const { token, addUser} = this.props;
    console.log(this.state.member);
    addUser(this.state.member, token);
  }

  render() {
    return (
      <section>
        <AddMemberComponent handleInputChange={this.handleInputChange}
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
  return bindActionCreators({ addUser }, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(AddMemberContainer);
