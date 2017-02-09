import React, { PropTypes } from 'react';


const MemberComponent = ({ index, member, handleViewMember }) => {

  return (
    <div>
      <a href="#" className="list-group-item"
         onClick={ handleViewMember }
        >{ index + 1 }. { member.name }</a>
    </div>
  )
}

MemberComponent.propTypes = {
  member: PropTypes.object.isRequired,
  handleViewMember: PropTypes.func.isRequired
}

export default MemberComponent;
