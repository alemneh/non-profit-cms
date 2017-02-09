import React, { PropTypes } from 'react';

const AdminPageComponent = ({
  handleUsernameChange,
  handlePasswordChange,
  handleCreateAdmin
}) => {


  return (
    <form onSubmit={ handleCreateAdmin }className="form-horizontal">
      <fieldset>
        <legend>New Admin</legend>
        <div className="form-group">
          <label for="inputEmail" className="col-lg-2 control-label">Email</label>
          <div className="col-lg-10">
            <input onChange={ handleUsernameChange } type="text" className="form-control" id="inputEmail" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputPassword" className="col-lg-2 control-label">Password</label>
          <div className="col-lg-10">
            <input onChange={ handlePasswordChange } type="password" className="form-control" id="inputPassword" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-lg-10 col-lg-offset-2">
            <button type="reset" className="btn btn-default">Cancel</button>
            <button type="submit" className="btn btn-primary">Create</button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

LoginComponent.propTypes = {
  handlePasswordChange: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired
}

export default AdminPageComponent;
