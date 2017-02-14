import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers, selectActiveUser } from '../../actions/userActions';
import MembersList from '../../components/MembersListComponent/MembersList';

class MembersListContainer extends Component {
  constructor(props) {
    super(props);

    this.handleViewMember = this.handleViewMember.bind(this);
  }

  componentWillMount() {
    const { token, fetchUsers } = this.props;
    fetchUsers(token);
  }

  handleViewMember(user) {
    this.props.selectActiveUser(user);
  }



  render() {
    const { members } = this.props;
    return (
      <section>
        <h1>Members</h1>
        <hr />
        <MembersList members={ members }
                     handleViewMember={this.handleViewMember}/>
      </section>
    )
  }
}

function mapPropsToState(state) {
  return {
    members: state.user.users,
    token: state.login.token
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers, selectActiveUser }, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(MembersListContainer);
