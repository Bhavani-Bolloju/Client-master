import React, { useState, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import styled from "styled-components";
import Button from "@mui/material/Button";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const formHandler = async function (e) {
    const password = passwordRef.current.querySelector("input").value;
    const email = emailRef.current.querySelector("input").value;

    if (password.trim().length <= 0 || email.trim().length <= 0) {
      return;
    }

    let url;
    if (isloggedIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword";
    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp";
    }

    try {
      const sendData = await fetch(
        `${url}?key=${"AIzaSyD2ooMj4r04OZlAyOPa58O35Z-dIOniSpA"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": " application/json",
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );
      const res = await sendData.json();

      if (!sendData.ok) throw new Error(res.error.message);

      console.log("sucess");
    } catch (error) {
      setError(error.message);
    }
    passwordRef.current.querySelector("input").value = "";
    emailRef.current.querySelector("input").value = "";
  };

  return (
    <FormWrapper>
      <div className="form-container">
        <h1>Welcome</h1>
        <p>Enter your Email address and password</p>
        <Form>
          <TextField
            required
            id="outlined-basic"
            label="Email address"
            variant="outlined"
            type="email"
            ref={emailRef}
            onFocus={() => {
              setError(null);
            }}
          />

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              required
              ref={passwordRef}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormButton onClick={formHandler} variant="contained">
            {isloggedIn ? "Log In" : "Sign Up"}
          </FormButton>
          {error && <p className="error"> {error}</p>}

          <p>
            Already have an Account{" "}
            <button
              type="button"
              className="switch"
              onClick={() => {
                setIsLoggedIn((prev) => !prev);
              }}
            >
              signin?
            </button>
          </p>
          <p>Forgot Password?</p>
        </Form>
      </div>
      <Footer>
        <p className="terms">
          <span>Terms Of Use</span>
          <span>Privacy Policy</span>
        </p>
        <p className="rights">&#169; Punctualiti 2022. All rights reserved</p>
      </Footer>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  && {
    width: 70%;
    justify-self: center;
    text-align: center;
    display: grid;
    font-size: 1.1rem;
    color: #444;

    .form-container {
      align-self: end;
    }

    h1 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      letter-spacing: -0.5px;
    }

    h1 + p {
      margin-bottom: 2rem;
      color: #6f6f6f;
      letter-spacing: -0.5px;
    }

    input,
    button {
      padding: 1.1rem;
    }
    label {
      font-family: inherit;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: end;
  gap: 1rem;

  .switch {
    border: none;
    background-color: transparent;
    color: inherit;
    font-size: inherit;
    font-weight: bold;
    display: inline;
    padding: 0 !important;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .error {
    color: red;
  }
  p {
    color: #6f6f6f;
    font-weight: 600;
  }
`;

const Footer = styled.footer`
  font-size: 1rem;
  align-self: end;
  justify-self: center;

  .terms {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 0.5rem;
  }

  .rights {
    font-size: 0.8rem;
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

/*
if (email.trim().length === 0 && password.trim().length === 0) {
  return;
}

console.log("clicked");

try {
  const sendData = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${"AIzaSyD2ooMj4r04OZlAyOPa58O35Z-dIOniSpA"}`,
    {
      method: "POST",
      headers: {
        "Content-Type": " application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    }
  );

  console.log(sendData);

  // console.log(sendData);
  const res = await sendData.json();
  console.log(res);
  // if (!sendData.ok) {
  //   throw new Error(res.error.message);
  // }
} catch (error) {
  console.log(error);
  // setError(error.message);
}
setEmail("");
setPassword("");
console.log("reset");*/
