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
      <Link to="/accounts-info"
            className="btn btn-default btn-lg btn-block">Account
      </Link>
      <Link to="/add-admin"
            className="btn btn-default btn-lg btn-block">Create Admin
      </Link>
      <Link to="/add-remittance"
            className="btn btn-default btn-lg btn-block">Make Remittance
      </Link>
    </section>
  )
}


export default HomePage;
