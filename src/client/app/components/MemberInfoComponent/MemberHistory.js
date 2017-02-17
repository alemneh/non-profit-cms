import React from 'react';

const MemberHistory = ({ payments, handleViewTransaction }) => {

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
      <h3>Payment History</h3>
      <hr />
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th>Date: </th>
            <th>Amount: </th>
          </tr>
        </thead>
        <tbody>
          { payments.map((payment, index) => {
            return (
              <tr key={index} onClick={() => {handleViewTransaction(payment)} }>
                <td>{Dateformatter(payment.createdAt)}</td>
                <td>{USDformatter.format(payment.amount)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default MemberHistory;
