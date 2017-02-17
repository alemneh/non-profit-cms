import React, { PropTypes } from 'react';


const AddRemittanceComponent = ({ handleAddRemittance, handleInputChange, members }) => {

  return (
    <form onSubmit={ handleAddRemittance } className="form-horizontal">
      <fieldset>
        <legend>Add New Remittance</legend>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">To</label>
          <div className="col-lg-10">
            <input onChange={ handleInputChange }  name="name" type="text" className="form-control" id="inputTo" placeholder="To" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputAmount" className="col-lg-2 control-label">Amount</label>
          <div className="col-lg-10">
            <input onChange={ handleInputChange }  name="amount" type="text" className="form-control" id="inputAmount" placeholder="Amount" />
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

AddRemittanceComponent.propTypes = {
  handleAddRemittance: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default AddRemittanceComponent;
