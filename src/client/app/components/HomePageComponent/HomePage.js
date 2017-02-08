import React from 'react';
import { Link } from 'react-router';

const Homepage = () => {
  return (
    <section>
      <Link to="/members"
            class="btn btn-default btn-lg btn-block">Members
      </Link>
      <Link to="/accounts"
            class="btn btn-default btn-lg btn-block">Accounts
      </Link>
    </section>
  )
}
