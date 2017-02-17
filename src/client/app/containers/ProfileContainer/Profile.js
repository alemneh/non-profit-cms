import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editBtnClicked, updateUserInfo, removeUser, fetchUserPayments } from '../../actions/userActions';
import { selectActiveTransaction } from '../../actions/accountActions';
import MemberInfo from '../../components/MemberInfoComponent/MemberInfo';
import MemberEdit from '../../components/MemberEditComponent/MemberEdit';
import MemberHistory from '../../components/MemberInfoComponent/MemberHistory';


class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: this.props.member || null
    }
    this.handleUpdateMember    = this.handleUpdateMember.bind(this);
    this.handleViewTransaction = this.handleViewTransaction.bind(this);
    this.handleRemoveUser      = this.handleRemoveUser.bind(this);
    this.handleInputChange     = this.handleInputChange.bind(this);
    this.renderMemberInfo      = this.renderMemberInfo.bind(this);
  }

  componentWillMount() {
    const { member, fetchUserPayments, token} = this.props;

    fetchUserPayments(member._id, token);
  }


  handleInputChange(e) {

    let key = e.target.name;
    let obj = {};
    obj[key] = e.target.value;
    console.log(key+': ' + e.target.value);
    let updatedValues = Object.assign({}, this.state.member, obj);
    this.setState({member: updatedValues});
  }

  handleRemoveUser(e) {
    e.preventDefault();
    const { token, removeUser, member } = this.props;

    removeUser(member._id, token);
  }

  handleViewTransaction(transaction) {
    this.props.selectActiveTransaction(transaction);
  }

  handleUpdateMember(e) {
    e.preventDefault();
    const { token, updateUserInfo } = this.props;

    updateUserInfo(this.state.member, token)
  }

  renderMemberInfo() {
    const { isEditing, editBtnClicked, member } = this.props;
    if(isEditing) {
      return (
        <MemberEdit member={this.state.member}
                    handleInputChange={this.handleInputChange}
                    handleUpdateMember={this.handleUpdateMember}/>
      )
    }
    return (
      <MemberInfo member={member}
                  handleRemoveUser={this.handleRemoveUser}
                  onEditClick={editBtnClicked}/>
    )
  }

  render() {
    const { isEditing, editBtnClicked, payments } = this.props;
    return (
      <section>
        { this.renderMemberInfo() }
        <MemberHistory payments={payments}
                       handleViewTransaction={this.handleViewTransaction}/>
      </section>
    )
  }

}

function mapPropsToState(state) {
  return {
    member: state.user.activeUser,
    isEditing: state.user.isEditing,
    payments: state.user.payments,
    token: state.login.token
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    editBtnClicked,
    updateUserInfo,
    removeUser,
    fetchUserPayments,
    selectActiveTransaction
  }, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(ProfileContainer);
