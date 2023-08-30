import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./UserPost.module.css";
import Navbar from "../NavBar/Navbar";
const UserPost = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const res = await axios.get(
        `http://localhost:5000/api/post/userPosts/${userId}`
      );

      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteCard = async (id) => {
    try {
      if (id) {
        const res = await axios.delete(
          `http://localhost:5000/api/post/deletePost/${id}`,
          { method: "DELETE" }
        );
        console.log(res);
        setData(data.filter((job) => job.id !== id));

        window.location.reload();
      } else {
        console.log(id);
        alert("Not id given");
      }
    } catch (err) {
      console.log("Error in Job Deleting :" + err);
    }
  };
  return (
    <>
    <div>
    <Navbar/>
   </div>
      <div className={style.container}>
        <div className={style.header}>
          <h1>Hello on User Post</h1>
        </div>
        <div className={style.card}>
          
           {data.map((job, index) => (
            <div key={index} className={style.innerCard}>
              <h2>Title: {job.jobTitle}</h2>
              <p>Location: {job.location}</p>
              <p>Experience required: {job.experience}</p>
              <p>Salary: {job.salary}</p>
              <p>Job type: {job.type}</p>
              <div className={style.btn}>
                <button>Edit</button>
                <button onClick={() => deleteCard(job._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPost;
