import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useState } from "react";
import axios from "axios";

interface Logindata {
  username: string;
  password: string | number;
  role?: string;
}

const Login = () => {
  const [logindata, setlogindata] = useState<Logindata>({
    username: "",
    password: "",
  });

  const loginchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
  };

  const logindone = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    try {
      const data = await axios.post(
        "https://fakestoreapi.com/auth/login",
        logindata
      );
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="email Address"
              name="username"
              value={logindata.username}
              onChange={loginchange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={logindata.password}
              onChange={loginchange}
              label="Password"
              //   type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      //   onClick={handleClickShowPassword}
                    >
                      {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* <FormControl fullWidth sx={{ mt: 1 }}>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="role"
                value={logindata.role}
                label="Age"
                onChange={loginchange}
              >
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"User"}>User</MenuItem>
              </Select>
            </FormControl> */}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => logindone(e)}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
