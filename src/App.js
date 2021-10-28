import { useEffect } from "react";
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

export default function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const { data, isFetching, isSuccess } = useCurrentQuery();

  console.log("data", data, "isFetching", isFetching, "isSuccess", isSuccess);

  if (isFetching) return <></>;

  if (!isLoggedIn && data) dispatch(currentUser(data));

  return (
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
          {/* <Contacts /> */}
        </PrivateRoute>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
