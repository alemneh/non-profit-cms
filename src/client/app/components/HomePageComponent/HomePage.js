import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <section>
      <Link to="/members"
            className="btn btn-default btn-lg btn-block">Members
      </Link>
      <Link to="/accounts"
            className="btn btn-default btn-lg btn-block">Accounts
      </Link>
    </section>
  )
}


export default HomePage;
