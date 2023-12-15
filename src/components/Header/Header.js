import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header({ cart }) {
  return (
    <>
      <div className="header-container">
        <div>
          <NavLink to="/">
            <img
              id="logo"
              src="https://assets.bigcartel.com/theme_images/60399594/TOENAE_text_logo.png?auto=format&fit=max&h=400&w=1068"
              alt="logo"
            ></img>
          </NavLink>
        </div>
        <nav className="navbar">
          <NavLink to="/" activeClassName="active" className={"navbar-link"}>
            HOME
            {/* Home {isOpen === "Home" ? <hr /> : <></>} */}
          </NavLink>
          <NavLink
            activeClassName="active"
            className={"navbar-link"}
            to="hoodies"
          >
            Hoodies
            {/* {isOpen === "hoodies" ? <hr /> : <></>} */}
          </NavLink>
          <NavLink
            activeClassName="active"
            className={"navbar-link"}
            to="t-shirt"
          >
            T-shirt
            {/* {isOpen === "t-shirt" ? <hr /> : <></>} */}
          </NavLink>
          <NavLink
            activeClassName="active"
            className={"navbar-link"}
            to="pants"
          >
            Pants
            {/* {isOpen === "pants" ? <hr /> : <></>} */}
          </NavLink>
          <NavLink
            activeClassName="active"
            className={"navbar-link"}
            to="jackets"
          >
            jackets
            {/* {isOpen === "jackets" ? <hr /> : <></>} */}
          </NavLink>
          <NavLink
            activeClassName="active"
            className={"navbar-link"}
            to="shoes"
          >
            shoes
            {/* {isOpen === "shoes" ? <hr /> : <></>} */}
          </NavLink>
        </nav>

        <Link to="cart" cart={cart}>
          <img
            alt=""
            id="cart"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIY0im0meOZnnzeCXPWgHxZA_BMxXn0Hrgn_EHKCjDiY6KQvzBPMoLdhqadMHRt9fWe7A&usqp=CAU"
          />
        </Link>
      </div>
    </>
  );
}

export default Header;
