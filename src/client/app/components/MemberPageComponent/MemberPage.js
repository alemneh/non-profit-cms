import React from 'react';
import { Link } from 'react-router';

const MemberPage = () => {
  return (
    <section>
      <Link to="/members-list"
            className="btn btn-default btn-lg btn-block">View Members
      </Link>
      <Link to="/add-member"
            className="btn btn-default btn-lg btn-block">Add New Member
      </Link>
    </section>
  )
}


export default MemberPage;
