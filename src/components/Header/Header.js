import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header({ cart }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="header-container">
        <div>
          <NavLink onClick={scrollToTop} to="/">
            <img
              id="logo"
              src="https://assets.bigcartel.com/theme_images/60399594/TOENAE_text_logo.png?auto=format&fit=max&h=400&w=1068"
              alt="logo"
            ></img>
          </NavLink>
        </div>
        <nav className="navbar">
          <NavLink
            onClick={scrollToTop}
            activeClassName="active"
            className={"navbar-link"}
            to="hoodies"
          >
            Hoodies
            {/* {isOpen === "hoodies" ? <hr /> : <></>} */}
          </NavLink>
          <NavLink
            onClick={scrollToTop}
            activeClassName="active"
            className={"navbar-link"}
            to="t-shirt"
          >
            T-shirt
            {/* {isOpen === "t-shirt" ? <hr /> : <></>} */}
          </NavLink>
          <NavLink
            onClick={scrollToTop}
            activeClassName="active"
            className={"navbar-link"}
            to="pants"
          >
            Pants
            {/* {isOpen === "pants" ? <hr /> : <></>} */}
          </NavLink>
          <NavLink
            onClick={scrollToTop}
            activeClassName="active"
            className={"navbar-link"}
            to="jackets"
          >
            jackets
            {/* {isOpen === "jackets" ? <hr /> : <></>} */}
          </NavLink>
          <NavLink
            onClick={scrollToTop}
            activeClassName="active"
            className={"navbar-link"}
            to="shoes"
          >
            shoes
            {/* {isOpen === "shoes" ? <hr /> : <></>} */}
          </NavLink>
        </nav>

        <Link onClick={scrollToTop} to="cart" cart={cart}>
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
