import { Button, Typography, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getUserEmail } from "../../redux/auth/auth-selectors";
import { logoutUser } from "../../redux/auth/auth-slice";

export default function UserMenu() {
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();

  const onClickHandle = (e) => {
    dispatch(logoutUser());
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography>{email}</Typography>

      <Button color="secondary" variant="contained" onClick={onClickHandle}>
        LogOut
      </Button>
    </Stack>
  );
}
