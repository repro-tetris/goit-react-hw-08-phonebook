import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserStatus } from "../../redux/auth/auth-selectors";
import { STATUS } from "../../redux/auth/auth-slice";
import UserMenu from "../UserMenu/UserMenu";

export const Header = () => {
  const isLogged = useSelector(getUserStatus) === STATUS.fulfilled;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Phonebook
        </Typography>
        {isLogged ? (
          <UserMenu />
        ) : (
          <Stack direction="row">
            <Button component={NavLink} to="/register" color="inherit">
              Register
            </Button>

            <Button
              component={NavLink}
              to="/login"
              color="secondary"
              variant="contained"
            >
              Login
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};
