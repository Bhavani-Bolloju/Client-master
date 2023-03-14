import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import styled from "styled-components";
import Button from "@mui/material/Button";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormWrapper>
      <Form>
        <h1>Welcome</h1>
        <p>Enter your name and password</p>
        <TextField
          id="outlined-email-input"
          label="Email address"
          type="email"
          autoComplete="current-email"
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormButton variant="contained">Login</FormButton>
        <p>Forgot Password?</p>
      </Form>
      <Footer>
        <div>
          <span>Terms of use</span>
          <span>Privacy policy</span>
        </div>
        <p> Punctualiti 2022. All rights reserved</p>
      </Footer>
    </FormWrapper>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: end;
  gap: 1rem;
`;

const FormWrapper = styled.div`
  width: 70%;
  justify-self: center;
  text-align: center;
  display: grid;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  input,
  button {
    padding: 1.1rem;
  }
`;

const Footer = styled.footer`
  font-size: 1rem;
  align-self: end;
  justify-self: center;
  width: fit-content;
  div {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  p {
    font-size: inherit;
  }
  margin-bottom: 2rem;
`;

const FormButton = styled(Button)`
  && {
    background-color: #1334b3;

    &:hover {
      background-color: #1334b3;
    }
  }
`;

export default Login;
