import React, { PropTypes } from 'react';


const MemberComponent = ({ member, handleViewMember }) => {

  return (
    <div>
      <a href="#" class="list-group-item"
         onClick={ handleViewMember }
        >{ member.name }</a>
    </div>
  )
}

MemberComponent.propTypes = {
  member: PropTypes.object.isRequired,
  handleViewMember: PropTypes.func.isRequired
}

export default MemberComponent;
