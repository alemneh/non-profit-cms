import React, { PropTypes } from 'react';
import { currencyUSD, date } from '../../lib/formatter';



const AccountInfoCompnent = ({ account }) => {


  return (
    <div>
      <h3>Account Info</h3>
      <hr />
      <p><b>Name: </b> {account.name}</p>
      <p><b>Amount: </b> {currencyUSD.format(account.amount)} </p>
    </div>
  )
}

AccountInfoCompnent.propTypes = {
  account: PropTypes.object.isRequired
}

export default AccountInfoCompnent;
