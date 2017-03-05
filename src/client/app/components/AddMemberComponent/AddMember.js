import React, { PropTypes } from 'react';


const AddMemberComponent = ({ handleAddMember, handleInputChange, handleCancelBtnClick }) => {

  return (
    <form onSubmit={ handleAddMember } className="form-horizontal">
      <fieldset>
        <legend>Add New Member</legend>
        <div className="form-group">
          <label for="inputName" className="col-lg-2 control-label">Name</label>
          <div className="col-lg-10">
            <input onChange={ handleInputChange }  name="name" type="text" className="form-control" id="inputName" placeholder="Name" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputEmail" className="col-lg-2 control-label">Emai</label>
          <div className="col-lg-10">
            <input onChange={ handleInputChange }  name="email" type="text" className="form-control" id="inputEmail" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputPhone" className="col-lg-2 control-label">Phone</label>
          <div className="col-lg-10">
            <input onChange={ handleInputChange }  name="telephone" type="text" className="form-control" id="inputPhone" placeholder="Phone" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputStreet" className="col-lg-2 control-label">Street</label>
          <div className="col-lg-10">
            <input onChange={ handleInputChange }  name="street" type="text" className="form-control" id="inputStreet" placeholder="Street" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputCity" className="col-lg-2 control-label">City</label>
          <div className="col-lg-10">
            <input onChange={ handleInputChange }  name="city" type="text" className="form-control" id="inputCity" placeholder="City" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputState" className="col-lg-2 control-label">State</label>
          <div className="col-lg-10">
            <input onChange={ handleInputChange }  name="state" type="text" className="form-control" id="inputState" placeholder="State" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">Zip Code</label>
          <div className="col-lg-10">
            <input onChange={ handleInputChange }  name="zipCode" type="text" className="form-control" id="inputZipcode" placeholder="Zip Code" />
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">Committe</label>
          <div className="col-lg-10">
            <select onChange={ handleInputChange }  name="committee" className="form-control" id="select">
              <option value="">--Select Option--</option>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">Role</label>
          <div className="col-lg-10">
            <select onChange={ handleInputChange }  name="role" className="form-control" id="select">
              <option value="">--Select Option--</option>
              <option>Member</option>
              <option>Chairman</option>
              <option>Vice Chairman</option>
              <option>Treasurer</option>
              <option>Secretary</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">Volunteer</label>
          <div className="col-lg-10">
            <select onChange={ handleInputChange } name="volunteer" className="form-control" id="select">
              <option value="">--Select Option--</option>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="col-lg-10 col-lg-offset-2">
            <button onClick={ handleCancelBtnClick } type="reset" className="btn btn-default">Cancel</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

AddMemberComponent.propTypes = {
  handleAddMember: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default AddMemberComponent;
