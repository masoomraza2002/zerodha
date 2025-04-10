import React from 'react';
import { Link } from 'react-router-dom';

function Nopage() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">404</h1>
        <p>Page Not Found</p>
        <Link to="/">
          <button className="p-2 fs-5 btn btn-primary" style={{ width: "20%", margin: "0 auto" }}>
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nopage;
