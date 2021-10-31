import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { STATUS } from "../../redux/auth/auth-slice";

export default function PrivateRoute({ children, ...propsRoute }) {
  const isLogged =
    useSelector((store) => store.auth.status) === STATUS.fulfilled;

  return isLogged ? (
    <Route {...propsRoute}>{children}</Route>
  ) : (
    <Redirect to="/" />
  );
}
