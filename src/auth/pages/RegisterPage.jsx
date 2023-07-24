import { AuthLayout } from "../layout/AuthLayout";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const RegisterPage = () => {
  const { displayName, email, password, onInputChange } = useForm({
    email: "sara@google.com",
    password: "12345678",
    displayName: "Sara Nieto",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(displayName);
  };

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full name"
              fullWidth
              onChange={onInputChange}
              error
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={email}
              placeholder="youremail@google.com"
              fullWidth
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              fullWidth
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit">
                Create account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Already have an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
