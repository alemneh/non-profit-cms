import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editBtnClicked, updateUserInfo } from '../../actions/userActions';
import ProfileComponent from '../../components/ProfileComponent/Profile';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: this.props.member || null
    }
    this.handleUpdateMember = this.handleUpdateMember.bind(this);
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

  handleUpdateMember(e) {
    e.preventDefault();
    const { token, updateUserInfo } = this.props;

    updateUserInfo(this.state.member, token)
  }

  render() {
    const { isEditing, editBtnClicked } = this.props;
    return (
      <section>
        <ProfileComponent member={ this.state.member }
                          isEditing={isEditing}
                          onEditClick={editBtnClicked}
                          handleInputChange={this.handleInputChange}
                          handleUpdateMember={this.handleUpdateMember}/>
      </section>
    )
  }

}

function mapPropsToState(state) {
  return {
    member: state.user.activeUser,
    isEditing: state.user.isEditing,
    token: state.login.token
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ editBtnClicked, updateUserInfo }, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(ProfileContainer);
