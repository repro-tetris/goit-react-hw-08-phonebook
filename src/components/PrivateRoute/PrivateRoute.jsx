import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getUserStatus } from "../../redux/auth/auth-selectors";
import { STATUS } from "../../redux/auth/auth-slice";

export default function PrivateRoute({ children, ...propsRoute }) {
  const isLogged = useSelector(getUserStatus) === STATUS.fulfilled;

  return isLogged ? (
    <Route {...propsRoute}>{children}</Route>
  ) : (
    <Redirect to="/" />
  );
}
