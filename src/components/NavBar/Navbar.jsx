import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Logout from "../LogOut/Logout";
import ClickPost from "../UserPosts/ClickPost";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
const Navbar = () => {
  const [value, setValue] = React.useState(0);
  const nav = useNavigate();
  const gotoAllPost = () => {
    if (value == 1) {
      nav("/Home");
    }
  };

  const gotoUserPost = () => {
    if (value == 0) {
      nav("/userPost");
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.text}>
          <div className={style.box}>
            <Box sx={{ width: "100%" }}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab
                  label="Home"
                  onClick={gotoAllPost}
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "timesNewRoman",
                    letterSpacing: "3px",
                    fontWeight: "600",
                  }}
                />
                <Tab
                  label="My Post"
                  onClick={gotoUserPost}
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "timesNewRoman",
                    letterSpacing: "3px",
                    fontWeight: "600",
                  }}
                />
              </Tabs>
            </Box>
          </div>
        </div>
        <div className={style.action}>
          <button>{<Logout style={{ border: "none" }} />}</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
