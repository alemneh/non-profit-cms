import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions/userActions';
import MembersList from '../components/MembersListComponent/MembersList';

class MembersListContainer extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    const { token, fetchUsers } = this.props;
    fetchUsers(token);
  }

  render() {
    const { members } = this.props;
    return (
      <section>
        <MembersList members={ members } />
      </section>
    )
  }
}

function mapPropsToState(state) {
  return {
    members: state.user.members,
    token: state.login.token
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers }, dispatch);
}

export default connect(mapPropsToState, matchDispatchToProps)(MembersListContainer);
