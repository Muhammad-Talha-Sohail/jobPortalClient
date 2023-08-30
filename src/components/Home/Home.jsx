import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../Home/Home.module.css";
import axios from "axios";
import Logout from "../LogOut/Logout";
import UserPost from "../UserPosts/UserPost";
import ClickPost from "../UserPosts/ClickPost";
import Navbar from "../NavBar/Navbar";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetchData();
    } else {
      navigate("/");
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/post/getJobList"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
    <div>
    <Navbar />
   </div>
      <div className={style.cont}>
        <div>
          <h1>Job Portal</h1>
        </div>
        <hr />
        <div className={style.container}>
        <div className={style.outerCard}>
          {data.map((job, index) => (
            <div key={index} className={style.innerCard}>
              <h2>Title: {job.jobTitle}</h2>
              <p>Location: {job.location}</p>
              <p>Experience required: {job.experience}</p>
              <p>Salary: {job.salary}</p>
              <p>Job type: {job.type}</p>
            </div>
          ))}
        </div></div>
      </div>
    </>
  );
};

export default Home;
