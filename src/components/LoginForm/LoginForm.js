import React from "react";
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/auth/auth-reducer";
import { useLoginMutation } from "../../redux/auth/auth-slice";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

export default function LoginForm() {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const submitHandle = async (e) => {
    e.preventDefault();

    const { email, password } = e.target;
    const { data, error } = await login({
      email: email.value,
      password: password.value,
    });

    if (data) {
      dispatch(loginUser(data));
    }
  };

  if (isLoggedIn) return <Redirect to="/contacts" />;

  return (
    <form onSubmit={submitHandle}>
      <label>
        email
        <input type="email" name="email"></input>
      </label>
      <label>
        password
        <input type="password" name="password"></input>
      </label>
      <button type="submit">submit</button>
    </form>
  );
}
