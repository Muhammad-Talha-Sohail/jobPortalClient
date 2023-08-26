import React, { useEffect, useState } from "react";
import axiox from "axios";
import styled from "./login.module.css";
import { useNavigate } from "react-router-dom";
import loginImg from "/assets/img/login.jpg";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/Home");
    }
  }, []);

  const login = async (e) => {
    try {
      e.preventDefault();
      const res = await axiox.post("http://localhost:5000/api/user/login", {
        email,
        password,
      });
      alert("SucessFul Login");

      if (res) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user._id);
        console.log(res);
        navigate("/Home");
      } else {
        alert("Login Failed !");
      }

      // navigate('/Home');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div className={styled.containerfluid}>
        <div className={` ${styled.container} `}>
          <div className={styled.innerContainer}>
            <img src={loginImg} className={styled.image} alt="Login" />
          </div>

          <div className={styled.form}>
            <form onSubmit={login}>
              <h1>Log in</h1>
              <div className={styled.inputFields}>
                <Box
                  className={styled.box}
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    className={styled.textField}
                    type="text"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                  />

                  <TextField
                    className={styled.textField}
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Box>

                <Button
                  className={styled.btn}
                  type="submit"
                  value="Login"
                  variant="contained"
                >
                  LOGIN IN
                </Button>
                <div className={styled.anchor}>
                  <p>
                    <a href="/Signup">Create Account </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
