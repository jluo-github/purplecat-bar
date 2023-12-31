import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <span className="logo">logo</span>

          <div className="nav-links">
            <NavLink to="/" className="nav-link">
              home
            </NavLink>

            <NavLink to="/about" className="nav-link">
              about
            </NavLink>

            <NavLink to="/newsletter" className="nav-link">
              newsletter
            </NavLink>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
