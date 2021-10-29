import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Redirect } from "react-router";
import { getIsLoggedIn } from "./redux/auth/auth-selectors";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import Contacts from "./components/Contacts/Contacts";
import { useCurrentQuery } from "./redux/auth/auth-slice";
import { currentUser } from "./redux/auth/auth-reducer";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();
  const { data, isFetching, isSuccess, isError } = useCurrentQuery();
  const isLoggedIn = useSelector(getIsLoggedIn);

  console.log(
    "isLoggedIn",
    isLoggedIn,
    "data",
    data,
    "isFetching",
    isFetching,
    "isSuccess",
    isSuccess,
    "isError",
    isError
  );

  useEffect(() => {
    if (!isLoggedIn && isSuccess && data) {
      dispatch(currentUser(data));
    }
  }, [data, dispatch, isLoggedIn, isSuccess]);

  return (
    !isFetching && (
      <BrowserRouter>
        <NavBar />

        <Switch>
          <PublicRoute exact path="/" restricted>
            <HomePage />
          </PublicRoute>
          <PublicRoute path="/register" restricted>
            <RegisterForm />
          </PublicRoute>
          <PublicRoute path="/login" restricted>
            <LoginForm />
          </PublicRoute>
          <PrivateRoute isLoggedIn={isLoggedIn} redirectTo="/">
            <Contacts />
          </PrivateRoute>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  );
}
