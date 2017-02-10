import React from 'react';


const AddMemberComponent = ({ handleAddMember }) => {

  return (
    <form onClick={ handleAddMember } className="form-horizontal">
      <fieldset>
        <legend>Add New Member</legend>
        <div className="form-group">
          <label for="inputName" class="col-lg-2 control-label">Name</label>
          <div className="col-lg-10">
            <input type="text" className="form-control" id="inputName" placeholder="Name" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputEmail" className="col-lg-2 control-label">Emai</label>
          <div className="col-lg-10">
            <input type="text" className="form-control" id="inputEmail" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputPhone" className="col-lg-2 control-label">Phone</label>
          <div className="col-lg-10">
            <input type="text" className="form-control" id="inputPhone" placeholder="Phone" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress" className="col-lg-2 control-label">Address</label>
          <div className="col-lg-10">
            <input type="text" className="form-control" id="inputAdress" placeholder="Address" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputCity" className="col-lg-2 control-label">City</label>
          <div className="col-lg-10">
            <input type="text" className="form-control" id="inputCity" placeholder="City" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputState" className="col-lg-2 control-label">State</label>
          <div className="col-lg-10">
            <input type="text" className="form-control" id="inputState" placeholder="State" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputZipcode" className="col-lg-2 control-label">Zip Code</label>
          <div className="col-lg-10">
            <input type="text" className="form-control" id="inputZipcode" placeholder="Zip Code" />
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">Committe</label>
          <div className="col-lg-10">
            <select className="form-control" id="select">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">Role</label>
          <div className="col-lg-10">
            <select className="form-control" id="select">
              <option>Chairman</option>
              <option>Vice Chairman</option>
              <option>Treasurer</option>
              <option>Secretary</option>
              <option>Member</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="select" className="col-lg-2 control-label">Volunteer</label>
          <div className="col-lg-10">
            <select className="form-control" id="select">
              <option>Yes</option>
              <option>No</option>
            </select>
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

export default AddMemberComponent;
