import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-y-center flex-x-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category/food">food</Link>
        </li>
        <li>
          <Link to="/category/travel">travel</Link>
        </li>
        <li>
          <Link to="/category/tech">tech</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
