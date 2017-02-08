import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const NavComponent = ({
  userId,
  token,
  handleLogout
}) => {

  const renderNavBarLinks = () => {
    if(token) {
      return (
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><Link to="#">Home <span class="sr-only">(current)</span></Link></li>
            <li><Link to="#">Members</Link></li>
            <li><Link to="#">Account</Link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><Link to="#">Logout</Link></li>
          </ul>
        </div>
      )
    }
    return (
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><Link to="/">Home <span class="sr-only">(current)</span></Link></li>
          <li><Link to="/members">Members</Link></li>
          <li><Link to="/accounts">Account</Link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><Link to="login">Login</Link></li>
        </ul>
      </div>
    )
  }


  return (
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <Link class="navbar-brand" to="/">Welkiat-Tegede</Link>
        </div>
        { renderNavBarLinks() }
      </div>
    </nav>
  )

}

NavComponent.propTypes = {
  userId: PropTypes.string,
  token: PropTypes.string,
  handleLogout: PropTypes.func.isRequired,

}

export default NavComponent;
