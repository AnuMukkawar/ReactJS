import React from "react";

const navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="navbar-brand nav-item" >
            <a className="nav-link name" href="#">Start Bootstrap</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Shop</a>
          </li>
        </ul>
        <p className="cartarea">
          🛒cart <span> {props.count}</span>
        </p>
      </nav>
      <div className="heading">
        <h3 className="text-light content">Shop in style</h3>
        <p className="text-light">With this shop homepage template</p>
      </div>
    </div>
  );
};

export default navbar;
