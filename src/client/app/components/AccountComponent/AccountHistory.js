import React, { PropTypes } from 'react';
import { currencyUSD, date } from '../../lib/formatter';

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
                <td>{date(transAct.createdAt)}</td>
                <td>{(transAct.type === 'Payment') ? currencyUSD.format(transAct.amount) :
                                                   '- ' + (currencyUSD.format(transAct.amount))}</td>
                <td>{transAct.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

AccountHistory.propTypes = {
  history: PropTypes.array.isRequired,
  handleViewTransaction: PropTypes.func.isRequired,
}
export default AccountHistory;
