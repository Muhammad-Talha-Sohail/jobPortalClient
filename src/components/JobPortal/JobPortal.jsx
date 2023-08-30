import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import style from "../JobPortal/JobPortal.module.css";
import Navbar from "../NavBar/Navbar";

const JobPortal = () => {
  
  const formData = new FormData();

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [type, setType] = useState("");

const [postImg,setPostImg]= useState("");

formData.append("title",title);
formData.append("location",location)
formData.append("salary",salary)
formData.append("experience",experience)
formData.append("type",type)
formData.append("postImg",postImg)

console.log(postImg)

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  const jobPost = async (e) => {
    e.preventDefault();
    try {
      const uId = localStorage.getItem("userId");
      if (uId) {
        const res = await axios.post(
          `http://localhost:5000/api/post/CreatePost/${uId}`,
          // { jobTitle: title, salary, location, jobtype: type, experience }
            formData
        );

        setTitle("");
        setLocation("");

        setSalary(""), setType("");
        setExperience("");
        alert("Successfully posted a new job");
      }
    } catch (err) {
      alert(`Error message from Job Portal: ${err}`);
    }
  };

  return (
    <>
    <div>
    <Navbar/>
   </div>
      <div className={style.containerLib}>
        <h1>Welcome to JobPortal!</h1>

        <div className={style.container}>
          <div className={style.body}>
            <form onSubmit={jobPost} className={style.form}  enctype="multipart/form-data" >
              <label>
                Title :{" "}
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  value={title}
                />
              </label>
              <label>
                {" "}
                Location :
                <input
                  type="text"
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  value={location}
                />
              </label>
              <label>
                {" "}
                Salary :{" "}
                <input
                  type="text"
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="Salary"
                  value={salary}
                />
              </label>
              <label>
                Experience :{" "}
                <input
                  type="text"
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="Experience"
                value={experience}
                />
              </label>
              <label>
                Type :
                <input
                  type="text"
                  onChange={(e) => setType(e.target.value)}
                  placeholder="Type"
                  value={type}
                />
              </label>
              <label>
               Image:
                <input
                  type="File"
                  onChange={(e) => setPostImg(e.target.files[0])}
                  placeholder="postImg"
                
                />
              </label>
              <input type="submit" value="Post" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPortal;
