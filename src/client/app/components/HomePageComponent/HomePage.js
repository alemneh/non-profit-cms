import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <section>
      <Link to="/members"
            className="btn btn-default btn-lg btn-block">Members
      </Link>
      <Link to="/add-payment"
            className="btn btn-default btn-lg btn-block">Make Payment
      </Link>
      <Link to="/accounts-page"
            className="btn btn-default btn-lg btn-block">Account
      </Link>
      <Link to="/add-admin"
            className="btn btn-default btn-lg btn-block">Create Admin
      </Link>
      <Link to="/add-remittance"
            className="btn btn-default btn-lg btn-block">Make Remittance
      </Link>
      <Link to="/reset-password"
            className="btn btn-default btn-lg btn-block">Reset Password
      </Link>
    </section>
  )
}


export default HomePage;
