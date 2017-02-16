import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <section>
      <Link to="/members"
            className="btn btn-default btn-lg btn-block">Members
      </Link>
      <Link to="/accounts-info"
            className="btn btn-default btn-lg btn-block">Account
      </Link>
      <Link to="/add-transaction"
            className="btn btn-default btn-lg btn-block">Make Transaction
      </Link>
    </section>
  )
}


export default HomePage;
