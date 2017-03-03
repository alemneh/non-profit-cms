import React, { PropTypes } from 'react';
import MemberInfo from '../MemberInfoComponent/MemberInfo';
import MemberEdit from '../MemberEditComponent/MemberEdit';
import MemberHistory from '../MemberInfoComponent/MemberHistory';

const ProfileComponent = ({
  member,
  isEditing,
  onEditClick,
  handleUpdateMember,
  handleRemoveUser,
  handleInputChange,
  cancelEditBtnClicked
}) => {

  const renderMemberInfo = () => {
    if(isEditing) {
      return (
        <MemberEdit member={member}
                    handleInputChange={handleInputChange}
                    handleUpdateMember={handleUpdateMember}
                    cancelEditBtnClicked={cancelEditBtnClicked}/>
      )
    }
    return (
      <MemberInfo member={member}
                  handleRemoveUser={handleRemoveUser}
                  onEditClick={onEditClick}
                  />
    )
  }

  return (
    <div>
      { renderMemberInfo() }
      <MemberHistory member={member} />
    </div>
  )
}


ProfileComponent.propTypes = {
  member: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onEditClick: PropTypes.func.isRequired,
  handleUpdateMember: PropTypes.func.isRequired,
  handleRemoveUser: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default ProfileComponent;
