import React from 'react';

const MemberHistory = ({ member }) => {

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
          <tr>
            <td>12/20/16</td>
            <td>$15.00</td>
          </tr>
          <tr>
            <td>12/20/16</td>
            <td>$15.00</td>
          </tr>
          <tr>
            <td>12/20/16</td>
            <td>$15.00</td>
          </tr>
          <tr>
            <td>12/20/16</td>
            <td>$15.00</td>
          </tr>
          <tr>
            <td>12/20/16</td>
            <td>$15.00</td>
          </tr>
          <tr>
            <td>12/20/16</td>
            <td>$15.00</td>
          </tr>
          <tr>
            <td>12/20/16</td>
            <td>$15.00</td>
          </tr>
          <tr>
            <td>12/20/16</td>
            <td>$15.00</td>
          </tr>
          <tr>
            <td>12/20/16</td>
            <td>$15.00</td>
          </tr>
          <tr>
            <td>12/20/16</td>
            <td>$15.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MemberHistory;
