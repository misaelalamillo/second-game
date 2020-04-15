import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Game IT
      </a>
      <a className="navbar-brand" href="/search">
        Search
      </a>
      <a className="navbar-brand" href="/signup">
        Sign Up
      </a>
      <a className="navbar-brand" href="/user/:id">
        User
      </a>
    </nav>
  );
}

export default Nav;
