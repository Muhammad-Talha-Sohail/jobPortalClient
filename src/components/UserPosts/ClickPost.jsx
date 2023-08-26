import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ClickPost = () => {
    const navigate = useNavigate();



    const clickPost = () => {
      try {
        navigate("/userPost");
        localStorage.setItem('userId',)
      }
      catch(err)
      {
        console.log(err)
      }
    };
    return (
      <div>
        <button
          onClick={clickPost}
        >
          My Post
        </button>
      </div>
    );
}

export default ClickPost