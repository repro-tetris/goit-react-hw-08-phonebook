import { Button, Grid, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/auth/auth-slice";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );
  };

  return (
    <Grid container alignItems="center" justifyContent="center" mt={3}>
      <form component="form" onSubmit={onSubmitHandler}>
        <Grid
          container
          columns={1}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <TextField
              name="name"
              required
              type="text"
              label="Name"
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              name="email"
              required
              type="email"
              label="e-mail"
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              name="password"
              required
              type="password"
              label="password"
            ></TextField>
          </Grid>
          <Grid item>
            <Button type="submit">Register</Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
