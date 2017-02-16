import React, { PropTypes } from 'react';


const AccountInfoCompnent = ({ account }) => {

  const  USDformatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  return (
    <div>
      <h3>Account Info</h3>
      <hr />
      <p><b>Name: </b> {account.name}</p>
      <p><b>Amount: </b> {USDformatter.format(account.amount)} </p>
    </div>
  )
}

export default AccountInfoCompnent;
