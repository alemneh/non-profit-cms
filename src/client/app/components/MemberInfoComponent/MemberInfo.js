import React, { PropTypes } from 'react';


const MemberInfoCompnent = ({ member, onEditClick, handleRemoveUser }) => {
  console.log('Volunteer: ' + member.volunteer);
  return (
    <div>
      <h3>User Info</h3>
      <hr />
      <p><b>Name: </b>{member.name}</p>
      <p><b>Email: </b> {member.email} </p>
      <p><b>Phone Number: </b>  {member.telephone} </p>
      <p><b>Street: </b> {member.street} </p>
      <p><b>City: </b> {member.city} </p>
      <p><b>State: </b> {member.state} </p>
      <p><b>Zip Code: </b> {member.zipCode} </p>
      <p><b>Committee: </b> {member.committee ? 'Yes' : 'No'} </p>
      <p><b>Role: </b>  {member.role} </p>
      <p><b>Volunteer: </b>  {member.volunteer ? 'Yes' : 'No'} </p>
      <br />
      <a onClick={ onEditClick } href="#" className="btn btn-primary">Edit</a>
      <a onClick={ handleRemoveUser } href="#" className="btn btn-danger">Delete</a>
    </div>
  )
}

export default MemberInfoCompnent;
