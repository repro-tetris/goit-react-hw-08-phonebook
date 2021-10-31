import { Button, Typography, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/auth-slice";

export default function UserMenu() {
  const email = useSelector((store) => store.auth.user.email);
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
