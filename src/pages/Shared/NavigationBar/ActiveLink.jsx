import React, { Children } from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "text-orange-600 font-bold" : "")}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
