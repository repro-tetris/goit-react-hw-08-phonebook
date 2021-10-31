import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { STATUS } from "../redux/auth/auth-slice";

export default function PublicRouter({
  children,
  restricted = false,
  redirectTo,
  ...propsRoute
}) {
  const isLogged =
    useSelector((store) => store.auth.status) === STATUS.fulfilled;

  const isRedirected = isLogged & restricted;

  return isRedirected ? (
    <Redirect to={redirectTo} />
  ) : (
    <Route {...propsRoute}>{children}</Route>
  );
}
