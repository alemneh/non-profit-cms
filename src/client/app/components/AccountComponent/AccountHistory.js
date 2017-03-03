import React from 'react';

const AccountHistory = ({ history, handleViewTransaction }) => {

  return (
    <div>
      <h3>Transaction History</h3>
      <hr />
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th>Date: </th>
            <th>Amount: </th>
            <th>Name: </th>
          </tr>
        </thead>
        <tbody>
          { history.reverse().map((transAct, index) => {
            return (
              <tr key={index} onClick={() => {handleViewTransaction(transAct)}}>
                <td>{transAct.createdAt}</td>
                <td>{(transAct.type === 'Payment') ? transAct.amount :
                                                   '- ' + (transAct.amount)}</td>
                <td>{transAct.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AccountHistory;
