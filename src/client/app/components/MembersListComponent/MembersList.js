import React, { PropTypes } from 'react';
import Member from '../MemberComponent/Member';
import { Link } from 'react-router';

const MembersListComponent = ({
  members,
  handleViewMember
}) => {

  const renderMembersList = () => {
    if(members.length > 0) {
      console.log(members);

      return members.map((member, index) => {
        return <Member key={index}
                       member={member}
                       index={index}
                       handleViewMember={handleViewMember}/>
      })
    }
    console.log('hit');
    return (
      <div>No members added yet. <Link to="/add-member">Add Members.</Link></div>
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
