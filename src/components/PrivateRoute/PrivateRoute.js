import React from "react";

import { Redirect, Route } from "react-router";

export default function PrivateRoute({
  isLoggedIn = false,
  redirectTo,
  children,
  ...routeProps
}) {
  return isLoggedIn ? (
    <Route {...routeProps}>{children}</Route>
  ) : (
    <Redirect to={redirectTo} />
  );
}
