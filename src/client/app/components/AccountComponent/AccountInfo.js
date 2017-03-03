import React, { PropTypes } from 'react';


const AccountInfoCompnent = ({ account }) => {


  return (
    <div>
      <h3>Account Info</h3>
      <hr />
      <p><b>Name: </b> {account.name}</p>
      <p><b>Amount: </b> {account.amount} </p>
    </div>
  )
}

export default AccountInfoCompnent;
