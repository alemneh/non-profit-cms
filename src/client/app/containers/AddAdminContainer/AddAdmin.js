import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { addUser } from '../../actions/loginActions';
import AddAdminComponent from '../../components/AddAdminComponent/AddAdmin';

class AddAdminContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      admin: {
        name: '',
        password: '',
      }
    }

    this.handleAddAdmin = this.handleAddAdmin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    const { admin } = this.props;
    if(!admin.isBoss) {
      browserHistory.push('/');
    }
  }



  handleInputChange(e) {

    let key = e.target.name;
    let obj = {};
    obj[key] = e.target.value;
    console.log(key+': ' + e.target.value);
    let updatedValues = Object.assign({}, this.state.admin, obj);
    this.setState({admin: updatedValues});
  }

  handleAddAdmin(e) {
    e.preventDefault();
    const { token, addUser, admin} = this.props;

    let newAdmin = this.state.admin;
    newAdmin.admin = true;

    console.log(newAdmin);
    addUser(newAdmin, token);
  }

  render() {
    return (
      <section>
        <AddAdminComponent
                            handleInputChange={this.handleInputChange}
                            handleAddAdmin={this.handleAddAdmin}
                          />
      </section>
    )
  }
}

function mapPropsToState(state) {
  return {
    token: state.login.token,
    admin: state.login.user
  }
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addUser}, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(AddAdminContainer);
