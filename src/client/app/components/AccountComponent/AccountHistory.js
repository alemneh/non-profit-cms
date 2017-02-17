import React from 'react';

const AccountHistory = ({ history, handleViewTransaction }) => {
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
      <h3>Transaction History</h3>
      <hr />
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th>Date: </th>
            <th>Amount: </th>
            <th>Type: </th>
          </tr>
        </thead>
        <tbody>
          { history.map((transAct, index) => {
            return (
              <tr key={index} onClick={() => {handleViewTransaction(transAct)}}>
                <td>{Dateformatter(transAct.createdAt)}</td>
                <td>{USDformatter.format(transAct.amount)}</td>
                <td>{transAct.type}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AccountHistory;
