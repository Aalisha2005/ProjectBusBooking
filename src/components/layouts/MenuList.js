import React from "react";
import { Link } from "react-router-dom";

function MenuList() {
  return (
    <div>
      <ul className="flex text-right float-right">
        <li>
          <Link className="" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="" to={""}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="" to={""}>
            Track Shipment
          </Link>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Blog</button>
            
          </div>
          {/* <Link className="" to={"/blogs"}>
                Blog
              </Link> */}
        </li>
        <li>
          <Link className="" to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <span>
            <Link to="/sign-in">Login</Link>/
            <Link to="/sign-up">Register</Link>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default MenuList;
