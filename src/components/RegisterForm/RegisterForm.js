import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/auth-reducer";
import { useSignupMutation } from "../../redux/auth/auth-slice";

export default function RegisterForm() {
  const [signup] = useSignupMutation();
  const dispatch = useDispatch();

  const submitHandle = async (e) => {
    e.preventDefault();

    const { name, email, password } = e.target;

    const { data, error } = await signup({
      name: name.value,
      email: email.value,
      password: password.value,
    });

    if (!error) {
      dispatch(registerUser(data));
    } else {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandle}>
      <label>
        name
        <input name="name" type="text"></input>
      </label>
      <label>
        e-mail
        <input name="email" type="email"></input>
      </label>

      <label>
        password
        <input name="password" type="password"></input>
      </label>
      <button type="submit">register</button>
    </form>
  );
}
