import React, { useState, useEffect } from "react";
import axiox from "axios";
import styled from "./Singup.module.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import loginImg from "/assets/img/login.jpg";
const Singup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [field, setField] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/Home");
    }
  }, []);

  const clickSignUp = async (e) => {
    console.log("Button click");
    try {
      e.preventDefault();
      const res = await axiox.post("http://localhost:5000/api/user/Signup", {
        email,
        password,
        phone,
        name,
        field,
        age,
        experience,
      });
      if (res) {
        console.log(res);
        localStorage.setItem("userId", res.data.data._id);
        localStorage.setItem("token", res.data.token);
        setEmail("");
        setPassword("");
        setAge("");
        setPhone(""), setName("");
        setField("");
        setExperience("");
        navigate("/Home");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div className={styled.containerfluid}>
        <div className={styled.container}>
          <div className={styled.innerContainer}>
            <img src={loginImg} className={styled.image} alt="Login" />
          </div>
          <div>
            <form className={styled.formBox}>
              <div className={styled.innerForm}>
                <h1>Sign Up</h1>

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

                  <TextField
                    id="standard-number"
                    label="Phone"
                    type="number"
                    variant="standard"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />

                  <TextField
                    id="standard-number"
                    label="Age"
                    type="number"
                    variant="standard"
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                  <TextField
                    id="standard-number"
                    label="Name"
                    type="text"
                    variant="standard"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <TextField
                    id="standard-number"
                    label="Field"
                    type="text"
                    variant="standard"
                    onChange={(e) => {
                      setField(e.target.value);
                    }}
                  />
                  <TextField
                    id="standard-number"
                    label="Experience"
                    type="text"
                    variant="standard"
                    onChange={(e) => {
                      setExperience(e.target.value);
                    }}
                  />
                </Box>
              </div>

              <div className={styled.btn}>
                <Button
                  className={styled.btn}
                  type="submit"
                  value="Login"
                  variant="contained"
                  onClick={clickSignUp}
                >
                  Sign Up
                </Button>
                <div className={styled.anchor}>
                  <p>
                    Already Have an Account <a href="/">Login </a>
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

export default Singup;
