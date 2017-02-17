import React, { PropTypes } from 'react';


const AddTransactionComponent = ({ handleAddTransaction, handleInputChange, members }) => {

  return (
    <form onSubmit={ handleAddTransaction } className="form-horizontal">
      <fieldset>
        <legend>Add New Payment</legend>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">Name</label>
          <div className="col-lg-10">
            <select onChange={ handleInputChange }  name="name" className="form-control" id="select">
              <option value="">--Select Option--</option>
              { members.map((member, index) => {
                const name = member.name;
                return <option key={index} value={name}>{name}</option>
              })}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="inputAmount" className="col-lg-2 control-label">Amount</label>
          <div className="col-lg-10">
            <input onChange={ handleInputChange }  name="amount" type="text" className="form-control" id="inputEmail" placeholder="Amount" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-lg-10 col-lg-offset-2">
            <button type="reset" className="btn btn-default">Cancel</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

AddTransactionComponent.propTypes = {
  handleAddTransaction: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default AddTransactionComponent;
