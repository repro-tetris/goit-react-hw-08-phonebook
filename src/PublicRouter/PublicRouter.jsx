import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getUserStatus } from "../redux/auth/auth-selectors";
import { STATUS } from "../redux/auth/auth-slice";

export default function PublicRouter({
  children,
  restricted = false,
  redirectTo,
  ...propsRoute
}) {
  const isLogged = useSelector(getUserStatus) === STATUS.fulfilled;

  const isRedirected = isLogged & restricted;

  return isRedirected ? (
    <Redirect to={redirectTo} />
  ) : (
    <Route {...propsRoute}>{children}</Route>
  );
}
