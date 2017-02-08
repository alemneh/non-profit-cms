import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const NavComponent = ({ token, handleLogout }) => {

  const renderNavBarLinks = () => {
    if(token) {
      return (
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><Link to="#">Home <span className="sr-only">(current)</span></Link></li>
            <li><Link to="#">Members</Link></li>
            <li><Link to="#">Account</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link onClick={ handleLogout }>Logout</Link></li>
          </ul>
        </div>
      )
    }
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/">Home <span className="sr-only">(current)</span></Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/login-form">Login</Link></li>
        </ul>
      </div>
    )
  }


  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">Welkiat-Tegede</Link>
        </div>
        { renderNavBarLinks() }
      </div>
    </nav>
  )

}

NavComponent.propTypes = {
  token: PropTypes.string,
  handleLogout: PropTypes.func.isRequired,
}

export default NavComponent;
