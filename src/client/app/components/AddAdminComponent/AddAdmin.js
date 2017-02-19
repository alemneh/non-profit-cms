import React, { PropTypes } from 'react';


const AddAdminComponent = ({ handleAddAdmin, handleInputChange }) => {

  return (
    <form onSubmit={ handleAddAdmin } className="form-horizontal">
      <fieldset>
        <legend>Add New Admin</legend>
        <div className="form-group">
          <label for="inputUsername" className="col-lg-2 control-label">Username</label>
          <div className="col-lg-10">
            <input onChange={ handleInputChange }  name="name" type="text" className="form-control" id="inputusername" placeholder="Username" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputPassword" className="col-lg-2 control-label">Password</label>
          <div className="col-lg-10">
            <input onChange={ handleInputChange }  name="password" type="text" className="form-control" id="inputPassword" placeholder="Password" />
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

AddAdminComponent.propTypes = {
  handleAddAdmin: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default AddAdminComponent;
