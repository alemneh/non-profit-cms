import React, { PropTypes } from 'react';
import Member from './member';

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
    return (
      <div>There are no members. <Link to="/members/add" >Add Members</Link></div>
    )
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
