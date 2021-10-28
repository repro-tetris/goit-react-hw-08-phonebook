import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserEmail } from "../../redux/auth/auth-selectors";
import s from "./UserMenu.module.css";
import { logoutUser } from "../../redux/auth/auth-reducer";
import { useLogoutMutation } from "../../redux/auth/auth-slice";

export default function UserMenu() {
  const email = useSelector(getUserEmail);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const closeHandle = async () => {
    await logout();
    dispatch(logoutUser());
  };

  return (
    <div className={s.menu}>
      <p>{email}</p>
      <button onClick={closeHandle}>Exit</button>
    </div>
  );
}
