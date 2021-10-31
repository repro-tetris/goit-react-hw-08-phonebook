import { useEffect } from "react";
import { fetchUser, STATUS } from "./redux/auth/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./components/Header/Header";
import { Container } from "@mui/material";
import { Switch } from "react-router";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { ContactsView } from "./components/ContactsView/ContactsView";
import PublicRouter from "./PublicRouter/PublicRouter";
import { getUserStatus } from "./redux/auth/auth-selectors";
import HomeView from "./components/HomeView/HomeView";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  const dispatch = useDispatch();
  const status = useSelector(getUserStatus);
  useEffect(() => dispatch(fetchUser()), [dispatch]);

  if (status === STATUS.fetching) return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      <Container>
        <Switch>
          <PublicRouter exact path="/" restricted redirectTo="/contacts">
            <HomeView />
          </PublicRouter>
          <PublicRouter path="/register" restricted redirectTo="/contacts">
            <RegisterForm />
          </PublicRouter>
          <PublicRouter path="/login" restricted redirectTo="/contacts">
            <LoginForm />
          </PublicRouter>
          <PrivateRoute path="/contacts">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Container>
      <ToastContainer />
    </>
  );
}
