import React, { PropTypes } from 'react';
import Member from '../MemberComponent/Member';

const MembersListComponent = ({
  members,
  handleViewMember
}) => {

  const renderMembersList = () => {
    if(members) {
      return members.map((member, index) => {
        return <Member key={index} member={member} index={index} />
      })
    }
    return;
  }

  return (
    <section>
      <div className="list-group">
        { renderMembersList() }
    </div>
    </section>
  )
}

MembersListComponent.propTypes = {
  members: PropTypes.array.isRequired,
  handleViewMember: PropTypes.func.isRequired
}

export default MembersListComponent;
