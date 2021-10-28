import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggenIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggenIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}
