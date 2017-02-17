import React, { PropTypes } from 'react';


const TransactionInfoCompnent = ({ transaction }) => {

  const  USDformatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  const Dateformatter = (date) => {
    let dateArray = date.slice(0,10).split('-');
    const y = dateArray[0],
          m = dateArray[1],
          d = dateArray[2];
    return m + '/' + d + '/' + y;
  }

  return (
    <div>
      <h3>Transaction Info</h3>
      <hr />
      <p><b>Type: </b> {transaction.type} </p>
      <p><b>Name: </b>{transaction.name}</p>
      <p><b>Amount: </b> {USDformatter.format(transaction.amount)} </p>
      <p><b>Date: </b>  {Dateformatter(transaction.createdAt)} </p>
      <p><b>Creatd By: </b> {transaction.createdBy} </p>
    </div>
  )
}

export default TransactionInfoCompnent;
