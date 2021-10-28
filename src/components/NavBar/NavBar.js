import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import UserMenu from "../UserMenu/UserMenu";
import s from "./NavBar.module.css";

export default function NavBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log("islogged", isLoggedIn);
  return (
    <nav className={s.nav}>
      {!isLoggedIn && (
        <>
          <NavLink className={s.navlink} to="/register">
            Register
          </NavLink>
          <NavLink className={s.navlink} to="/login">
            Login
          </NavLink>
        </>
      )}
      {isLoggedIn && <UserMenu className={s.userMenu} />}
    </nav>
  );
}
